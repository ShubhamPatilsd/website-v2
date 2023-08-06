import ReactMarkdown from "react-markdown";

const text = `
In the past, I have:

- Won 2nd place at [LancerHacks 2023](https://www.lancerhacks.com/) for [ArtMart](https://artmart.vercel.app), a way to trade art with other people online
- Won 3rd place at [Trivalley Hacks](https://trivalleyhacks.org) with [Evergreen](https://evergreen-app.vercel.app) a way for home gardeners to sell their fresh and organic produce with consumers in their neighborhood. This time I got 30 minutes of sleep at this hackathon (big improvement).
- Won 2nd place at [Los Altos Hacks](https://www.losaltoshacks.com/) with [Hitch](https://devpost.com/software/cheetah#updates), a way to buddy up with someone to go on a roadtrip (instead of going alone). I got zero hours of sleep this weekend by the way.
- Helped to organize [Leland Hacks](https://lelandhacks.com), a 12 hour hackathon for beginner students.
- Organized [CodeDay Bay Area](https://codeday.org/ba), a hackathon for underserved students to break into tech
- Gave a [talk](https://vimeo.com/showcase/9681417/video/730487346#t=1h7m30s) at [Toorcamp](https://toorcamp.toorcon.net/) (a big 5 day cybersecurity camping event with 600+ people) on how to generate a cool looking sketch effect of yourself (and print it, like a polaroid) with Python! [Kai Devrim](https://devrim.tech/) was also the co-host of the talk.
- Won 3rd place at [LancerHacks 2022](https://www.lancerhacks.com/) with a web application called [GeoChattr](https://devpost.com/software/geochattr)
- Built a website for an organization called [Edumango](https://edumango.vercel.app), and taught an introductory Java course to middle schoolers
- Worked as a software engineer in robotics team [#16778 Cyber Wizards](https://ftc-events.firstinspires.org/team/16778) for the [First Tech Challenge](https://www.firstinspires.org/robotics/ftc)
- Learned a *lot* about how the web works and how I can use code to make truly amazing things ✨
- Took up and promptly abandoned *waaaaay* too many side projects 👀, but in the process learned a lot about new technologies
`;

export const Before = () => {
  return (
    <div>
      <h1 className="md:text-left italic font-black mb-4 w-full">
        Previous Work
      </h1>
      <ReactMarkdown className="prose prose-a:text-sky-600 text-paragraph max-w-2xl">
        {text}
      </ReactMarkdown>
    </div>
  );
};
