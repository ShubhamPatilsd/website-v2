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
    </div>
  );
};
