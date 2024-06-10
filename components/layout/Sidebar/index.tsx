import Image from 'next/image';

import brandLogo from '@/assets/brand_mark_dark.svg';
import Button from '@/components/base/Button';

const Sidebar = () => (
  <nav
    className="bg-primary-500 fixed left-0 z-20 w-14 h-screen top-0 right-auto flex justify-between items-center shadow"
  >
    <div className="w-15 h-44 bg-brand-sidebar bg-no-repeat bg-right absolute inline-flex items-center left-9 mr-4">
      <Button variant="text" className="p-0">
        <Image alt="" src={brandLogo} height={60} width={60} className="-ml-3.5" />
      </Button>
    </div>
  </nav>
);

export default Sidebar;
