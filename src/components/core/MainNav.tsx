"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, ShoppingBag, Inbox as InboxIcon, MessageSquare } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const iconMap = {
  Home: Home,
  Profile: User,
  "Purchase History": ShoppingBag,
  Inbox: InboxIcon,
  Questionnaire: MessageSquare, // Added for potential future direct link
};

export function MainNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {siteConfig.navItems.map((item) => {
        const Icon = iconMap[item.label as keyof typeof iconMap] || Home;
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton
              asChild
              variant="default"
              size="default"
              isActive={isActive}
              className={cn(
                "justify-start w-full",
                isActive && "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
              )}
              tooltip={{ children: item.label, side: "right", align: "center" }}
            >
              <Link href={item.href}>
                <Icon className="mr-2 h-5 w-5 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
