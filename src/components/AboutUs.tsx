import Link from 'next/link';

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-10 px-4">
      {/* Primera fila */}
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-1/3 h-full">
          <img
            src="/aboutus.jpg"
            alt="About Malbec BBQ"
            className="rounded-[12px] h-80 w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-second text-4xl font-bold font-lucidity_condensed">
            About Us
          </h3>
          <p className="text-primary text-sm font-nourd font-medium pt-4 md:pt-8">
            Originally from Argentina, land of charcoal and fire-grilled meats
            by excellence, we have added the art of American BBQ over the last
            20 years of living in the USA to our Argentine grilling mastery. We
            are a family business rooted in our Argentine traditions with a long
            experience of sharing our Argentine and American BBQ meat cuisine
            with our many Argentine and local friends, families and businesses.
            Host your next event with us and enjoy everything our Arkansas built
            smoker and Argentine style fire and charcoal grills can provide.
          </p>
        </div>
        <div className="w-full md:w-1/3 h-64 flex justify-center md:justify-end">
          <img
            src="/logo_aboutus.svg"
            alt="Logo About Malbec BBQ"
            className="h-64 w-64 object-contain"
          />
        </div>
      </div>

      {/* Segunda fila */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-start gap-6 mt-10">
        <div className="w-full md:w-1/3 h-48 flex justify-center md:justify-start">
          <img
            src="/icon_aboutus.svg"
            alt="Icon About Malbec BBQ"
            className="h-48 w-48 object-contain"
          />
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left">
          <p className="text-primary text-sm font-nourd font-medium pt-4 md:pt-8">
            At Malbec BBQ, we blend our Argentine grilling family tradition with
            the classic flavors of American-style barbecue. Born from a passion
            of slow cooked smoky goodness, we bring you recipes for tender
            meats, sides, and desserts. Every one of our creations reflects our
            commitment to quality, authenticity and our love of sharing good
            food. Join us for a true taste of our fusion of Argentine and
            American barbecue, crafted with heart and heritage.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="#contact"
              className="w-max link-joinus relative self-end text-second text-sm font-bold font-lucidity_condensed mt-4 inline-block"
            >
              Join us!
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 h-full">
          <img
            src="/aboutus_two.jpg"
            alt="About Malbec BBQ Two"
            className="rounded-[12px] h-96 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
