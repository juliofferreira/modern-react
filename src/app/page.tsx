import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/04b547cf-00b5-40ce-999e-7984136749fe-z0hz4s.png",
  "https://utfs.io/f/b8d78be8-3692-44b5-b288-95fd671ac813-z0hz4r.png",
  "https://utfs.io/f/c478236f-f031-4852-8b1a-3ac72bb8fae3-z0hz4q.png",
  "https://utfs.io/f/eed7c53c-22ca-4894-9c16-41b49ed0d1c3-z0hz4p.png",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
