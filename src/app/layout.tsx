import "./globals.css";
import React from "react";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { JetBrains_Mono } from "next/font/google";

interface Props {
  children: React.ReactNode;
}

const font = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
});

export default function Layout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
