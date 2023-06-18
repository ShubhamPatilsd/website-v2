import ReactMarkdown from "react-markdown";

const text = `
- Helping to run [my school's CS club](https://msjcs.vercel.app) with amazing events to help people get into coding!
- Probably coding & eating a snack 🍫
`;

export const Current = () => {
  return (
    <div>
      <h1 className="md:text-left italic font-black mb-4 w-full">
        Currently, I'm
      </h1>
      <ReactMarkdown className="prose marker:text-black prose-a:text-sky-600 text-paragraph max-w-2xl">
        {text}
      </ReactMarkdown>
    </div>
  );
};
