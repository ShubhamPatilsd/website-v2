const jobs = [
  {
    title: "Cofounder",
    company: "Tripley",
    description: "This is a description",
    from: "Aug 2022",
    to: "Present",
  },
  {
    title: "Cofounder",
    company: "Tripley",
    description: "This is a description",
    from: "Aug 2022",
    to: "Present",
  },
  {
    title: "Cofounder",
    company: "Tripley",
    description: "This is a description",
    from: "Aug 2022",
    to: "Present",
  },
];

export const WorkTable = () => {
  return (
    <div className="space-y-2">
      {jobs.map((job) => {
        return (
          <div className="p-4 shadow rounded-lg border border-gray-150 bg-white cursor-default hover:bg-neutral-100 transition space-y-2">
            <div className="">
              <p className="text-lg font-bold leading-none">
                {job.title} @ {job.company}
              </p>
              <span className="whitespace-nowrap mt-2">
                {/* <p className="uppercase text-xs"> */}
                {job.from}—{job.to}
                {/* </p> */}
              </span>
            </div>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea,
              odio provident dolore sit, officia explicabo perferendis animi
              quia sequi minus modi quae perspiciatis. Deleniti, magnam
              nesciunt? Eos, consequuntur aut!
            </div>
          </div>
        );
      })}
    </div>
  );
};
