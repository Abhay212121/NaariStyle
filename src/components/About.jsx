export default function About() {
  return (
    <>
      <h2 className="2xl:text-6xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl text-4xl lg:ml-34  text-center tracking-wide font-heading mt-5">
        Grace in Every Stitch
      </h2>
      <div className="flex 2xl:w-7/10 xl:w-8/10 w-9/10 mx-auto lg:gap-65 md:gap-10 mt-10 lg:mt-20 items-center">
        <div className="sm:py-10 md:py-20">
          <h2 className="font-heading text-3xl sm:text-4xl">Our Story</h2>
          <p className="font-display mt-2 text-xl sm:text-2xl">
            Founded with a passion for sophistication, we curate the finest
            fashion and jewelry that blend elegance with modern trends. Our
            mission is to bring you luxurious styles that stand the test of
            time.
          </p>
        </div>
        <div className="w-full hidden md:inline">
          <img
            src="about-1.jpg"
            alt="image not found"
          />
        </div>
      </div>
      <div className="flex items-center 2xl:w-7/10 xl:w-8/10 w-9/10 mx-auto lg:gap-65 md:gap-10 mt-10">
        <div className="w-full hidden md:inline">
          <img
            src="about-2.jpg"
            alt="image not found"
          />
        </div>
        <div className="sm:py-10 md:py-20">
          <h2 className="font-heading text-3xl sm:text-4xl">Our Collection</h2>
          <p className="font-display mt-2 text-xl sm:text-2xl">
            From exquisite designer wear to stunning jewelry pieces, every item
            is handpicked for its quality, craftsmanship, and timeless appeal.
            Whether it's everyday chic or red-carpet glam, we have something for
            everyone.
          </p>
        </div>
      </div>
      <div className="flex 2xl:w-7/10 xl:w-8/10 w-9/10 mx-auto lg:gap-65 md:gap-10 mt-10 mb-15 sm:mb-25 items-center">
        <div className="sm:py-10 md:py-20">
          <h2 className="font-heading text-3xl sm:text-4xl">Our Promise</h2>
          <p className="font-display mt-2 text-xl sm:text-2xl">
            We believe in providing authentic, high-quality fashion with
            exceptional customer service. Your satisfaction is our priority, and
            we strive to make luxury accessible, effortless, and truly
            unforgettable.
          </p>
        </div>
        <div className="w-full hidden md:inline">
          <img
            src="about-3.jpg"
            alt="image not found"
          />
        </div>
      </div>
    </>
  );
}
