import type { Metadata } from "next";
import { QueryProvider } from "@/provider/ReactQueryProvider";
import "./App.scss";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
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
        <Header />
        <QueryProvider>{children}</QueryProvider>
        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}
