"use client";

import Link from "next/link";
import { Map } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Separator } from "./separator";
import Legend from "../sidebar/legend/legend";

export function Nav({ isCollapsed }) {
  const pathname = usePathname();
  // console.log("pathname", pathname);

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2  h-full  "
    >
      {!isCollapsed && (
        <nav className="flex flex-col px-2  flex-grow  gap-4  group-[[data-collapsed=false]]:w-64  group-[[data-collapsed=true]]:left-0 z-20">
          {isCollapsed ? (
            ""
          ) : (
            <>
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: pathname
                      ? pathname === "/"
                        ? "primary"
                        : "secondary"
                      : "secondary",
                    size: "sm",
                  }),
                  pathname === "/"
                    ? "dark:bg-white dark:text-black bg-[#09090b] text-white"
                    : "dark:hover:bg-gray-600 dark:hover:text-white hover:bg-slate-200",
                  "justify-start w-full"
                )}
              >
                <Map className="h-6 w-6 mr-6" />
                Map
              </Link>
              <Separator />
              <Legend />
            </>
          )}
        </nav>
      )}
    </div>
  );
}

// "use client";

// import Link from "next/link";
// import { LucideIcon, Map, SailboatIcon } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/ui/button";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { TooltipProvider } from "@radix-ui/react-tooltip";
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
// import { usePathname } from "next/navigation";

// export function Nav({ links, isCollapsed }) {
//   const pathname = usePathname();
//   console.log("pathname", pathname);
//   return (
//     <div
//       data-collapsed={isCollapsed}
//       className="group flex flex-col gap-4 py-2  h-full  "
//     >
//
//         <nav className="flex flex-col px-2  flex-grow  gap-4  group-[[data-collapsed=false]]:w-48  group-[[data-collapsed=true]]:left-0 z-20">
//           {isCollapsed ? (
//             <>
//               {/* <TooltipProvider>
//               <Tooltip delayDuration={0}>
//                 <TooltipTrigger asChild>
//                   <Link
//                     href="/"
//                     className={cn(
//                       buttonVariants({
//                         variant: pathname === "/" ? "primary" : "ghost",
//                         size: "icon",
//                       }),
//                       "h-9 w-9",
//                       pathname === "/"
//                         ? "dark:bg-white dark:text-black bg-[#09090b] text-white"
//                         : "dark:hover:bg-gray-600 dark:hover:text-white hover:bg-slate-200"
//                     )}
//                   >
//                     <Map className="h-6 w-6 " />
//                   </Link>
//                 </TooltipTrigger>
//                 <TooltipContent
//                   side="right"
//                   className="flex items-center gap-4"
//                 >
//                   Map
//                 </TooltipContent>
//               </Tooltip>
//             </TooltipProvider> */}

//               {/* <TooltipProvider>
//               <Tooltip delayDuration={0}>
//                 <TooltipTrigger asChild>
//                   <Link
//                     href="/test"
//                     className={cn(
//                       buttonVariants({
//                         variant: pathname === "/test" ? "primary" : "ghost",
//                         size: "icon",
//                       }),
//                       "h-9 w-9",
//                       pathname === "/test"
//                         ? "dark:bg-white dark:text-black bg-[#09090b] text-white"
//                         : "dark:hover:bg-gray-600 dark:hover:text-white hover:bg-slate-200"
//                     )}
//                   >
//                     <SailboatIcon className="h-6 w-6 " />
//                   </Link>
//                 </TooltipTrigger>
//                 <TooltipContent
//                   side="right"
//                   className="flex items-center gap-4"
//                 >
//                   Test
//                 </TooltipContent>
//               </Tooltip>
//             </TooltipProvider> */}
//             </>
//           ) : (
//             <>
//               <Link
//                 href="/"
//                 className={cn(
//                   buttonVariants({
//                     variant: pathname
//                       ? pathname === "/"
//                         ? "primary"
//                         : "secondary"
//                       : "secondary",
//                     size: "sm",
//                   }),
//                   pathname === "/"
//                     ? "dark:bg-white dark:text-black bg-[#09090b] text-white"
//                     : "dark:hover:bg-gray-600 dark:hover:text-white hover:bg-slate-200",
//                   "justify-start w-full"
//                 )}
//               >
//                 <Map className="h-6 w-6 mr-6" />
//                 Map
//               </Link>
//               {/* <Link
//               href="/test"
//               className={cn(
//                 buttonVariants({
//                   variant: pathname
//                     ? pathname === "/test"
//                       ? "primary"
//                       : "secondary"
//                     : "secondary",
//                   size: "sm",
//                 }),
//                 pathname === "/test"
//                   ? "dark:bg-white dark:text-black bg-[#09090b] text-white"
//                   : "dark:hover:bg-gray-600 dark:hover:text-white hover:bg-slate-200",
//                 "justify-start w-full"
//               )}
//             >
//               <SailboatIcon className="h-6 w-6 mr-6" />
//               Test
//             </Link> */}
//             </>
//           )}
//         </nav>
//
//     </div>
//   );
// }
