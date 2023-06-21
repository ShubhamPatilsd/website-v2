import "react-bubble-ui/dist/index.css";
// import "react-indiana-drag-scroll/dist/style.css";

// import { useDraggable } from "react-use-draggable-scroll";
// @ts-ignore
import BubbleUI from "react-bubble-ui";
// import { ScrollContainer } from "react-indiana-drag-scroll";

export const Photos = () => {
  // const scrollContainer = useScrollContainer({
  //   mouseScroll: { overscroll: true },
  // });

  return (
    <div className="max-w-4xl">
      <h1 className="md:text-left italic font-black mb-4 w-full">Photos!</h1>
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

      {/* <div className="grid grid-flow-row-dense grid-cols-3 mt-4"> */}
      {/* <ScrollContainer> */}
      <BubbleUI
        options={{
          size: 128,
          minSize: 20,
          gutter: 36,
          provideProps: true,
          numCols: 5,
          fringeWidth: 180,
          yRadius: 130,
          xRadius: 221,
          cornerRadius: 250,
          showGuides: false,
          compact: true,
          gravitation: 2,
        }}
        style={{
          width: "100%",
          maxWidth: "1000px",
          height: "500px",
          borderRadius: "50px",
        }}
      >
        {[
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
          "https://live.staticflickr.com/65535/52673888948_4df031d0e7_k.jpg",
        ].map((imgurl) => {
          const imagepx = 100;
          return (
            <div
              // src={imgurl}
              style={{
                backgroundImage: `url(${imgurl})`,
                backgroundPosition: "center center",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                // backgroundSize: `${imagepx * 1.56}px`,
                // height: `${imagepx}px`,
                // width: `${imagepx}px`,
              }}
              className={`rounded-full shadow-lg transition w-36 h-36 hover:scale-110 bg-cover bg-center select-none`}
            />
          );
        })}
      </BubbleUI>
      {/* </ScrollContainer> */}
      {/* </div> */}
      <a href="google.com">
        <div className="w-full border border-red-500">
          <p className="underline text-center">View all</p>
        </div>
      </a>
    </div>
  );
};
