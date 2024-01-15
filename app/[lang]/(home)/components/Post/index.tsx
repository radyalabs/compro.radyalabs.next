import Image from 'next/image';

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
  title,
}: PostProps) => (
  <div className={`h-128 w-full relative bg-n-1 rounded-xl ${className} ${highlighted ? 'col-start-2 col-span-2 row-start-1 grid grid-cols-2' : ''}`}>
    <div className="h-full relative">
      <div className="absolute top-0 p-4">
        <Tag color="warning" label={category} />
      </div>
      <Image
        src={`${imagePath}`}
        alt=""
        className="h-full w-full object-cover rounded-xl hover:scale-115 overflow-clip"
        width={360}
        height={750}
      />
    </div>
    <div className={`p-4 flex flex-col gap-2 ${highlighted ? 'max-w-96' : 'absolute bottom-0 p-4 pb-2 bg-gradient-to-t from-black *:text-n-1 rounded-b-xl'}`}>
      <Typography variant="label" className="italic uppercase">{format(date || new Date(), 'EEEE, d MMM yyyy / hh:mm')}</Typography>
      <Typography className="font-medium text-xl">{title}</Typography>
      {highlighted && (
        <Typography>
          {`${description.replace(/(<([^>]+)>)/gi, '').slice(0, 256)}...`}
        </Typography>
      )}
    </div>
  </div>
);

export default Post;
