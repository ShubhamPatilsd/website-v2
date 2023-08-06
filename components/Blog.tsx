import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BlogCard } from "./Blog/BlogCard";

export interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: null;
  published_timestamp: Date;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: Date;
  edited_at: Date;
  crossposted_at: null;
  published_at: Date;
  last_comment_at: Date;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: User;
}

interface User {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

export const Blog = () => {
  const [blogs, setBlogs] = useState<Article[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios({
        url: "https://dev.to/api/articles?username=shubhampatilsd",
        method: "GET",
      });

      setBlogs(data);
    })();
  }, []);

  return (
    <div className="max-w-4xl">
      <h1 className="md:text-left italic font-black mb-4 w-full">Blog Posts</h1>
      <p className="prose prose-a:text-sky-600 text-paragraph max-w-none">
        Here are some blogs that I've written :)
      </p>

      <div className="mt-4">
        {blogs.map((blog, i) => {
          return (
            <div className={`${i !== 0 ? "mt-2" : "mt-0"}`}>
              <a
                target="_blank"
                href={blog.url}
                className=""
                rel="noopener noreferrer"
              >
                <BlogCard blog={blog} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
