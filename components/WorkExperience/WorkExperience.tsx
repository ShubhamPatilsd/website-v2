import { WorkTable } from "./WorkTable";

export const WorkExperience = () => {
  return (
    <div>
      <h1 className="md:text-left italic font-black">Work Experience</h1>

      <div className="flex flex-col lg:flex-row mt-4 lg:space-x-10 space-y-6 lg:space-y-0">
        <div className="lg:w-1/2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
            pellentesque elit ullamcorper dignissim cras tincidunt lobortis
            feugiat. Tellus pellentesque eu tincidunt tortor. Morbi non arcu
            risus quis varius quam quisque. Dolor magna eget est lorem ipsum. In
            massa tempor nec feugiat nisl pretium fusce id. Felis imperdiet
            proin fermentum leo vel orci porta. Cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque mauris. Arcu non odio euismod
            lacinia at. Nec dui nunc mattis enim ut. Vitae justo eget magna
            fermentum iaculis eu non. <br />
            <br /> Volutpat maecenas volutpat blandit aliquam. At risus viverra
            adipiscing at. Volutpat maecenas volutpat blandit aliquam. Vitae
            ultricies leo integer malesuada nunc vel risus. Ut venenatis tellus
            in metus vulputate eu scelerisque. Sed faucibus turpis in eu mi
            bibendum neque egestas. Felis imperdiet proin fermentum leo. Sodales
            neque sodales ut etiam sit amet. Justo laoreet sit amet cursus sit
            amet dictum sit amet. Volutpat lacus laoreet non curabitur gravida
            arcu. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor.
          </p>
        </div>
        <div className="lg:w-1/2">
          <WorkTable />
        </div>
      </div>
    </div>
  );
};
