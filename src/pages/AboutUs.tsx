const AboutUs = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Mech<span className="text-blue-500">Key</span>Mart
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            MechKeyMart is your ultimate destination for premium mechanical
            keyboards and accessories. We are committed to providing exceptional
            products that cater to both enthusiasts and professionals alike.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-700">
              At MechKeyMart, our mission is to elevate your typing experience
              by offering a curated selection of mechanical keyboards that
              combine innovation, style, and functionality.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Our Vision
            </h3>
            <p className="text-gray-700">
              We envision MechKeyMart as the go-to platform for keyboard
              enthusiasts worldwide, known for our commitment to quality,
              customer satisfaction, and technological advancement in mechanical
              keyboards.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src="https://i.pinimg.com/564x/70/f0/20/70f020803bad3533ac3612948da7bef0.jpg"
              alt="About Us Image"
              className="rounded-lg"
            />
          </div>
          <div className="p-6 bg-white rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Story</h3>
            <p className="text-gray-700">
              Founded in 2020, MechKeyMart emerged from a deep-seated passion
              for mechanical keyboards and a commitment to delivering
              unparalleled quality to keyboard enthusiasts worldwide. What began
              as a humble endeavor fueled by curiosity and enthusiasm has since
              evolved into a cornerstone of innovation and customer-centricity
              within the mechanical keyboard community.
              <br /> <br />
              From our inception, we set out with a clear vision: to redefine
              the standards of mechanical keyboards by offering products that
              blend cutting-edge technology with timeless craftsmanship. Our
              journey has been marked by continuous exploration and innovation,
              driven by a relentless pursuit of excellence in every aspect of
              our business.
              <br /> <br />
              Over the years, MechKeyMart has garnered a reputation as a trusted
              brand synonymous with reliability, innovation, and customer
              satisfaction. We take pride in our curated selection of keyboards
              and accessories, each meticulously chosen to meet the diverse
              needs and preferences of our valued customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
