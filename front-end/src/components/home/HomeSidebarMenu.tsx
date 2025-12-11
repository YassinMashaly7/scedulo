import { Button } from "@/components/ui/button";
import {
  Bell,
  Calendar,
  Heart,
  Home,
  MessageCircleIcon,
  Settings,
} from "lucide-react";

export const MAIN_SIDEBAR_LINKS = [
  { name: "Home", icon: Home, isActive: true },
  { name: "Appointments", icon: Calendar },
  { name: "Favorites", icon: Heart },
  { name: "Messages", icon: MessageCircleIcon },
  { name: "Notifications", icon: Bell },
  { name: "Settings", icon: Settings },
];

export default function HomeSidebarMenu({ className }: { className?: string }) {
  return (
    <div className="hidden sm:block w-64 h-[calc(100vh-64.5px)] bg-background border-r border-divider p-4 fixed top-16 left-0 z-40 overflow-y-auto">
      <div className="w-full h-full flex flex-col gap-4 justify-between">
        <nav className="space-y-1">
          {MAIN_SIDEBAR_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start"
              >
                <Icon />
                {item.name}
              </Button>
            );
          })}
        </nav>
        {/* Advertisements */}
        Advertisement Card
      </div>
    </div>
  );
}
