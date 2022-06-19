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
      <h3 className="text-secondary mb-2">Blog Posts</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque
        beatae cupiditate debitis fugiat consectetur alias ipsam animi corrupti
        voluptate quidem cum, obcaecati ea officiis? Quod dolor iure corporis
        voluptas.
      </p>

      <div className="mt-4 space-y-2">
        {blogs.map((blog, i) => {
          return (
            <a
              target="_blank"
              href={blog.canonical_url}
              rel="noopener noreferrer"
            >
              <div className="cursor-pointer">
                <BlogCard blog={blog} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
