import ReactMarkdown from "react-markdown";

const text = `
Currently, I'm:

- Helping to run the [MSJCS Club](https://msjcs.vercel.app) with amazing events to help people get into coding!
- Building [Tripley](https://tripley.vercel.app), a travel app to help manage and plan your trips with ease.
- Organizing [CodeDay Bay Area](https://codeday.org/ba), a hackathon for underserved students to break into tech
- Probably coding & eating a snack 🍫
`;

export const Current = () => {
  return (
    <div>
      <h1 className="md:text-left italic font-black mb-4 w-full">
        Current Work
      </h1>
      <ReactMarkdown className="prose prose-a:text-sky-600 text-paragraph max-w-2xl">
        {text}
      </ReactMarkdown>
    </div>
  );
};
