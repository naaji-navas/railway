import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Message_data } from "../../../../context/context";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const UserDetails = () => {
  const [paid, setPaid] = useState(false);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(localStorage.getItem("token"));
  const apiUrl = "https://ima-msn.up.railway.app/current_user/";

  const router = useRouter();

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const response = await fetch(
      "https://ima-msn.up.railway.app/payment/initiate/",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${message}`,
        },
      }
    );
    const data = await response.json();

    console.log(data);

    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      name: "Manu Arora Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    paymentObject.open();
  };

  const handleDownloadPDF = async () => {
    try {
      const response = await fetch(
        "https://ima-msn.up.railway.app/pdf/generate/",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${message}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate PDF");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.pdf");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${message}`,
          },
        });
        const data = await res.json();
        setUser(data);
        console.log(data);

        data.transac.status == 0 ? setPaid(false) : setPaid(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserDetails();
  }, [apiUrl, message]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-[80%] align-middle justify-center mt-[20%] mx-auto text-ellipsis overflow-hidden">
      <h1 className="text-ellipsis overflow-hidden text-2xl font-bold mb-4">
        User Details
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="font-semibold">Name:</div>
        <div>{user.name}</div>
        <div className="font-semibold">Place:</div>
        <div>{user.place}</div>
        <div className="font-semibold">Phone Number:</div>
        <div>{user.phone_no}</div>
        <div className="font-semibold">Alternate Phone Number:</div>
        <div>{user.alt_phone_no}</div>
        <div className="font-semibold">Email:</div>
        <div>{user.email_id}</div>
        <div className="font-semibold">Alternate Email:</div>
        <div>{user.alt_email_id}</div>
        <div className="font-semibold">Preferred Location:</div>
        <div>{user.pref_loc}</div>
        {!paid ? (
          <Button id="rzp-button1" onClick={makePayment} variant="contained">
            Pay with Razorpay
          </Button>
        ) : (
          <Button
            id="rzp-button1"
            onClick={handleDownloadPDF}
            variant="contained"
          >
            Download PDF
          </Button>
        )}
      </div>
    </div>
  );
};

export default UserDetails;