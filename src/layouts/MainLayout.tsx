import { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="mainlayout_container">
      <Sidebar />
      <div className="mainlayout_main">
        <Header />
        <main className="mainlayout_content">{children}</main>
      </div>
    </div>
  );
}
