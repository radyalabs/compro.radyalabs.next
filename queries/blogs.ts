import type { Locale } from 'i18n-config';

import prisma from '@/lib/prisma';
import type { BlogQueryParams } from '@/types/blogs';

const getBlogs = (queryParams?: BlogQueryParams) => {
  const {
    offset = 0,
    limit = 5,
  } = queryParams || {};
  return prisma.blog.findMany({
    skip: offset,
    take: limit,
    orderBy: {
      created_at: 'desc',
    },
    where: {
      is_active: {
        equals: true,
      },
      AND: {
        deleted_at: {
          equals: null,
        },
      },
    },
    include: {
      master_category: true,
    },
  });
};

const getBlogBySlug = (slug: string, locale: Locale) => (
  prisma.blog.findFirst({
    where: {
      ...locale === 'id' ? {
        slug,
      } : {
        slug_en: slug,
      },
    },
    include: {
      comment: {
        where: {
          is_active: true,
        },
      },
    },
  })
);

const getAllBlogs = () => prisma.blog.findMany();

export { getAllBlogs, getBlogBySlug, getBlogs };
