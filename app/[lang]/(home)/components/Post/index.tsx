import Image from 'next/image';
import Link from 'next/link';

import { format } from 'date-fns';

import Tag from '@/components/base/Tag';
import Typography from '@/components/base/Typography';

import type { PostProps } from './index.types';

const Post = ({
  category,
  className = '',
  description,
  date,
  highlighted,
  imagePath,
  locale,
  slug,
  title,
}: PostProps) => (
  <div className={`h-128 w-full relative bg-clip-border bg-n-1 rounded-xl hover:[&>*>*>img]:scale-110 overflow-hidden drop-shadow ${className} ${highlighted ? 'col-start-2 col-span-2 row-start-1 grid grid-cols-2' : ''}`}>
    <div className="h-full w-full relative overflow-hidden">
      <div className="absolute top-0 p-4 z-10">
        <Tag color="warning" label={category} />
      </div>
      <Link href={`${locale}/blog/${slug}`} locale={locale}>
        <Image
          src={`${imagePath}`}
          alt=""
          className={`h-full w-full object-cover rounded-xl overflow-clip transition-transform ${highlighted && 'rounded-br-none'}`}
          width={360}
          height={750}
        />
      </Link>
    </div>
    <div className={`p-4 flex flex-col gap-2 ${highlighted ? 'max-w-96' : 'absolute bottom-0 p-4 pb-2 bg-gradient-to-t from-black *:text-n-1 rounded-b-xl'}`}>
      <Typography variant="label" className="italic uppercase">{format(date || new Date(), 'EEEE, d MMM yyyy / hh:mm')}</Typography>
      <Link href={`${locale}/blog/${slug}`} locale={locale}>
        <Typography className={`font-medium text-xl no-underline transition-colors ${highlighted ? 'text-primary-900 hover:text-primary-500' : ' text-n-1 hover:text-warning-500'}`}>
          {title}
        </Typography>
      </Link>
      {highlighted && (
        <Typography>
          {`${description.replace(/(<([^>]+)>)/gi, '').slice(0, 256)}...`}
        </Typography>
      )}
    </div>
  </div>
);

export default Post;
