// import "react-bubble-ui/dist/index.css";
// import "react-indiana-drag-scroll/dist/style.css";

// import { useDraggable } from "react-use-draggable-scroll";
// @ts-ignore
import BubbleUI from "react-bubble-ui";
import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteMenu from "./Animations/InfiniteMenu";
// import { ScrollContainer } from "react-indiana-drag-scroll";

const photosCount = 39;

interface PhotosProps {
  photos: string[];
}

export const Photos = ({ photos }: PhotosProps) => {
  // const scrollContainer = useScrollContainer({
  //   mouseScroll: { overscroll: true },
  // });

  const [windowWidth, setWindowWidth] = useState(0);

  return (
    <div className="max-w-4xl bg-white">
      <h1 className="md:text-left mb-4 w-full">Photos</h1>
      <p className="prose prose-a:text-sky-600 text-paragraph max-w-none">
        I've been learning how to take photos on a{" "}
        <a
          href="https://www.youtube.com/watch?v=tCzssFz3xfU"
          target="_blank"
          rel="noopener noreferrer"
        >
          Canon Rebel T3i
        </a>{" "}
        that my parents got almost a decade ago to document our trips, only that
        now they use their smartphones and I have free reign on this camera. You
        can view my photostream on Flickr{" "}
        <a
          href="https://flickr.com/photos/195755423@N04/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>

      <InfiniteMenu
        items={photos.map((u: string) => {
          return {
            image: u,
          };
        })}
      />

      {/* </img> */}

      {/* </ScrollContainer> */}
      {/* </div> */}
      <a
        href="https://flickr.com/photos/195755423@N04/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full border border-gray-150 rounded-sm py-2 hover:bg-neutral-100 underline text-center">
          {/* <p className="">View all</p> */}
          View all
        </div>
      </a>
    </div>
  );
};
