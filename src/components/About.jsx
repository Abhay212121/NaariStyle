import Footer from "./Footer";
import Header from "./Header";

export default function About() {
  return (
    <>
      <Header />
      <h2 className="text-6xl text-center tracking-wide font-heading mt-5">
        Grace in Every Stitch
      </h2>
      <div className="flex px-80 gap-75 mt-20">
        <div className="py-20">
          <h2 className="font-heading text-4xl">Our Story</h2>
          <p className="font-display mt-2 text-2xl">
            Founded with a passion for sophistication, we curate the finest
            fashion and jewelry that blend elegance with modern trends. Our
            mission is to bring you luxurious styles that stand the test of
            time.
          </p>
        </div>
        <img
          src="about-1.jpg"
          alt="image not found"
          className="w-sm"
        />
      </div>
      <div className="flex px-80 gap-75 mt-10">
        <img
          src="about-2.jpg"
          alt="image not found"
          className="w-sm"
        />
        <div className="py-20">
          <h2 className="font-heading text-4xl">Our Collection</h2>
          <p className="font-display mt-2 text-2xl">
            From exquisite designer wear to stunning jewelry pieces, every item
            is handpicked for its quality, craftsmanship, and timeless appeal.
            Whether it's everyday chic or red-carpet glam, we have something for
            everyone.
          </p>
        </div>
      </div>
      <div className="flex px-80 gap-75 mt-10 mb-25">
        <div className="py-20">
          <h2 className="font-heading text-4xl">Our Promise</h2>
          <p className="font-display mt-2 text-2xl">
            We believe in providing authentic, high-quality fashion with
            exceptional customer service. Your satisfaction is our priority, and
            we strive to make luxury accessible, effortless, and truly
            unforgettable.
          </p>
        </div>
        <img
          src="about-3.jpg"
          alt="image not found"
          className="w-sm"
        />
      </div>
      <Footer />
    </>
  );
}
