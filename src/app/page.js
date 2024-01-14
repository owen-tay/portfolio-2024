import Image from "next/image";
import ReactMarkdown from "react-markdown";

import Card from "./components/card";
import meImage from "../../public/me.jpg";
import leavePile from "../../public/leavePile.svg";
import rightLeaves from "../../public/rightLeaves.svg";
import leftLeaves from "../../public/leftLeaves.svg";
import botrightLeaves from "../../public/botrightLeaves.svg";
import botleftLeaves from "../../public/botleftLeaves.svg";

//Here is my markdown for my dropdowns

const markdownContent = `
# Salt River Shakedown

_A simple website for the band that includes tour dates, music and videos._


This website was built with next and uses tailwind css.
 

Also features a Wordpress WooCommerce store for merch. Not currently live due to waiting on merch from the band and info on their next tour.


`;


// Markdown end 

export default function Home() {
  return (
    <main className="relative">
      <div className="relative h-screen border-2 border-green-owen">
        <Image
          className="absolute leavesRight hidden md:block   "
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
        <div className="flex justify-center items-center min-h-screen  ">
          <div className="flex flex-col md:flex-row  justify-center max-w-4xl mx-auto p-4 gap-4 ">
            <div className="md:w-1/2 flex justify-center relative p-4 rounded-lg">
              <Image
                className="rounded-full  scale-50 relative p-8 md:p-0 z-10 md:scale-75  "
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

              <div className=" w-full justify-center md:justify-start flex my-4">
                <button
                  className="rounded-2xl bg-green-400 p-2 border text-base-100 hover:scale-95 duration-100
          
          "
                >
                  Contact Me
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className=" h-screen">
        <Card
          title="Salt river Shakedown"
          description="Future website for the Glasgow based band, Salt River Shakedown."
          imageURL="/srs.png"
          link="https://srs-band-site.vercel.app/"
          moreInfoContent={markdownContent}
          
        />
        
        <Card
          title="Salt river Shakedown"
          description="Future website for the Glasgow based band, Salt River Shakedown."
          imageURL="/srs.png"
          link="https://srs-band-site.vercel.app/"
          moreInfoContent='# Test Header

          This is a paragraph with **bold** and *italic* text.
          
          ## Another Header
          
          More text here.
          
          Normal text on a new line.'
        />


      </div>
    </main>
  );
}
