'use client';
import Link from "next/link";
import WobbleCard from "@/components/wobble-card";
import Image from "next/image";
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import RetroGrid from "@/components/ui/retro-grid";
import { useEffect } from 'react';
import ShinyButton from "@/components/ui/shiny-button";
import useFluidCursor from "@/components/cursor";
import WordPullUp from "@/components/ui/word-pull-up";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { ParallaxScroll } from "@/components/ParallexScroll";
import useCanvasCursor from "@/components/cursor";
import BlurIn from "@/components/ui/blur-in";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import WordRotate from "@/components/ui/word-rotate";
import Meteors from "@/components/ui/meteors";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];


export function MeteorDemo() {
  

  return (
    <div className="relative flex h-[1000px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
     
      
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Meteors
      </span>
    </div>
  );
}



export default function Home() {
  useCanvasCursor();
  // useEffect(() => {
  //   useFluidCursor();
  // }, []);

  return (
    // h-[1000px]
    
        <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
{/* <canvas id='fluid' className='w-screen h-screen z-2' />
*/}
<canvas className='pointer-events-none fixed inset-0' id='canvas' />
<Meteors number={30} />


<div className="relative flex h-[680px] w-full flex-col items-center justify-center overflow-hidden ">
<div className="z-10 flex  items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Early Bid 20% Discount</span>    <div className="ml-1  transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" ><IconArrowNarrowRight stroke={2} /></div>
        </AnimatedShinyText>
    

      </div>
    </div>
  
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] from-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-6xl sm:text-9xl leading-none  text-transparent" style={{ fontFamily: 'WeirdComic, sans-serif' }} >
        1Pixel'25
      </span>
          {/* <div>
      <h1 style={{ fontFamily: 'WeirdComic, sans-serif' }}>This is a Sample Heading</h1>
      <p style={{ fontFamily: 'WeirdComic, sans-serif' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget orci ut ante
        posuere tempor. Curabitur viverra, lorem nec consequat euismod, metus elit cursus ante,
        sit amet consectetur libero velit sed odio.
      </p>
    </div> */}
      <div className="z-10 max-w-5xl mx-auto px-4 w-full text-center">
      Welcome to the 3rd Edition of 1-Pixel Design Conference 2025, North India's largest student-led design event, hosted by IIIT-Delhi. <br />Join visionaries, industry leaders, and design enthusiasts for two days of innovation, insights, and collaborative learning. Explore the latest trends, engage in hands-on workshops, and connect with a dynamic community of designers.
      </div>
      {/* <WordPullUp
      className="text-sm py-0 px-20 font-bold tracking-[-0.02em] text-black dark:text-white md:text-xl md:leading-[5rem]"
      words="North India's Largest Student-led Design Conference is Back, Bigger& Better than Ever..."
    /> */}
        <div className="relative pt-2 z-30 flex space-x-2 justify-center">
      {/* <InteractiveHoverButton /> */}
      <div><a href="/" target="_blank" rel="noopener noreferrer"><ShinyButton>Register Now</ShinyButton></a></div>
      <div>          <Link href="/" >
      <ShinyButton>Explore More</ShinyButton>    
          </Link></div>
      
      
    </div>
    

    <div className="absolute bottom-4 left-20 flex justify-center gap-4 shrink-0 max-w-full z-30 scale-60">
  <div className="font-display text-left text-2xl font-bold -tracking-widest text-black dark:text-white md:text-3xl flex flex-col items-end">
    <div>
      Venue: R&D, IIIT-Delhi <br /> 
      Date: 4th - 5th January 2025 <br />
      Time: 9:30am-5pm 
    </div>
    


    
  </div>
  </div>
    <div className="absolute bottom-4 right-20 flex justify-center gap-4 shrink-0 max-w-full z-30 scale-60">
  <div className="font-display text-right text-2xl font-bold -tracking-widest text-black dark:text-white md:text-3xl flex flex-col items-end">
    <div>
      
      Hosted with <br /> joint collaboration
    </div>
    
    <IconArrowNarrowRight stroke={4} className="mt-2" />



    
  </div>


    
  <Link href="https://hcd.iiitd.ac.in/" className="flex items-center">
    <Image
      src="/logo/hcdlogo.png"
      alt="hcd logo"
      width={100}
      height={100}
      style={{ objectFit: 'contain' }}
    />
  </Link>
  <Link href="https://cdnm.iiitd.ac.in/" className="flex items-center">
    <Image
      src="/logo/cdnmlogo.jpeg"
      alt="cdnm logo"
      width={100}
      height={100}
      style={{ objectFit: 'contain' }}
    />
  </Link>
  <Link href="https://iiitd.ac.in/" className="flex items-center">
    <Image
      src="/logo/iiitdlogo.png"
      alt="iiitd logo"
      width={100}
      height={100}
      style={{ objectFit: 'contain' }}
    />
  </Link>
</div>



      <RetroGrid />
    </div>
    

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      1Pixel
      </main> */}
      <div>
      <VelocityScroll
      text="1Pixel 1Pixel 1Pixel 1Pixel "
      default_velocity={3}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    /></div>
    <div>
    <WordRotate
      className=" font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] text-4xl  pt-10  font-bold text-black dark:text-white"
      words={["Legacy", "Memories" ,"Learnings"]}
    />
      {/* <BlurIn
      word="Past Lagacy"
      className="text-4xl font-bold text-black dark:text-white"
    /> */}
    <ParallaxScroll images={images}  /></div>
    <br />
    <BentoGridDemo/>
    {/* <ParallaxScroll images={images} /> */}
    <WobbleCardDemo/>




{/*      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer> */}
      
    </div>
    </div>
  );
}

const images = [
  "/images/20.png",
  "/images/21.png",
  "/images/22.png",
  "/images/23.png",
  "/images/24.png",
  "/images/25.jpg",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
  "/images/10.png",
  "/images/11.png",
  "/images/12.png",
  "/images/13.png",  
  "/images/14.png",
  "/images/15.png",
  "/images/16.png",
  "/images/19.png",

]


const WobbleCardDemo= () =>  {
  return (
    <div className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2  h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >        {/* added padding py-20 .its forced */}
        <div className="max-w-md pt-10">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-pink-500">
          1Pixel'25
          </h2>
          <p className="mt-4 text-left  text-base/6 text-black">

Department of Human Centered Design, <br />
Indraprastha Institute of Information Technology Delhi (IIIT-Delhi) ,<br />

New Delhi, Delhi 110020
          </p>
  


        </div>


  {/* <div className="flex justify-end ">
  <button className=" relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  <Image
              src='/images/PerSIsst_Final 1.svg'
              alt='persisst logo'
              width={25}
              height={100}
              className="mr-2"
              
              
            /> <Link href="mailto:pragma@iiitd.ac.in?subject=Enquiry: Here&body=Body Here">
            Drop Email

          </Link>
  </span>
</button></div> */}

      </WobbleCard>
      <div className="col-span-1 rounded-2xl overflow-hidden border border-purple-500 border-opacity-70">
  <iframe
    className="w-full h-full"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.827615231125!2d77.26982302618208!3d28.544900738053585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1726605696874!5m2!1sen!2sin"
    width="400"
    height="350"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
     
      {/* <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard> */}
    </div>
  );
}
