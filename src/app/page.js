"use client";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import MyModal from "./components/Modal";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

import Card from "./components/card";
import meImage from "../../public/web-dev.svg";
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
                className=" scale-50 md:scale-50  relative z-10 fill- "
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
              <p className="text-3xl text-secondary font-bold">Owen Taylor</p>
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
                    <FaLinkedin className="hover:scale-110 ease-in-out duration-75 hover:text-secondary" />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/owen-tay"
                  >
                    <FaGithub className="hover:scale-110 ease-in-out duration-75 hover:text-secondary" />
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
            className="text-center borer-2  my-12 text-3xl font-bold text-secondary"
          >
            About Me
          </h2>
          <p className="text-xl mx-20">
            I’m looking to build a career in web development, with practical
            experience in{" "}
            <span className="font-bold">
              JavaScript, React, Python, and Web Design
            </span>{" "}
            using tools like Figma and Adobe Creative Suite. Currently
            developing projects that demonstrate front-end proficiency and a
            solid grasp of modern development workflows.
          </p>
        </div>
        <h2
          id="myWork"
          className="text-center borer-2  my-10 text-3xl font-bold text-secondary"
        >
          Some of my work
        </h2>
        <div className="flex justify-center items-center my-5">
          <div className="relative gap-5 flex justify-center items-center w-full h-28">
            <Image
              className="absolute z-0 w-full  h-full "
              src={buttonLeaf}
              alt="Leaves"
            />
            <a href="https://design.owentaylor.dev/" className="z-10">
              <button className="rounded-2xl bg-secondary border-neutral w-32 h-14 shadow-xl p-2 border-4 text-base-100 hover:scale-95 duration-100 ease-in-out">
                Design Work
              </button>
            </a>
            <a href="https://blog.owentaylor.dev/" className="z-10">
              <button className="rounded-2xl bg-secondary border-neutral w-32 h-14 shadow-xl p-2 border-4 text-base-100 hover:scale-95 duration-100 ease-in-out">
                Blog
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center  ">
        <Card
          title="OpenHowl"
          description="An open-source, self-hosted Discord soundboard that can be controlled by a web app from anywhere by multiple users. It includes direct uploading from YouTube as well as effects and volume control. Read more on my blog and Github."
          imageURL="/openhowl.png"
          link="https://github.com/owen-tay/OpenHowl"
        />

        <Card
          title="Conjury.dev"
          description="Freelance Web Dev Agency website built with Next13 used for attracting clients."
          imageURL="/conjury.png"
          link="https://conjury.dev/"
        />
        <Card
          title="DnD Tracker"
          description="React web app, built with firebase to allow DnD players to track their characters stats and items. Users to create a read-only version of their character sheet to share with others that update in real time. "
          imageURL="/dnd.png"
          link="https://dnd-inv-app.vercel.app/"
        />
        <Card
          title="Usercache"
          description="Admin dashboard CRUD web app, built with NextJS and firebase. "
          imageURL="/usercache.png"
          link="https://usercache.vercel.app/"
        />

        <Card
          title="Salt river Shakedown"
          description="Future website for the Glasgow based band - Salt River Shakedown."
          imageURL="/srs.png"
          link="https://srs-band-site.vercel.app/"
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
            className="rounded-2xl mt-10 bg-secondary border-neutral border-4 w-32 p-2 border text-base-100 hover:scale-95 duration-100"
            onClick={scrollToTop} // Added onClick event here
          >
            Return To top
          </button>
        </div>
      </div>
    </main>
  );
}
