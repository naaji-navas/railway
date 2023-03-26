import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import axios from "axios";
// import fs from "fs";


const UserDetails = () => {
  const [paid, setPaid] = useState(0);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const router = useRouter();


    useEffect(() => {
    const message = localStorage.getItem("tokenid");
    setMessage(message);
  }, [message]);


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
// a signout function
  const signOut = () => {
    localStorage.removeItem("tokenid");
    router.push("/signin").then(r => console.log(r));
  }
  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const response = await fetch(
      apiUrl+"payment/initiate/",
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
        if (response.razorpay_payment_id) {
          alert("Payment Successful");

         
          getPaymentStatus(response.razorpay_payment_id,response.razorpay_signature)
          setPaid(1);
        } else {
          alert("Payment Failed");
        }
    
       
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      // alert(response.error.code);
      alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
    paymentObject.open();
  };




// a javascript function to download the pdf from an api response


async function downloadPdf() {
  try {
    const response = await axios.get('https://ima-msn.up.railway.app/pdf/generate/', {
      responseType: 'blob',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${message}`,
      }

    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'document.pdf');
    document.body.appendChild(link);
    link.click();
    console.log('PDF downloaded successfully!');
  } catch (error) {
    console.error(error);
  }
}





















   const getPaymentStatus = async (paymentId,signature) => {
  try {
    const res = await fetch(apiUrl+"payment/verify/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${message}`,
      },
      body: JSON.stringify({
        razorpay_payment_id:paymentId ,
        razorpay_signature: signature,
      })


    });
    const data = await res.json();
    console.log(apiUrl, data);

  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
  const fetchUserDetails = async () => {
    try {
      const res = await fetch(apiUrl + "current_user/", {
        headers: {
          Authorization: `Bearer ${message}`,
        },
      });
      const data = await res.json();
      setUser(data);
      console.log(data);
      if (data.transac) {
        setPaid(data.transac.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchUserDetails();
}, [apiUrl, message]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-[80%] align-middle justify-center mt-[10%] mx-auto text-ellipsis overflow-hidden">
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
         <div className="font-semibold">Payment Status:</div>
         <div>{!paid ? "Not Paid" : "Paid"}</div>
        {!paid? (
          <Button id="rzp-button1" onClick={makePayment} variant="contained">
            Pay with Razorpay
          </Button>
        ) : (
          <Button
            id="rzp-button1"
            onClick={downloadPdf}
            variant="contained"
          >
            Download PDF
          </Button>
        )}
          <div>
                <Button
            onClick={()=>{
            signOut()}
            }
            variant="contained"
          >
            Sign Out
          </Button>
      </div>
      </div>


    </div>
  );
};

export default UserDetails;
