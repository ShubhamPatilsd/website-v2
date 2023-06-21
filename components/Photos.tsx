export const Photos = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {[
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
                // backgroundSize: `${imagepx * 1.56}px`,
                // height: `${imagepx}px`,
                // width: `${imagepx}px`,
              }}
              className={`rounded-full shadow-lg transition w-36 h-36 hover:scale-110 bg-cover bg-center`}
            />
          );
        })}
      </div>
      <a href="google.com">
        <div className="w-full border border-red-500">
          <p className="underline text-center">View all</p>
        </div>
      </a>
    </div>
  );
};
