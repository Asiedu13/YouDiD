import React from "react";
import Github from "./svgs/Github";
import LinkedIn from "./svgs/LinkedIn";
import Whatsapp from "./svgs/Whatsapp";
import Telegram from "./svgs/Telegram";
import Facebook from "./svgs/Facebook";
import Instagram from "./svgs/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-[700px] bg-gray-700 text-amber-100 pt-[100px]">
      {/* Get in touch */}
      <div className="justify-center items-center mt-[40px]">
        <div className="flex justify-center items-center">
          <h2 className="text-4xl text-white">Get in Touch</h2>
        </div>
        <div className="flex justify-center items-center p-[1rem]">
          <div className="border-2 border-gray w-[900px] h-[75px] rounded-xl flex items-center ">
            <input
              className="bg-transparent text-gray-light w-[77%] h-[inherit] p-[1rem] outline-none border-none"
              type="text"
              placeholder="@email message goes here"
            />
            <button className="bg-gray-800 h-[90%] w-[200px] rounded-xl">
              Submit
            </button>
          </div>
        </div>
        {/* social media */}
        <div className="flex flex-col justify-center items-center mt-[10px] md:flex-row">
          <div className="flex justify-evenly items-center min-w-[400px] md:w-[900px] shrink md:shrink-0 ">
            <Link href="https://github.com/Asiedu13">
              <Github />
            </Link>
            <Link href="https://www.linkedin.com/in/princek-asiedu/">
              <LinkedIn />
            </Link>
            <Whatsapp />
            <Telegram />
            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>
      {/*  other details and links*/}
      <section className="mt-[50px] py-[30px] px-[60px] flex flex-col justify-between h-[300px] md:flex-row">
        {/* Logo like thingy */}
        <div className="md:px-[20px]">
          <b className="text-3xl">Prince.k</b>
          <p className="text-gray">Web developer</p>
        </div>
        {/* Contacts and linnks */}
        <div className="flex pr-[40px]">
          <div>
            <h2 className="text-gray-light text-xl">Meeee</h2>
            <div className="text-gray text-normal text-lg">
              <Link href=" ">
                <p className="py-[10px]">About me</p>
              </Link>
              <Link href=" ">
                <p className="py-[10px]">Services</p>
              </Link>
              <Link href=" ">
                <p className="py-[10px]">Projects</p>
              </Link>
              <Link href=" ">
                <p className="py-[10px]">Achievements</p>
              </Link>
            </div>
          </div>
          <div className="text-gray  ">
            <h2 className="text-gray-light font-normal text-xl ">Contact</h2>
            <p className="py-[10px] text-lg">princekofasiedu@gmail.com</p>
            <p className="py-[10px] text-lg">+233&nbsp;27&nbsp;769&nbsp;2892</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
