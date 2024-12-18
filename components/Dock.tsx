import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandBehance,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandX,
  IconBrandYoutube,
  IconExchange,
  IconHome,
  IconNews,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function Dock() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-black-500" />
      ),
      href: "https://in.linkedin.com/company/hcdiiitd",
    },
    {

      title: "Twitter",
      icon: (
        <IconBrandTwitter className="h-full w-full text-black-500" />
      ),
      href: "https://x.com/hcdiiitd?lang=en",
    },

    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-black-500" />
      ),
      href: "https://www.facebook.com/hcdiiitd/",
    },





    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-black-500" />
      ),
      href: "https://www.instagram.com/1px.descon/?hl=en",
    },
    {
      title: "Youtube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-black-500" />
      ),
      href: "https://www.youtube.com/channel/UCKnRN-9ht_uca8nIdhyTAtQ/videos",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        
        items={links}
      />
    </div>
  );
}
