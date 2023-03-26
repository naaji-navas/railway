import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import axios from "axios";
import Link from "next/link";
// import fs from "fs";


const UserDetails = () => {
  const [paid, setPaid] = useState(false);
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
          setPaid(true);
        } else {
          alert("Payment Failed");
        }
    
       
        // alert(responseresult.razorpay_payment_id);
        // alert(responseresult.razorpay_order_id);
        // alert(responseresult.razorpay_signature);
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      // alert(responseresult.error.code);
      alert(response.error.description);
      // alert(responseresult.error.source);
      // alert(responseresult.error.step);
      alert(response.error.reason);
      // alert(responseresult.error.metadata.order_id);
      // alert(responseresult.error.metadata.payment_id);
    });
    paymentObject.open();
  };




// a javascript function to download the pdf from an api responseresult


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
        setPaid(data.transac.status===1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchUserDetails();
}, [apiUrl, message]);

  return (
    <div>

    <div className="flex justify-center  items-center  ">
  <h1 className="text-3xl font-bold text-indigo-700 mb-8   ">
    IMA MSN
  </h1>
    </div>
    <div className="flex justify-center items-center min-w-fit h-screen">
      {paid ? (<div className="bg-white rounded-lg shadow-lg p-6 max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
  <h1 className="text-2xl font-bold mb-4 text-center text-indigo-700">
    Program Details
  </h1>
  <div className="grid grid-cols-1 gap-4 text-lg">
    <div className="bg-indigo-100 p-4 rounded-md">8 to 8.30 inauguration</div>
    <div className="bg-indigo-200 p-4 rounded-md">8.30 to 9.30 talk by toppers</div>
    <div className="bg-indigo-300 p-4 rounded-md">9.30 to 10 talk by psychiatrist</div>
    <div className="bg-indigo-400 p-4 rounded-md">10.30 to 1.30 exam</div>
  </div>
  <div className="flex justify-center mt-6">
    <Link href={{ pathname: "https://chat.whatsapp.com/HacGrs1p4h56I84MMt3bkS" }} target="_blank">
      <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full">
        Join our Whatsapp Group
      </button>
    </Link>
  </div>
</div>
) : null}

<div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto ">
  <h1 className="text-2xl font-bold text-indigo-700 mb-4">User Details</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
    {!paid ? (
      <Button onClick={makePayment} className="bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-500" variant="contained">
        Pay with Razorpay
      </Button>
    ) : (
      <Button onClick={downloadPdf} className="bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-500" variant="contained">
        Download PDF
      </Button>
    )}
    <div className="text-center sm:text-right">
      <Button onClick={() => signOut()} className="bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-500" variant="contained">
        Sign Out
      </Button>
    </div>
  </div>
</div>
      {paid?(<div className="bg-white rounded-lg shadow-lg p-2 min-w-[40%] align-middle justify-center  mx-auto">
  <h1 className="text-2xl text-indigo-700 font-bold mb-4 text-center"  >
    Location Details
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
    {user.pref_loc === 'Kochi' ? (
      <div className="flex justify-center items-center h-[400px]">
        <iframe className="m-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.98242584101!2d76.28940321683658!3d10.006623109668615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c058ff7a4cd%3A0xa9c697fee1e03c65!2sGovernment%20Medical%20College%20Ernakulam!5e0!3m2!1sen!2sin!4v1679807141846!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    ):(    <div className="flex justify-center items-center h-[400px]">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.98242584101!2d76.28940321683658!3d10.006623109668615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c058ff7a4cd%3A0xa9c697fee1e03c65!2sGovernment%20Medical%20College%20Ernakulam!5e0!3m2!1sen!2sin!4v1679807141846!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>)}
  </div>
</div>
):null}
    </div>
       </div>
  );
};

export default UserDetails;
