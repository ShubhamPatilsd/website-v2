import "react-bubble-ui/dist/index.css";
// import "react-indiana-drag-scroll/dist/style.css";

// import { useDraggable } from "react-use-draggable-scroll";
// @ts-ignore
import BubbleUI from "react-bubble-ui";
import { useEffect } from "react";
// import { ScrollContainer } from "react-indiana-drag-scroll";

const photosCount = 39;

const photoLinks = [
  "https://via.placeholder.com/400?text=Photo+1",
  "https://via.placeholder.com/400?text=Photo+2",
  "https://via.placeholder.com/400?text=Photo+3",
  "https://via.placeholder.com/400?text=Photo+4",
  "https://via.placeholder.com/400?text=Photo+5",
  "https://via.placeholder.com/400?text=Photo+6",
  "https://via.placeholder.com/400?text=Photo+7",
  "https://via.placeholder.com/400?text=Photo+8",
  "https://via.placeholder.com/400?text=Photo+9",
  "https://via.placeholder.com/400?text=Photo+10",
  "https://via.placeholder.com/400?text=Photo+11",
  "https://via.placeholder.com/400?text=Photo+12",
  "https://via.placeholder.com/400?text=Photo+13",
  "https://via.placeholder.com/400?text=Photo+14",
  "https://via.placeholder.com/400?text=Photo+15",
  "https://via.placeholder.com/400?text=Photo+16",
  "https://via.placeholder.com/400?text=Photo+17",
  "https://via.placeholder.com/400?text=Photo+18",
  "https://via.placeholder.com/400?text=Photo+19",
  "https://via.placeholder.com/400?text=Photo+20",
  "https://via.placeholder.com/400?text=Photo+21",
  "https://via.placeholder.com/400?text=Photo+22",
  "https://via.placeholder.com/400?text=Photo+23",
  "https://via.placeholder.com/400?text=Photo+24",
  "https://via.placeholder.com/400?text=Photo+25",
  "https://via.placeholder.com/400?text=Photo+26",
  "https://via.placeholder.com/400?text=Photo+27",
  "https://via.placeholder.com/400?text=Photo+28",
  "https://via.placeholder.com/400?text=Photo+29",
  "https://via.placeholder.com/400?text=Photo+30",
  "https://via.placeholder.com/400?text=Photo+31",
  "https://via.placeholder.com/400?text=Photo+32",
  "https://via.placeholder.com/400?text=Photo+33",
  "https://via.placeholder.com/400?text=Photo+34",
  "https://via.placeholder.com/400?text=Photo+35",
  "https://via.placeholder.com/400?text=Photo+36",
  "https://via.placeholder.com/400?text=Photo+37",
  "https://via.placeholder.com/400?text=Photo+38",
  "https://via.placeholder.com/400?text=Photo+39",
];

