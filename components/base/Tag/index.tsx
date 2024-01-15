import Typography from '@/components/base/Typography';

import type { TagProps } from './index.types';

import styles from './index.module.scss';

const Tag = (props: TagProps) => {
  const {
    className,
    label,
    color = 'default',
  } = props;

  const tagStyle = [styles.tag];

  if (className) tagStyle.push(className);

  if (color === 'primary') tagStyle.push(styles.primary);
  if (color === 'danger') tagStyle.push(styles.danger);
  if (color === 'warning') tagStyle.push(styles.warning);
  if (color === 'success') tagStyle.push(styles.success);
  if (color === 'default') tagStyle.push(styles.default);

  return (
    <Typography
      size="small"
      className={tagStyle.join(' ')}
    >
      {label}
    </Typography>
  );
};

export default Tag;
