import { ThemeProvider } from "@/components/providers/theme-provider";
import * as React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
