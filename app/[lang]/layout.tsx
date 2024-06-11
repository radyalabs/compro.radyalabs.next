import { type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import brandFooter from '@/assets/ic_brand_footer.svg';
import Button from '@/components/base/Button';
import Typography from '@/components/base/Typography';
import Sidebar from '@/components/layout/Sidebar';
import MENUS from '@/constants/menu';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Sidebar />
    <main className="relative overflow-hidden">
      {children}
    </main>
    <footer className="bg-primary-500">
      <div className="w-full mx-auto">
        <div className="flex justify-center *:w-1/5 *:py-6 [&>*>*]:text-n-1 mb-4">
          <div>
            <Typography variant="title">
              Mulai Proyek Baru
            </Typography>
            <Typography>
              Kami siap untuk tantangan berikutnya&nbsp;
              <Link href="mailto:info@radyalabs.com" className="text-n-1 no-underline">
                info@radyalabs.com
              </Link>
            </Typography>
          </div>
          <div>
            <Typography variant="title">
              Kantor Radya Digital
            </Typography>
            <Typography>
              Jl. Sidomukti No.14, Sukaluyu, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40123
            </Typography>
          </div>
          <div>
            <Typography variant="title">
              Bergabung bersama kami
            </Typography>
            <Typography>
              Kami selalu mencari bakat baru&nbsp;
              <Link href="mailto:info@radyalabs.com" className="font-medium text-n-1 no-underline">
                join@radyalabs.com
              </Link>
            </Typography>
          </div>
          <div className="h-full my-auto">
            <Button
              className="min-w-64 uppercase"
              color="warning"
              rounded
            >
              Mari Mengobrol
            </Button>
          </div>
        </div>
        <div className="bg-primary-800 flex flex-col gap-2 pb-4">
          <div className="flex justify-center">
            <Link href="/">
              <Image alt="" src={brandFooter} height={120} width={96} className="h-24 w-auto -mt-6" />
            </Link>
          </div>
          <div className="flex justify-center">
            {MENUS.map(({ id, name, path }) => (
              <Link key={id} href={path} className="p-2 no-underline">
                <Typography size="small" className="uppercase text-n-1/75 hover:text-n-1 font-medium">
                  {name}
                </Typography>
              </Link>
            ))}
          </div>
          <Typography
            className="text-n-1 w-full"
            align="center"
            size="small"
          >
            ©2024 PT. Radya Anugrah Digital -&nbsp;
            <Link href="/company-profile" className="text-warning-500 font-medium">
              Unduh Profil Perusahaan
            </Link>
          </Typography>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
