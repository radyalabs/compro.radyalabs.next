import type { Locale } from 'i18n-config';

export interface PostProps {
  className?: string;
  title: string;
  date: Date;
  description: string;
  imagePath: string;
  locale: Locale;
  highlighted?: boolean;
  category: string
  slug: string;
}
