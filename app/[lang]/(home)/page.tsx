import type { Locale } from 'i18n-config';

import Typography from '@/components/base/Typography';
import getDictionary from '@/helpers/getDictionary';
import { getBlogs } from '@/queries/blogs';

import Post from './components/Post';

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const blogs = await getBlogs();
  const dict = await getDictionary(lang);
  return (
    <div className="relative p-4 mx-auto container w-full">
      <div className="pl-16 2xl:pl-4 mx-8">
        <div className="flex min-h-screen flex-col gap-4">
          <div className="[&>*>*]:text-left">
            <Typography variant="display" as="h1">{dict.blog.title}</Typography>
            <Typography variant="title" as="h2">{dict.blog.subtitle}</Typography>
          </div>
          <div
            className="relative grid grid-cols-3 gap-6 place-items-center"
          >
            {blogs.map(({
              id,
              content,
              content_en,
              slug,
              slug_en,
              title,
              title_en,
              image,
              created_at,
              master_category: { category },
            }, i) => (
              <Post
                key={id}
                description={lang === 'id' ? content : content_en || ''}
                highlighted={i === 0}
                locale={lang}
                title={lang === 'id' ? title : title_en || ''}
                slug={lang === 'id' ? slug : slug_en || ''}
                imagePath={image}
                date={created_at || new Date()}
                category={category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
