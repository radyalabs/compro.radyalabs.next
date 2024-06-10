import { type ReactNode } from 'react';

import Sidebar from '@/components/layout/Sidebar';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Sidebar />
    <main>
      {children}
    </main>
  </>
);

export default Layout;
