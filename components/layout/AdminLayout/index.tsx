'use client';

import type { ReactNode } from 'react';

import AdminContent from '@/components/layout/AdminContent';
import AdminHeader from '@/components/layout/AdminHeader';
import AdminSidebar from '@/components/layout/AdminSidebar';

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="relative bg-neutral">
    <AdminHeader />
    <div className="relative">
      <AdminSidebar />
      <AdminContent>
        {children}
      </AdminContent>
    </div>
  </div>
);

export default Layout;
