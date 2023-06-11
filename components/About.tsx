import { Polaroid } from "./Polaroid";

export const About = () => {
  return (
    <div className="">
      <h1 className="md:text-left italic font-black">Hacking Since '07</h1>

      <div className="flex flex-col lg:flex-row mt-4 space-y-12 lg:space-x-12 lg:space-y-0">
        <div className="w-full lg:w-1/2">
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
            fermentum iaculis eu non. Volutpat maecenas volutpat blandit
            aliquam. At risus viverra adipiscing at. Volutpat maecenas volutpat
            blandit aliquam. Vitae ultricies leo integer malesuada nunc vel
            risus. Ut venenatis tellus in metus vulputate eu scelerisque. Sed
            faucibus turpis in eu mi bibendum neque egestas. Felis imperdiet
            proin fermentum leo. Sodales neque sodales ut etiam sit amet. Justo
            laoreet sit amet cursus sit amet dictum sit amet. Volutpat lacus
            laoreet non curabitur gravida arcu. Egestas tellus rutrum tellus
            pellentesque eu tincidunt tortor. Enim sed faucibus turpis in eu mi
            bibendum neque. Orci eu lobortis elementum nibh tellus molestie nunc
            non. Convallis aenean et tortor at risus. A erat nam at lectus urna.
            Nullam vehicula ipsum a arcu cursus vitae congue mauris. Posuere
            urna nec tincidunt praesent. Lacus sed viverra tellus in hac
            habitasse platea. Etiam sit amet nisl purus. Egestas diam in arcu
            cursus euismod. Libero nunc consequat interdum varius. Eu tincidunt
            tortor aliquam nulla facilisi cras fermentum odio. Pharetra magna ac
            placerat vestibulum lectus mauris ultrices eros. Eros in cursus
            turpis massa tincidunt dui. Sociis natoque penatibus et magnis dis
            parturient. Aenean sed adipiscing diam donec. Vel quam elementum
            pulvinar etiam non. Sed egestas egestas fringilla phasellus faucibus
            scelerisque eleifend donec. Eleifend quam adipiscing vitae proin.
            Fames ac turpis egestas maecenas pharetra convallis. Nunc lobortis
            mattis aliquam faucibus purus in. Phasellus egestas tellus rutrum
            tellus. Ultrices dui sapien eget mi. Turpis egestas maecenas
            pharetra convallis posuere. Ridiculus mus mauris vitae ultricies leo
            integer malesuada nunc. Condimentum id venenatis a condimentum
            vitae. Odio eu feugiat pretium nibh ipsum. Tempor orci dapibus
            ultrices in iaculis nunc sed augue lacus. Congue quisque egestas
            diam in arcu cursus euismod quis viverra. Sit amet luctus venenatis
            lectus magna fringilla urna porttitor. Arcu odio ut sem nulla.
            Auctor eu augue ut lectus arcu bibendum. Pellentesque sit amet
            porttitor eget dolor. Pulvinar etiam non quam lacus suspendisse
            faucibus interdum posuere lorem. A diam sollicitudin tempor id eu
            nisl nunc mi ipsum. Amet justo donec enim diam vulputate ut pharetra
            sit. Duis tristique sollicitudin nibh sit amet commodo nulla
            facilisi nullam. Risus at ultrices mi tempus imperdiet nulla
            malesuada pellentesque. Potenti nullam ac tortor vitae purus
            faucibus. Velit scelerisque in dictum non consectetur a erat.
            Consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo. Dui vivamus arcu felis bibendum ut tristique et
            egestas. Vestibulum morbi blandit cursus risus at ultrices mi. Nunc
            eget lorem dolor sed viverra ipsum. Nisi scelerisque eu ultrices
            vitae auctor eu augue ut. Neque gravida in fermentum et. Lorem sed
            risus ultricies tristique nulla aliquet enim tortor at. Quisque id
            diam vel quam elementum pulvinar etiam non. Vel pharetra vel turpis
            nunc eget lorem dolor sed.
          </p>
        </div>
        {/* pictures */}
        <div className="w-full lg:w-1/2">
          <div className="mx-auto max-w-max border-red-500 grid grid-flow-col gap-12 auto-cols-auto grid-rows-2">
            <Polaroid />
            <Polaroid />
            <Polaroid />
          </div>
        </div>
      </div>
    </div>
  );
};
