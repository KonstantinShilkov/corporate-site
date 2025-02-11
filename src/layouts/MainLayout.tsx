import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="mainLayout__container">
      <Sidebar />
      <div className="mainLayout__main">
        <Header />
        <main className="mainLayout__content">{children}</main>
      </div>
    </div>
  );
}
