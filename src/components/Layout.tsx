import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-1 pt-16 md:pt-18">{children}</main>
    <Footer />
  </div>
);
