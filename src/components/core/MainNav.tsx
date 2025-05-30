"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, ShoppingBag, Inbox as InboxIcon, MessageSquare } from "lucide-react";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  SidebarMenu as SidebarMenuPrimitives,
  SidebarMenuItem as SidebarMenuItemPrimitives,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

const iconMap = {
  Home: Home,
  Profile: User,
  "Purchase History": ShoppingBag,
  Inbox: InboxIcon,
  Questionnaire: MessageSquare, 
};

const applyAppleGradient = (IconComponent: React.ElementType) => {
  return IconComponent;
};

const listVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren", // Ensure children animate out first
      staggerChildren: 0.08,
      staggerDirection: -1, // Reverse stagger for exit
    }
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren", // Ensure parent is visible before children animate in
      delayChildren: 0.15, 
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -20, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } }, // Faster exit ease
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.35, ease: [0, 0, 0.2, 1] } // Custom ease for entry
  }
};

const MotionSidebarMenu = motion(SidebarMenuPrimitives);
const MotionSidebarMenuItem = motion(SidebarMenuItemPrimitives);

export function MainNav() {
  const pathname = usePathname();
  const { isMobile, openMobile } = useSidebar();

  return (
    // No AnimatePresence needed here if SheetPrimitive.Root + AnimatePresence in sidebar.tsx handles the overall openMobile state
    // We only animate based on openMobile directly for the variants
    <MotionSidebarMenu 
      className="pt-4 px-2 flex flex-col"
      initial="hidden"
      animate={isMobile && openMobile ? "visible" : "hidden"}
      variants={listVariants}
    >
      {siteConfig.navItems.map((item) => {
        const Icon = applyAppleGradient(iconMap[item.label as keyof typeof iconMap] || Home);
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        
        return (
          <MotionSidebarMenuItem 
            key={item.href}
            variants={itemVariants} 
            // exit variant will be picked up by AnimatePresence if it were wrapping this item individually,
            // but here it's controlled by the parent's animate state toggling to 'hidden'
            className="py-1"
          >
            <SidebarMenuButton
              asChild
              variant="default"
              size="default"
              isActive={isActive}
              className={cn(
                "justify-start w-full text-base",
                isActive && "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
              )}
            >
              <Link href={item.href} className="flex items-center w-full">
                <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                <span className="truncate font-semibold">{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </MotionSidebarMenuItem>
        );
      })}
    </MotionSidebarMenu>
  );
}
