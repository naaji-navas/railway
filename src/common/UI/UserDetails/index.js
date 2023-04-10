import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import axios from "axios";
import Link from "next/link";
import qr_code from "../../../../public/assets/images/qr_code.jpg";
import Image from "next/image";
import * as React from "react";
import Loader from "@/common/UI/UserDetails/Loader";

const UserDetails = () => {
  const [paid, setPaid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

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
        if (data.status) {
          setPaid(data.status === 1);
        }
      } catch (error) {}
    };

    fetchUserDetails();
  }, [apiUrl]);

  useEffect(() => {
    const message = localStorage.getItem("tokenid");
    setMessage(message);
  }, [message]);

  // create a  modal to show the qr code

  // const initializeRazorpay = () => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //
  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //
  //     document.body.appendChild(script);
  //   });
  // };
  // a signout function
  const signOut = () => {
    localStorage.removeItem("tokenid");
    router.push("/signin");
  };

  // const makePayment = async () => {
  //   const res = await initializeRazorpay();
  //
  //   if (!res) {
  //     alert("Razorpay SDK Failed to load");
  //     return;
  //   }
  //
  //   // Make API call to the serverless API
  //   const response = await fetch(apiUrl + "payment/initiate/", {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${message}`,
  //     },
  //   });
  //   const data = await response.json();
  //
  //   console.log(data);
  //
  //   var options = {
  //     key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
  //     name: "Manu Arora Pvt Ltd",
  //     currency: data.currency,
  //     amount: data.amount,
  //     order_id: data.id,
  //     description: "Thankyou for your test donation",
  //     image: "https://manuarora.in/logo.png",
  //     handler: function (response) {
  //       if (response.razorpay_payment_id) {
  //         alert("Payment Successful");
  //

  //         getPaymentStatus(
  //           response.razorpay_payment_id,
  //           response.razorpay_signature
  //         );
  //         setPaid(true);
  //       } else {
  //         alert("Payment Failed");
  //       }
  //
  //       // alert(responseresult.razorpay_payment_id);
  //       // alert(responseresult.razorpay_order_id);
  //       // alert(responseresult.razorpay_signature);
  //     },
  //     prefill: {
  //       name: "Manu Arora",
  //       email: "manuarorawork@gmail.com",
  //       contact: "9999999999",
  //     },
  //   };
  //
  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.on("payment.failed", function (response) {
  //     // alert(responseresult.error.code);
  //     alert(response.error.description);
  //     // alert(responseresult.error.source);
  //     // alert(responseresult.error.step);
  //     alert(response.error.reason);
  //     // alert(responseresult.error.metadata.order_id);
  //     // alert(responseresult.error.metadata.payment_id);
  //   });
  //   paymentObject.open();
  // };

  // a javascript function to download the pdf from an api responseresult

  async function downloadPdf() {
    try {
      const response = await axios.get(apiUrl + "pdf/generate/", {
        responseType: "blob",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${message}`,
        },
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "document.pdf");
      document.body.appendChild(link);
      link.click();
      console.log("PDF downloaded successfully!");
    } catch (error) {
      console.error(error);
    }
  }

  const getPaymentStatus = async (paymentId, signature) => {
    try {
      const res = await fetch(apiUrl + "payment/verify/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${message}`,
        },
        body: JSON.stringify({
          razorpay_payment_id: paymentId,
          razorpay_signature: signature,
        }),
      });
      const data = await res.json();
      console.log(apiUrl, data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    const fileInput = document.querySelector('input[type="file"]');
    const file1 = fileInput.files[0];
    if (file1) {
      try {
        setIsLoading(true);
        var formData = new FormData();
        console.log(file1);
        formData.append("file", file1);
        console.log(formData);
        const response = await fetch(apiUrl + "payment/upload_upi/", {
          method: "POST",
          headers: {

            Authorization: `Bearer ${message}`,
          },
          body: formData,
          mode:"no-cors"
        });

        const responseData = await response.json();
        console.log(responseData);
        alert(responseData.msg);
        setIsLoading(false);
        if (responseData.msg === "UPI img successfully uploaded") {
          setShowModal(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error("No file selected");
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
        if (data.status) {
          setPaid(data.status === 1);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails().then((r) => console.log(r));
  }, [apiUrl, message]);

  return (
    <div className="my-20-5  overflow-y-scroll">
      <Link href="/">
        <div className="flex md:flex-row flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-indigo-700 mb-8">Cognosco</h1>
        </div>
      </Link>
      <div className="flex md:flex-row  flex-col justify-center gap-3 items-center ">
        {/* Program Details */}
        {paid ? (
          <div className="bg-white rounded-lg  shadow-lg p-6 max-w-3xl mx-auto ">
            <h1 className="text-2xl font-bold mb-4 text-center text-indigo-700">
              Program Details
            </h1>
            <div className="flex flex-col gap-4 text-lg">
              <div className="bg-indigo-100 p-4 rounded-md">
                8 to 8.30 inauguration
              </div>
              <div className="bg-indigo-200 p-4 rounded-md">
                8.30 to 9.30 talk by toppers
              </div>
              <div className="bg-indigo-300 p-4 rounded-md">
                9.30 to 10 talk by psychiatrist
              </div>
              <div className="bg-indigo-400 p-4 rounded-md">
                10.30 to 1.30 exam
              </div>
            </div>
            <div className="justify-center mt-6">
              <a
                href="https://chat.whatsapp.com/HacGrs1p4h56I84MMt3bkS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full">
                  Join our Whatsapp Group
                </button>
              </a>
            </div>
          </div>
        ) : null}

        <div className="bg-white rounded-lg shadow-lg p-6   ">
          <h1 className="text-2xl font-bold text-indigo-700 mb-4">
            User Details
          </h1>
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
            <div>
              {user.upi ? "Pending Verification" : paid ? "Paid" : "Not Paid"}
            </div>
            {!paid ? (
              <Button
                onClick={() => {
                  setShowModal(true);
                }}
                className="bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-500"
                variant="contained"
              >
                Pay with UPI
              </Button>
            ) : (
              <Button
                onClick={downloadPdf}
                className="bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-500"
                variant="contained"
              >
                Download PDF
              </Button>
            )}
            <div className="text-center sm:text-right">
              <Button
                onClick={() => signOut()}
                className="bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-500 "
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>

        {showModal ? (
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col justify-center w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 gap-5 rounded-t">
                  <h3 className="text-2xl font-semibold">Pay with UPI</h3>
                  <button
                    className=" ml-auto bg-transparent border-0 text-black  float-none text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-red-800 opacity-2  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6  justify-center items-center">
                  <div className="mx-5 flex flex-col justify-center align-middle items-center">
                    <h1 className="font-semibold">
                      Scan the QR Code Below and make payment of Rs. 590 (500+90
                      GST)
                    </h1>

                    <Image
                      className="object-contain h-96 w-96"
                      src={qr_code}
                      alt="qr code for payment"
                    />
                    <div className="flex justify-center">
                      <form onSubmit={handleUpload}>
                        <input
                          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                          name="image"
                          type="file"
                          accept="image/*"
                          placeholder="add image"
                        />
                        {isLoading ? <Loader /> : null}
                        <button
                          className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                          shadow-lg"
                        >
                          Upload
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <Button
                    onClick={() => setShowModal(false)}
                    className="bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-500"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {paid ? (
          <div className="bg-white rounded-lg shadow-lg p-5 min-w-[40%] align-middle justify-center  mx-auto">
            <h1 className="text-2xl text-indigo-700 font-bold mb-4 text-center">
              Location Details
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {user.pref_loc == "Kochi" ? (
                <div className="flex justify-center p-5 items-center h-[400px]">
                  <iframe
                    className="m-4"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.98242584101!2d76.28940321683658!3d10.006623109668615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c058ff7a4cd%3A0xa9c697fee1e03c65!2sGovernment%20Medical%20College%20Ernakulam!5e0!3m2!1sen!2sin!4v1679807141846!5m2!1sen!2sin"
                    width="90%"
                    height="90%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              ) : (
                <div className="flex justify-center items-center h-[400px] p-5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.98242584101!2d76.28940321683658!3d10.006623109668615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c058ff7a4cd%3A0xa9c697fee1e03c65!2sGovernment%20Medical%20College%20Ernakulam!5e0!3m2!1sen!2sin!4v1679807141846!5m2!1sen!2sin"
                    width="90%"
                    height="90%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserDetails;
