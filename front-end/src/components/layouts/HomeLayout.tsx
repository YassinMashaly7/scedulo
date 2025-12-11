"use client";

import HomeSidebarMenu from "@/components/home/HomeSidebarMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background z-50 border-b w-full">
        <div className="flex items-center justify-between px-8 h-16 gap-4">
          <Link href="/" className="cursor-pointer">
            <span
              className="font-bold text-xl tracking-wider text-white uppercase hover:opacity-90 transition-opacity"
              style={{ fontFamily: "var(--font-brand), sans-serif" }}
            >
              Scedulo
            </span>
          </Link>
          <div className="hidden sm:flex flex-1 justify-center">
            <div className="w-full max-w-xl">
              <Input
                type="search"
                placeholder="Search for businesses..."
                className="pl-10 pr-4 py-2 rounded-full"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
          <div>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
      <div className="flex">
        {/* Sidebar - Hidden on mobile */}
        <HomeSidebarMenu />
        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 sm:ml-64">{children}</div>
      </div>
    </div>
  );
}
