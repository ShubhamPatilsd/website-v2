import ReactMarkdown from "react-markdown";

const text = `
In the past, I have:

- Interned at [CodeDay Labs](labs.codeday.org) and built [Disco Wave](https://showcase.codeday.org/project/ckqtyhfmo91620210qu4j6ddiak)
- Won 3rd place at [LancerHacks](https://www.lancerhacks.com/) with a web application called [GeoChattr](https://devpost.com/software/geochattr)
- Built a website for an organization called [Edumango](https://edumango.vercel.app), and taught an introductory Java course to middle schoolers
- Worked as a software engineer in robotics team [#16778 Cyber Wizards](https://ftc-events.firstinspires.org/team/16778) for the [First Tech Challenge](https://www.firstinspires.org/robotics/ftc)
- Participated in robotics team #612 Circuit Breakers for the [First Lego League](https://www.firstlegoleague.org/) competition
- Learned a *lot* about how the web works and how I can use code to make truly amazing things ✨
- Took up and promptly abandoned *waaaaay* too many side projects 👀, but in the process learned a lot about new technologies
`;

export const Before = () => {
  return (
    <div>
      <h3 className="text-secondary mb-3">Previous Work</h3>
      <ReactMarkdown className="prose prose-a:text-sky-600 text-paragraph max-w-none">
        {text}
      </ReactMarkdown>
    </div>
  );
};
