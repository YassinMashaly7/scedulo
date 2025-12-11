import { SidebarGroup } from "@/types/dashboard/dashboard-sidebar.types";
import {
  Building2,
  Building as BuildingIcon,
  Calendar,
  CircleHelp,
  CreditCard,
  Home,
  Settings,
  Users,
} from "lucide-react";

export const SIDEBAR_GROUPS: SidebarGroup[] = [
  {
    title: "Overview",
    homeUrl: "/dashboard",
    items: [
      { title: "Home", icon: Home, url: "/dashboard" },
      {
        title: "Organizations",
        icon: Building2,
        url: "/dashboard/org",
        submenuMode: "always",
        items: [
          { title: "Org A", url: "/dashboard/org/1" },
          { title: "Org B", url: "/dashboard/org/2" },
        ],
      },
      { title: "Team", icon: Users, url: "/team" },
      { title: "Billing", icon: CreditCard, url: "/billing" },
      { title: "Calendar", icon: Calendar, url: "/calendar" },
      { title: "Settings", icon: Settings, url: "/settings" },
    ],
  },
  {
    title: "Platforms",
    homeUrl: "/platforms",
    collapsedAggregate: {
      title: "Platforms",
      icon: BuildingIcon,
    },
    items: [
      {
        title: "Platforms",
        icon: BuildingIcon,
        url: "/platforms",
        submenuMode: "always",
        items: [
          { title: "Platform 1", url: "/platforms/1" },
          { title: "Platform 2", url: "/platforms/2" },
        ],
      },
    ],
  },
  {
    title: "Support",
    homeUrl: "/support",
    items: [{ title: "Help", icon: CircleHelp, url: "/help" }],
  },
];
