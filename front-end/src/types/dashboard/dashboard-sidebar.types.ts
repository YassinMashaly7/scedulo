import { LucideIcon } from "lucide-react";

export interface SidebarSubItem {
  title: string;
  url: string;
}

export interface SidebarItem {
  title: string;
  url: string;
  icon?: LucideIcon; // Strict, no `any`
  items?: SidebarSubItem[]; // Strict submenu typing
  submenuMode?: "always" | "hover";
}

export interface SidebarGroup {
  title: string;
  homeUrl: string;
  collapsedAggregate?: {
    title: string;
    icon: LucideIcon; // Strict
  };
  items: SidebarItem[];
}
