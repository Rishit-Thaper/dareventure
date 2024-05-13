import type { Metadata } from "next";
import { QueryProvider } from "@/provider/ReactQueryProvider";
import "./App.scss";
export const metadata: Metadata = {
  title: "Dareventure",
  description: "The ultimate game pack for those who dare to go wild!",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
