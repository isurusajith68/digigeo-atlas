"use client";
import {
  AlertCircle,
  Archive,
  LogOut,
  Map,
  MessagesSquare,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Nav } from "../ui/nav";
import { usePathname } from "next/navigation";
import { useSideBarStore } from "@/store/urlParam-slice";

const SideBar = () => {
  const pathname = usePathname();

  const { isCollapsed } = useSideBarStore();

  return (
    <div className="border">
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Map",
            icon: Map,
            variant: pathname === "/" ? "default" : "ghost",
            href: "/",
          },
          {
            title: "Updates",
            icon: AlertCircle,
            variant: pathname === "/update" ? "default" : "ghost",
            href: "/update",
          },
          {
            title: "Forums",
            icon: MessagesSquare,
            variant: pathname === "/forums" ? "default" : "ghost",
            href: "/forums",
          },
          {
            title: "Shopping",
            icon: ShoppingCart,
            variant: pathname === "/shopping" ? "default" : "ghost",
            href: "/shopping",
          },
          {
            title: "Promotions",
            icon: Archive,
            variant: pathname === "/promotions" ? "default" : "ghost",
            href: "/promotions",
          },
        ]}
      />
    </div>
  );
};
export default SideBar;
