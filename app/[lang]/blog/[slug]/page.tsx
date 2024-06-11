import { Fragment } from 'react';

import { format } from 'date-fns';
import type { Locale } from 'i18n-config';

import Tag from '@/components/base/Tag';
import Typography from '@/components/base/Typography';
import { getBlogBySlug } from '@/queries/blogs';

const BlogDetailPage = async (
  { params: { lang, slug } }: { params: { lang: Locale, slug: string } },
) => {
  const blog = await getBlogBySlug(slug);
  const {
    blog_tag: blogTags = [],
    image = '',
    content = '',
    content_en: contentEn = '',
    created_at: createdAt,
    master_category: {
      category = '',
    } = {},
    title,
    title_en: titleEn = '',
    writer,
  } = blog || {};
  return (
    <>
      <header
        className="w-screen h-4/5 bg-cover bg-no-repeat fixed top-0 object-fill bg-center -z-10"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="relative w-full bg-n-1 mt-[65vh]">
        <div className="pl-16 2xl:pl-4 p-4 mx-auto container">
          <article className="min-h-screen mx-auto max-w-2xl">
            <div className="flex justify-between mt-12">
              <Typography>
                {`${format(createdAt || new Date(), 'EEEE, d MMM yyyy | hh:mm')} | Author by `}
                <Typography as="span" className="text-primary-600 italic font-medium">
                  {writer}
                </Typography>
              </Typography>
              <Tag color="warning" label={category} />
            </div>
            <Typography variant="headline" size="large">
              {lang === 'id' ? title : titleEn}
            </Typography>
            <div
              className="font-sans leading-relaxed"
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{ __html: String(lang === 'id' ? content : contentEn) }}
            />
            <div className="flex gap-4">
              {blogTags.map(({ tag: { title: tagTitle, id } }) => (
                <Tag key={id} label={tagTitle} />
              ))}
            </div>
          </article>
        </div>
      </div>
    </>

  );
};

export default BlogDetailPage;