export const Photos = () => {
  // const scrollContainer = useScrollContainer({
  //   mouseScroll: { overscroll: true },
  // });
  useEffect(() => {
    //@ts-ignore
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d"); //get the canvas from html

    let colors = [
        "#FF9AA2",
        "#FFB7B2",
        "#FFDAC1",
        "#E2F0CB",
        "#B5EAD7",
        "#C7CEEA",
      ],
      mouseX = 0,
      mouseY = 0, //save current mouse/finger position
      circles: any = [], //array of menu items
      centerX = 0,
      centerY = 0, //saves the center position of canvas
      startX = 0,
      startY = 0, //saves position of mouse/finger where draging/swiping starts
      offsetX = 0,
      offsetY = 0, //offset to center the menu items and move them around, gets in/decreased by dragging
      oldOffsetX = 0,
      oldOffsetY = 0, //save old offsets to update current offset
      scale,
      i,
      j, //used for counters
      x,
      y, //used for creating the array of circles
      clicked, //for saving the mouse state
      HORIZONTAL = 8,
      VERTICAL = Math.max(photosCount / HORIZONTAL), //how many circles will be on the canvas
      RADIUS = window.innerWidth * 0.1, //size of circles
      PADDINGX = 10,
      PADDINGY = 10, //the gap between circles
      SCALE_FACTOR = window.innerWidth * 0.5; //small number = icons get small faster, smaller number = icons get small slowly

    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth; //set canvas to full size of the window

    offsetX =
      (canvas.width -
        (RADIUS * 2 * HORIZONTAL +
          PADDINGX * (HORIZONTAL - 1) +
          RADIUS +
          PADDINGX / 2)) /
        2 +
      RADIUS; //center the circles by getting its width and calculating the leftover space
    offsetY =
      (canvas.height - (RADIUS * 2 * VERTICAL + PADDINGY * (VERTICAL - 1))) /
        2 +
      RADIUS;

    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    x = 0;
    y = 0;

    let photoIndexCounter = 0;

    for (i = 0; i < VERTICAL; i++) {
      for (j = 0; j < HORIZONTAL; j++) {
        var randomColor =
          colors[Math.round(Math.random() * (colors.length - 1))]; //generating a random color for the menu circle

        circles.push({
          x: x,
          y: y,
          color: randomColor,
          src: photoLinks[photoIndexCounter],
        }); //add circle with x and y coordinates and color to the array
        x += RADIUS * 2 + PADDINGX; //increase x for the next circle
        photoIndexCounter++;
      }

      if (i % 2 == 0) {
        x = PADDINGX / 2 + RADIUS; //if its the second, fourth, sixth etc. row then move the row to right
      } else {
        x = 0;
      }

      y += RADIUS * 2 + PADDINGY; //increase y for the next circle row
    }

    // function draw() {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas

    //   ctx.save();

    //   ctx.translate(offsetX, offsetY);

    //   for (i = 0; i < circles.length; i++) {
    //     ctx.save();
    //     scale = getDistance(circles[i]);
    //     ctx.translate(circles[i].x, circles[i].y);
    //     ctx.translate(RADIUS / 2, RADIUS / 2);
    //     ctx.scale(scale, scale);
    //     ctx.translate(-RADIUS / 2, -RADIUS / 2);

    //     ctx.fillStyle = circles[i].color;
    //     ctx.beginPath();
    //     ctx.arc(0, 0, RADIUS, 0, Math.PI * 2);
    //     ctx.fill();
    //     ctx.restore();
    //   }

    //   ctx.restore();
    //   requestAnimationFrame(draw);
    // }
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      ctx.save();

      ctx.translate(offsetX, offsetY);

      for (i = 0; i < circles.length; i++) {
        ctx.save();
        scale = getDistance(circles[i]);
        ctx.translate(circles[i].x, circles[i].y);
        ctx.translate(RADIUS / 2, RADIUS / 2);
        ctx.scale(scale, scale);
        ctx.translate(-RADIUS / 2, -RADIUS / 2);

        // Create circular clipping path
        ctx.beginPath();
        ctx.arc(0, 0, RADIUS, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        // Draw circle image
        const circleImage = new Image();
        circleImage.src = circles[i].src; // Replace with the path to your circle image
        ctx.drawImage(circleImage, -RADIUS, -RADIUS, RADIUS * 2, RADIUS * 2);

        ctx.restore();
      }

      ctx.restore();
      requestAnimationFrame(draw);
    }

    draw();

    function getDistance(circle) {
      var dx, dy, dist;
      dx = circle.x - centerX + offsetX;
      dy = circle.y - centerY + offsetY;
      dist = Math.sqrt(dx * dx + dy * dy);
      scale = 1 - dist / SCALE_FACTOR;
      scale = scale > 0 ? scale : 0;

      return scale;
    }

    window.addEventListener("touchstart", handleTouch);

    function handleTouch(e) {
      window.addEventListener("touchmove", handleSwipe);
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      oldOffsetX = offsetX;
      oldOffsetY = offsetY;
    }

    function handleSwipe(e) {
      mouseX = e.changedTouches[0].clientX;
      mouseY = e.changedTouches[0].clientY;
      offsetX = oldOffsetX + mouseX - startX;
      offsetY = oldOffsetY + mouseY - startY;
    }

    window.addEventListener("touchend", () => {
      window.removeEventListener("touchmove", handleSwipe);
    });

    window.addEventListener("mousedown", handleClick);

    function handleClick(e) {
      window.addEventListener("mousemove", handleMouse);
      window.addEventListener("mouseup", handleRelease);
      startX = e.clientX;
      startY = e.clientY;
      oldOffsetX = offsetX;
      oldOffsetY = offsetY;
      canvas.style.cursor = "grabbing";
    }

    function handleMouse(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      offsetX = oldOffsetX + mouseX - startX;
      offsetY = oldOffsetY + mouseY - startY;
    }

    function handleRelease() {
      window.removeEventListener("mouseup", handleRelease);
      window.removeEventListener("mousemove", handleMouse);
      canvas.style.cursor = "grab";
    }

    window.addEventListener("resize", () => {
      canvas.height = window.innerWidth;
      canvas.width = window.innerWidth;
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
    });
  }, []);

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
      {/* <BubbleUI
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
      </BubbleUI> */}
      <canvas id="canvas" className="block static w-full"></canvas>

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
