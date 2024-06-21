"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";
import {
  BadgeInfo,
  CircleHelp,
  DoorClosedIcon,
  HomeIcon,
  MenuIcon,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "../dark-mode-toggle/dark-mode-toggle";

const NavBar = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const isDes = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDes) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [isDes]);
  return (
    <>
      {isDesktop ? (
        <div className="flex items-center justify-between h-16 px-2 ">
          <div className="text-xl font-bold">Digi Geo Atlas</div>
          <div className="flex space-x-7">
            <Link href="/" className=" flex gap-2 justify-center items-center">
              <HomeIcon />
              Home
            </Link>
            <Link href="#" className=" flex gap-2 justify-center items-center">
              <CircleHelp />
              Help
            </Link>
            <Link href="#" className=" flex gap-2 justify-center items-center">
              <BadgeInfo />
              Disclaim
            </Link>
            <Link
              href="login"
              className=" flex gap-2 justify-center items-center"
            >
              <User />
              Login
            </Link>
            <ModeToggle />
          </div>
        </div>
      ) : (
        <div className="h-16">
          <Drawer direction="right">
            <DrawerTrigger className="flex w-full items-center justify-between h-16 px-2">
              <div className=" text-xl font-bold">Digi Geo Atlas</div>
              <MenuIcon size={24} className="" />
            </DrawerTrigger>
            <DrawerContent>
              <div className="border-b">
                <DrawerTrigger className="flex w-full items-center justify-between h-16 px-2">
                  <div className=" text-xl font-bold">Digi Geo Atlas</div>
                  <X size={24} className="" />
                </DrawerTrigger>
              </div>
              <div
                className={`flex flex-col items-center  space-y-4 h-screen  mt-28`}
              >
                <a href="#" className="">
                  Home
                </a>
                <a href="#" className="">
                  About
                </a>
                <a href="#" className="">
                  Services
                </a>
                <a href="#" className="">
                  Contact
                </a>
                <ModeToggle />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      )}
    </>
  );
};
export default NavBar;
