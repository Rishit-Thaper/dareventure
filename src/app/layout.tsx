import type { Metadata } from "next";
import { QueryProvider } from "@/provider/ReactQueryProvider";
import { ReactChakraProvider } from "@/provider/ChakraProvider";
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
        <ReactChakraProvider>
          <QueryProvider>{children}</QueryProvider>
        </ReactChakraProvider>
      </body>
    </html>
  );
}
