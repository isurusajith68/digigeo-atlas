"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function Nav({ links, isCollapsed }) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 h-full  "
    >
      <nav className="flex flex-col  flex-grow px-2 gap-4  group-[[data-collapsed=true]]:w-16 group-[[data-collapsed=false]]:w-48 group-[[data-collapsed=true]]:px-2 z-20">
        {links.map((link, index) =>
          link.spacer ? (
            <div key={index} className="flex-grow "></div>
          ) : isCollapsed ? (
            <div key={index} className="flex  justify-center">
              {link.title === "Users" ? (
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <div className="flex gap-6  items-center font-bold border-t pt-2">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                            className="h-8 w-8 rounded-full"
                          />
                          <AvatarFallback className="flex items-center justify-center  uppercase border-2 rounded-full h-8 w-8">
                            <span className="text-black ">
                              {link.username[0] + link.username[1]}
                            </span>
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="flex items-center gap-4"
                    >
                      {link?.username}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <TooltipProvider>
                  <Tooltip key={index} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          buttonVariants({
                            variant: link.variant,
                            size: "icon",
                          }),
                          "h-9 w-9",
                          link.variant === "default" &&
                            "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                        )}
                      >
                        {link.icon && <link.icon className="h-6 w-6" />}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="flex items-center gap-4"
                    >
                      {link?.title}
                      {link?.label && (
                        <span className="ml-auto text-muted-foreground">
                          {link?.label}
                        </span>
                      )}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          ) : (
            <div>
              {link.title === "Users" ? (
                <div
                  key={index}
                  className="flex gap-4 ml-2 font-semibold  items-center  border-t pt-2"
                >
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="h-8 w-8 rounded-full"
                    />
                    <AvatarFallback className="flex items-center justify-center  uppercase border-2 rounded-full h-8 w-8">
                      <span className="text-black font-bold ">
                        {link.username[0] + link.username[1]}
                      </span>
                    </AvatarFallback>
                  </Avatar>
                  {link.username}
                </div>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: link.variant, size: "sm" }),
                    link.variant === "default" &&
                      "dark:bg-muted w-full dark:text-white dark:hover:bg-muted dark:hover:text-white",
                    "justify-start w-full"
                  )}
                >
                  {link.icon && <link.icon className="h-6 w-6 mr-6" />}
                  {link.title}
                  {link.label && (
                    <span
                      className={cn(
                        "ml-auto",
                        link.variant === "default" &&
                          "text-background dark:text-white"
                      )}
                    >
                      {link.label}
                    </span>
                  )}
                </Link>
              )}
            </div>
          )
        )}
      </nav>
    </div>
  );
}
