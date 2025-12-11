"use client";

import {
  SidebarGroupContent,
  SidebarGroup as SidebarGroupEl,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { SidebarGroup } from "@/config/dashboard/dasboard-sidebar.config";
import Link from "next/link";

interface NavMainProps {
  group: SidebarGroup;
}

export function NavMain({ group }: NavMainProps) {
  return (
    <SidebarGroupEl>
      <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu>
          {group.items.map((item) => {
            const alwaysOpen = item.submenuMode === "always";

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <Link href={item.url} className="flex items-center gap-2">
                    {item.icon ? <item.icon className="size-4" /> : null}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>

                {item.items && item.items.length > 0 && (
                  <SidebarMenuSub
                    className={
                      alwaysOpen
                        ? "block" // always visible
                        : "hidden group-hover:block" // hover mode
                    }
                  >
                    {item.items.map((sub) => (
                      <SidebarMenuSubItem key={sub.title}>
                        <SidebarMenuButton asChild>
                          <Link href={sub.url}>{sub.title}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroupEl>
  );
}
