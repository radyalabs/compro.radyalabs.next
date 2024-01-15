import { getBlogs } from '@/queries/blogs';

import Post from './components/Post';

const Home = async () => {
  const blogs = await getBlogs();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="relative grid grid-cols-3 gap-6 place-items-center"
      >
        {blogs.map(({
          id,
          content,
          title,
          image,
          created_at,
          master_category: { category },
        }, i) => (
          <Post
            key={id}
            description={content}
            highlighted={i === 0}
            title={title}
            imagePath={image}
            date={created_at || new Date()}
            category={category}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
