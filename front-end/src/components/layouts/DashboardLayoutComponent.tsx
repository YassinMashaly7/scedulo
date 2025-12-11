"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function DashboardLayoutComponent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="bg-sidebar h-screen flex flex-col md:py-2 p-0 md:pr-2 overflow-hidden">
      <SidebarProvider className="flex-1 min-h-0">
        <DashboardSidebar />
        <div className="flex-1 min-w-0 rounded-0 md:rounded-3xl bg-background shadow-sm z-10 flex flex-col min-h-0">
          <DashboardHeader />
          <div className="flex-1 min-h-0 overflow-y-auto">{children}</div>
        </div>
      </SidebarProvider>
    </main>
  );
}
