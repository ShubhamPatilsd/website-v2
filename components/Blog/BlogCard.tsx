import { Article } from "../Blog";
import { HiOutlineClock } from "react-icons/hi";

interface BlogCardProps {
  blog: Article;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="hover:bg-slate-800 rounded-md p-4 transition duration-300 ease-in-out">
      <p className="text-xl font-medium">{blog.title}</p>
      <span className="flex">
        <p className="pr-2">
          {new Date(blog.published_timestamp).toLocaleDateString(undefined, {
            dateStyle: "medium",
          })}
        </p>
        <p>|</p>
        <p className="flex space-x-2 items-center pl-2">
          <HiOutlineClock size={20} />{" "}
          <p>{blog.reading_time_minutes} minute read</p>
        </p>
      </span>
      <p>{blog.description}</p>
    </div>
  );
};
