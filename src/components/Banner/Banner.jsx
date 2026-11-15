// Update this path to wherever your background image lives
import bannerBg from "../../assets/images/more/banner-bg.png";

const Banner = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      {/* Dark overlay: only shown on small screens so text stays readable
          when the content sits on top of the cup */}
      <div
        className="absolute inset-0 bg-black/60 lg:hidden"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-120 max-w-[1920px] grid-cols-1 items-center px-6 py-16 sm:px-10 lg:min-h-160 lg:grid-cols-[46fr_54fr] xl:min-h-200">
        {/* Empty left column: keeps the coffee cup visible on large screens */}
        <div className="hidden lg:block" aria-hidden="true" />

        <div className="max-w-180">
          <h1 className="font-rancho text-4xl leading-tight text-white sm:text-5xl">
            Would you like a Cup of Delicious Coffee?
          </h1>

          <p className="mt-6 font-raleway text-sm leading-7.5 text-white sm:text-base">
            It's coffee time - Sip &amp; Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>

          <button
            type="button"
            className="mt-8 h-12 bg-[#E3B577] px-6 font-rancho text-xl text-heading border-2 border-transparent transition-all duration-200 hover:bg-transparent hover:text-white hover:border-2 hover:border-white focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#E3B577] cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
