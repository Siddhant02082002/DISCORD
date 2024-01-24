import { /*Inter*/ Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Chat Application",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>

        <body className={font.className}> <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem="false"
            disableTransitionOnChange
          >{children}</ThemeProvider></body>
      </html>
    </ClerkProvider>
  );
}
