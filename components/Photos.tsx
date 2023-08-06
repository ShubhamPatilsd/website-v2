// import "react-bubble-ui/dist/index.css";
// import "react-indiana-drag-scroll/dist/style.css";

// import { useDraggable } from "react-use-draggable-scroll";
// @ts-ignore
import BubbleUI from "react-bubble-ui";
import { useEffect, useState } from "react";
import axios from "axios";
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

  useEffect(() => {
    const photoLinks = photos;

    setWindowWidth(window.innerHeight);

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
      HORIZONTAL = 6,
      VERTICAL = Math.max(photoLinks.length / HORIZONTAL), //how many circles will be on the canvas
      RADIUS = window.innerHeight * 0.1, //size of circles
      PADDINGX = -5,
      PADDINGY = -5, //the gap between circles
      SCALE_FACTOR = window.innerHeight * 0.7; //small number = icons get small faster, smaller number = icons get small slowly

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; //set canvas to full size of the window

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

    centerX = canvas.width * 0.4;
    centerY = canvas.height / 2;

    x = 0;
    y = 0;

    let photoIndexCounter = 0;

    for (i = 0; i < VERTICAL; i++) {
      for (j = 0; j < HORIZONTAL; j++) {
        if (!photoLinks[photoIndexCounter]) {
          continue;
        }

        var randomColor =
          colors[Math.round(Math.random() * (colors.length - 1))]; //generating a random color for the menu circle

        circles.push({
          x: x,
          y: y,
          color: randomColor,
          // src: photoLinks[photoIndexCounter],
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
        // circleImage.src = circles[i].src; // Replace with the path to your circle image
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

    document
      .getElementById("canvas")
      .addEventListener("touchstart", handleTouch);

    function handleTouch(e) {
      document
        .getElementById("canvas")
        .addEventListener("touchmove", handleSwipe);
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

    document.getElementById("canvas").addEventListener("touchend", () => {
      document
        .getElementById("canvas")
        .removeEventListener("touchmove", handleSwipe);
    });

    document
      .getElementById("canvas")
      .addEventListener("mousedown", handleClick);

    function handleClick(e) {
      document
        .getElementById("canvas")
        .addEventListener("mousemove", handleMouse);
      document
        .getElementById("canvas")
        .addEventListener("mouseup", handleRelease);
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
      document
        .getElementById("canvas")
        .removeEventListener("mouseup", handleRelease);
      document
        .getElementById("canvas")
        .removeEventListener("mousemove", handleMouse);
      canvas.style.cursor = "grab";
    }

    window.addEventListener("resize", () => {
      canvas.height = window.innerHeight;
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

      <div className="absolute left-0">
        <canvas id="canvas" className="left-0"></canvas>
      </div>

      <div style={{ height: windowWidth }}></div>

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
