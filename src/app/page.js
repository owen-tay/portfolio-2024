"use client";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import MyModal from "./components/Modal";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

import Card from "./components/card";
import meImage from "../../public/me.jpg";
import leavePile from "../../public/leavePile.svg";
import rightLeaves from "../../public/rightLeaves.svg";
import leftLeaves from "../../public/leftLeaves.svg";
import botrightLeaves from "../../public/botrightLeaves.svg";
import botleftLeaves from "../../public/botleftLeaves.svg";
import buttonLeaf from "../../public/buttonleaf.svg";

import aboutMe from "../../public/aboutme.svg";
import Link from "next/link";

// Function to scroll to the top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // for smooth scrolling
  });
};

export default function Home() {
  return (
    <main className="relative">
      <Analytics />

      <div className="relative h-screen border-2 border-green-owen">
        <Image
          className="absolute   leavesRight hidden md:block   "
          src={leftLeaves}
          alt="Left Leaves"
          layout="intrinsic"
        />
        <Image
          className=" absolute right-0 hidden md:block "
          src={rightLeaves}
          alt="right leaves"
          layout="intrinsic"
        />
        <Image
          className=" absolute bottom-0 overflow-hidden right-0 hidden md:block leaveRotate2  "
          src={botrightLeaves}
          alt="bot right leaves"
          layout="intrinsic"
        />
        <Image
          className=" absolute bottom-0 overflow-hidden hidden md:block "
          src={botleftLeaves}
          alt="bot left"
          layout="intrinsic"
        />
        <div className="flex justify-center items-start md:items-center min-h-screen  ">
          <div className="flex flex-col md:flex-row justify-normal  md:justify-center max-w-4xl mx-auto p-4 gap-4 ">
            <div className="md:w-1/2 flex justify-center relative p-4 rounded-lg">
              <Image
                className="rounded-full  scale-50 relative p-12 sm:p-20 md:p-0 z-10 md:scale-75  "
                src={meImage}
                alt="Owen Taylor"
                layout="intrinsic"
              />
              <Image
                className="  bottom-2  sm:scale-105 md:scale-150 leaveRotate ease-in-out   
         absolute z-0 "
                src={leavePile}
                alt="leave background"
                layout="intrinsic"
              />
            </div>
            <div className="md:w-2/4 ml-0 md:text-left md:ml-14 flex text-center   flex-col justify-center ">
              <p className="text-3xl text-green-400 font-bold">Owen Taylor</p>
              <p className="text-xl">Front End Web Developer</p>
              <p className="text-xl">me@owentaylor.dev</p>
              <p className="text-xl">Glasgow</p>
              <div>
                <div className="flex justify-center md:justify-normal text-4xl mt-4 gap-3">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/owen-taylor-3b38ba272/"
                  >
                    <FaLinkedin className="hover:scale-110 ease-in-out duration-75 hover:text-green-400" />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/owen-tay"
                  >
                    <FaGithub className="hover:scale-110 ease-in-out duration-75 hover:text-green-400" />
                  </Link>
                </div>
              </div>

              <MyModal />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <h2
            id="myWork"
            className="text-center borer-2  my-12 text-3xl font-bold text-green-400"
          >
            About Me
          </h2>
          <p className="text-xl m-16">
            I recently graduated with an HND in web development from City of
            Glasgow College. I am excited to embark on a rewarding career in the
            field. With experience in{" "}
            <span className="font-bold">
              JavaScript, React, PHP and Web Design
            </span>{" "}
            with Figma and the Adobe Creative Suite , I am eager to contribute
            and continue to grow my skills.
          </p>
        </div>
        <h2
          id="myWork"
          className="text-center borer-2  my-10 text-3xl font-bold text-green-400"
        >
          Some of my work
        </h2>
        <div className="flex justify-center items-center my-5">
      <div className="relative flex justify-center items-center w-full h-28"> 
        <Image
          className="absolute z-0 w-full h-full " 
          src={buttonLeaf}
          alt="Leaves"
        />
        <a href="https://design.owentaylor.dev/" className="z-10">
          <button className="rounded-2xl bg-green-400 border-neutral w-32 h-14 shadow-xl p-2 border-4 text-base-100 hover:scale-95 duration-100 ease-in-out">
            Design Work
          </button>
        </a>
      </div>
    </div>
    </div>
      <div className=" flex flex-wrap justify-center  ">
        <Card
          title="Usercache"
          description="Admin dashboard CRUD web app, built with NextJS and firebase. "
          imageURL="/usercache.png"
          link="https://usercache.vercel.app/"
        />

        <Card
          title="Conjury.dev"
          description="Freelance Web Dev Agency website used for clients."
          imageURL="/conjury.png"
          link="https://conjury.dev/"
        />
        <Card
          title="DnD Tracker"
          description="A react web app, built with firebase to allow DnD players to track their characters stats and items"
          imageURL="/dnd.png"
          link="https://dnd-inv-app.vercel.app/"
        />

        <Card
          title="Salt river Shakedown"
          description="Future website for the Glasgow based band - Salt River Shakedown."
          imageURL="/srs.png"
          link="https://srs-band-site.vercel.app/"
        />
        <Card
          title="Cycle Glasgow"
          description="My college project, built to encourage cycling in Glasgow. Built with PHP and features a CRUD item listing system as well as a blog and uses a map API"
          imageURL="/cycle.png"
          link="https://cycleglasgow.yupstuff.net/index.php"
        />
      </div>
      <div className="h-32 relative">
        {" "}
        <Image
          className=" absolute bottom-0 overflow-hidden right-0 hidden md:block leaveRotate2  "
          src={botrightLeaves}
          alt="bot right leaves"
          layout="intrinsic"
        />
        <Image
          className=" absolute bottom-0 overflow-hidden hidden md:block "
          src={botleftLeaves}
          alt="bot left"
          layout="intrinsic"
        />{" "}
        <div className="flex justify-center ">
          <button
            className="rounded-2xl mt-10 bg-green-400 border-neutral border-4 w-32 p-2 border text-base-100 hover:scale-95 duration-100"
            onClick={scrollToTop} // Added onClick event here
          >
            Return To top
          </button>
        </div>
      </div>
    </main>
  );
}
