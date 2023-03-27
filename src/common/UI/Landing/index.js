import React from 'react';
import Image from 'next/image'
import ima_msn from '../../../../public/assets/images/ima_msn.png'
import cognosco from '../../../../public/assets/images/cognosco.png'
import undraw_img from '../../../../public/assets/images/undraw_img.png'
import org_1 from '../../../../public/assets/images/org_1.png'
import org_2 from '../../../../public/assets/images/org_2.png'
import org_3 from '../../../../public/assets/images/org_3.png'
import banner from '../../../../public/assets/images/banner.png'
const Cognosco =() =>{
  return (
    <>
      <div className="header fixed top-20 w-full flex justify-between items-center bg-white border-2 border-gray-300 rounded-2xl px-2">
        <div className="flex items-center">
          <Image src={ima_msn} className="w-12 mr-2" />
          <Image src={cognosco} className="w-40" />
        </div>
        <button className="bg-gray-800 text-white font-medium py-3 px-6 rounded-3xl text-sm">Register</button>
      </div>
      <div className="bg-cover bg-no-repeat bg-center h-96 flex justify-end items-end" style={{backgroundImage: `url('images/banner.png')`}}>
        <div className="text-white w-1/2 py-8 pr-10">
          <h1 className="text-6xl font-bold mb-8">Cognosco</h1>
          <button className="bg-black text-white font-medium py-3 px-6 rounded-2xl text-xl mb-10">Register</button>
        </div>
      </div>
      <div className="about py-28 px-10">
        <h1 className="text-4xl font-bold mb-8">About the Event</h1>
        <div className="flex justify-between">
          <div className="w-1/2 pr-12">
            <p className="text-lg mb-4"><b>All winners have secrets don't they?</b><br />And these little secrets makes the difference between an aspirant and a winner. So the ima msn Kerala brings to u all thats required to secure a seat in medical Colleges across the state. Cognosco is a single day event encompassing sessions by previous year toppers sharing their little cheat codes to victory, Dr Arun B Nair's ace session on Psychological stress management and a mock neet examination to prep you up for your Big day. See you in medical College.</p>
          </div>
          <div className="w-1/2">
            <Image src={undraw_img} alt="" />
          </div>
        </div>
      </div>
      <div className="map py-28 px-10 bg-purple-100">
        <h1 className="text-4xl font-bold mb-8">Centres</h1>
        <div className="flex justify-between">
          <div className="w-1/2 pr-12">
            <p className="text-lg mb-4">Gmc Trivandrum <b>(700)</b> slots</p>
          </div>
        </div>
      </div>
      <div className="chart py-28 px-10">
        <h1 className="text-4xl font-bold mb-8">Statistics</h1>
        <p className="text-lg mb-4 rounded-xl py-4 px-12 bg-purple-100">Last year, the mock NEET examination had a success rate of 95% with an average score of 560.</p>
      </div>
      <div className="organisers py-28 px-10 bg-purple-100">
        <h1 className="text-4xl font-bold mb-8">Organisers</h1>
        <div className="flex justify-between">
          <div className="w-1/3 pr-12">
            <Image src={org_1} alt="" />
          </div>
          <div className="w-1/3 pr-12">
            <Image src={org_2} alt="" />
          </div>
          <div className="w-1/3 pr-12">
            <Image src={org_3} alt="" />
          </div>
        </div>
      </div>
      <div className="footer py-28 px-10">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="flex justify-between">
          <div className="w-1/2 pr-12">
            <p className="text-lg mb-4">ima msn Kerala<br />+91 9999999999<br />
            <a href="mailto:
            ">
              </a>
            </p>
          </div>
          <div className="w-1/2">
            <Image src={undraw_img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Cognosco;