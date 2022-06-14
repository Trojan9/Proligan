import React from 'react'
import heroview from "./assets/hero-view.png"


const About = () => {
  return (
    <>
        <div className="md:flex  items-center mt-20 md:mt-10">
        <div className="md:ml-10 text-center md:text-left md:mb-24">
          <h1 className="text-2xl md:text-5xl  text-black font-Bitter  md:pt-0 md:w-1/2">
            All you need to know About <span className="text-orange">Proligan.</span>
          </h1>
          <p className="font-DM-Sans text-grey2 md:text-2xl md:w-2/3 md:mt-4">
            Proligan is an online financial platform where different thrift transactions are streamlined
            and users can join or create their own thrift individually or with a group
             of people from the comfort of their devices.
          </p>
        </div>
         <div className="mt-10 md:mt-0 px-10 md:px-0 md:mr-20">
          <img src={heroview} alt="phoneframe" className="" />
         </div>
      </div>
      <div className='md:ml-10'>
        <h1  className='md:text-5xl font-Bitter text-blue text-center md:mb-8'>Our Business Needs</h1>
        <p className='md:text-2xl text-grey2 md:px-10'>Proligan reguires a mobile app which allows users to create and join in thrifts of their choosing with a 
          specified time frame and amount. Our product is built on 3 concept which are:
        </p>
         <ul className='md:mt-8 md:px-10 md:text-2xl font-DM-Sans list-disc'>
           <li className='md:mb-4 text-grey1'>Thrift Transactions:<span className='text-grey2'>save money installmentally towards a goal.</span></li>
           <li className='md:mb-4 text-grey1'>Purchases: <span className='text-grey2'>Make your airtime data and other subscriptions</span></li>
           <li className=''>Trade Business:<span className='text-grey2'>Use our trusted platform to make payments</span></li>
         </ul>
         <p className='md:mt-8 md:px-10  font-DM-Sans md:text-2xl text-grey2'>Proligan gives you a seamless process for sellers and buyers to transact all their businesses
           as well as build and cultivate better financiall patterns and plans.
         </p>
      </div>
    </>
  )
}

export default About