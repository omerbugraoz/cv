import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import { tektur } from './fonts'

export const metadata: Metadata = {
  title: "Omer Bugra Oz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${tektur.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
