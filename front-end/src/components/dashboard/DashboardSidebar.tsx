"use client";

import Link from "next/link";
import * as React from "react";

import { NavMain } from "@/components/shared/NavMain";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SIDEBAR_GROUPS } from "@/config/dashboard/dasboard-sidebar.config";

export function DashboardSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="overflow-hidden pt-2" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-inner-shadow-top !size-5"
                >
                  <path d="M5.636 5.636a9 9 0 1 0 12.728 12.728a9 9 0 0 0 -12.728 -12.728z"></path>
                  <path d="M16.243 7.757a6 6 0 0 0 -8.486 0"></path>
                </svg>
                <span className="text-base font-semibold">Scedulo</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent
        className="scroll-container p-0"
        style={{ overscrollBehavior: "contain" }}
      >
        {SIDEBAR_GROUPS.map((group, index) => (
          <NavMain key={index} group={group} />
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
