"use client";
import Image from "next/image";
import React from "react";
import Typed from 'typed.js';
const  Home=() =>{
  const el=React.useRef(null);
  React.useEffect(()=>{
    const typed=new Typed(
      el.current,
      {
        strings:["Easy Ordering", "Secure Payments", "Real-Time Tracking"],
        backSpeed:160,
        typeSpeed:90,
        backDelay:1000,
        showCursor:false,
        loop:true,
      }
    );
  });
  return (
    <main className=" h-screen bg-theme-light">
      <div className="home h-full flex-col ">
      <h1 className="welcome  text-theme-dark font-serif font-thin text-5xl">Welcome to Gazebo Bites </h1>
      <p className="typed text-theme-dark font-serif font-thin text-2xl fixed translate-y-10" ref={el}> </p>
      </div>
    </main>
  );
}
export default Home;