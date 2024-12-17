'use client';
import Link from "next/link";
import Image from "next/image";
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import RetroGrid from "@/components/ui/retro-grid";
import { useEffect } from 'react';
import ShinyButton from "@/components/ui/shiny-button";
import useFluidCursor from "@/components/cursor";
import WordPullUp from "@/components/ui/word-pull-up";

import useCanvasCursor from "@/components/cursor";

import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

import Meteors from "@/components/ui/meteors";


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


<div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden ">
<div className="z-10 flex  items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Early Bid 20% Discount</span>
          <div className="ml-1  transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" ><IconArrowNarrowRight stroke={2} /></div>
        </AnimatedShinyText>
      </div>
    </div>
  
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-6xl sm:text-9xl font-bold leading-none tracking-tighter text-transparent">
        1Pixel'25
      </span>
      <div className="z-10 max-w-4xl mx-auto px-4 w-full text-center">
      Welcome to the 1-Pixel Design Conference 2025, North India's largest student-led design event, hosted by IIIT-Delhi. Join visionaries, industry leaders, and design enthusiasts for two days of innovation, insights, and collaborative learning. Explore the latest trends, engage in hands-on workshops, and connect with a dynamic community of designers.
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

      <RetroGrid />
    </div>

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      1Pixel
      </main>
      <VelocityScroll
      text="1Pixel 1Pixel 1Pixel 1Pixel "
      default_velocity={3}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
    </div>
  );
}
