import { Polaroid } from "./Polaroid";

export const About = () => {
  return (
    <div>
      <h1 className="md:text-left italic font-black">Hacking Since '07</h1>

      <div className="flex">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            illum, ipsa dolores nam quos excepturi quisquam deleniti, odio
            reprehenderit ipsam consequatur rem omnis, soluta animi nihil sequi
            delectus ducimus nisi.
          </p>
        </div>
        {/* pictures */}
        <div>
          <Polaroid />
        </div>
      </div>
    </div>
  );
};
