import Link from 'next/link';

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-[auto_auto_auto_auto] gap-4 px-4 md:px-8">
        {/* Imagen izquierda */}
        <div className="md:col-span-2 row-span-2">
          <img
            src="/aboutus.jpg"
            alt="About Malbec BBQ"
            className="rounded-[12px] h-60 w-full object-cover md:h-72"
          />
        </div>

        {/* Título */}
        <div className="md:col-span-3 md:col-start-3">
          <h3 className="text-second text-2xl md:text-5xl font-bold font-lucidity_condensed text-center md:text-left">
            Malbec BBQ: bringing Argentine tradition to American barbecue
          </h3>
        </div>

        {/* Descripción */}
        <div className="md:row-start-2 md:col-start-3">
          <p className="text-primary text-sm md:text-base font-nourd font-medium text-center md:text-left">
            Make your next event unforgettable. We are proud to offer American barbecue, South American asado, and a wide selection of sides, salads, and desserts. We offer full-service catering for weddings, corporate events, festivals, holiday parties, and more, throughout Michigan.
          </p>
        </div>

        {/* Imagen derecha */}
        <div className="row-span-2 md:col-span-2 md:col-start-4 md:row-start-2">
          <img
            src="/aboutus_two.jpg"
            alt="About Malbec BBQ Two"
            className="rounded-[12px] h-60 w-full object-cover md:h-72"
          />
        </div>

        {/* Sección "About Us" */}
        <div className="md:col-span-3 md:row-start-3">
          <h3 className="text-second text-3xl md:text-4xl font-bold font-lucidity_condensed text-center md:text-left">
            About us
          </h3>
          <p className="text-primary text-sm md:text-base font-nourd font-medium pt-4 text-center md:text-left">
            Born in Argentina, founder and cook David McCarthy is a second-generation asador, or grillmaster. He is passionate about producing barbecue the Argentine way; slow-cooked and over an open flame.
            Today, Malbec BBQ crafts classic American barbecue, traditional South American asado, fresh sides, and decadent desserts.
            We believe the most important part of any meal is sharing it with loved ones. It is our passion to cook, host, and craft memorable experiences.
            Join us for a true taste of our fusion of Argentine and American barbecue, crafted with heart and heritage.
          </p>
        </div>

        {/* Redes sociales */}
        <div className="mt-12 flex justify-center md:justify-end md:col-span-2 md:col-start-4 md:row-start-3">
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              {/* Botón de Instagram */}
              <a
                href="https://www.instagram.com/malbec.bbq"
                target="_blank"
                className="text-primary hover:bg-[#900B09]/70 hover:border-white transition-colors duration-300 border-2 border-[#900B09] rounded-full p-3"
                aria-label="Instagram"
              >
                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.3543 11.6458H31.3722M12.5418 3.58331H30.4585C35.406 3.58331 39.4168 7.5941 39.4168 12.5416V30.4583C39.4168 35.4059 35.406 39.4166 30.4585 39.4166H12.5418C7.59428 39.4166 3.5835 35.4059 3.5835 30.4583V12.5416C3.5835 7.5941 7.59428 3.58331 12.5418 3.58331ZM28.6668 20.3712C28.8879 21.8623 28.6333 23.3852 27.939 24.7232C27.2447 26.0612 26.1462 27.1463 24.7997 27.824C23.4533 28.5017 21.9274 28.7376 20.4391 28.4981C18.9508 28.2586 17.576 27.556 16.5101 26.4901C15.4442 25.4242 14.7415 24.0493 14.502 22.561C14.2626 21.0728 14.4984 19.5469 15.1762 18.2004C15.8539 16.8539 16.9389 15.7554 18.2769 15.0612C19.6149 14.3669 21.1378 14.1122 22.6289 14.3333C24.1499 14.5589 25.558 15.2676 26.6453 16.3549C27.7325 17.4421 28.4413 18.8502 28.6668 20.3712Z"
                    stroke="#900B09"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              {/* Botón de Facebook */}
              <a
                href="#"
                target="_blank"
                className="text-primary hover:bg-[#900B09]/70 hover:border-white transition-colors duration-300 border-2 border-[#900B09] rounded-full p-3"
                aria-label="Facebook"
              >
                <svg
                  width="44"
                  height="43"
                  viewBox="0 0 44 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.0002 3.58331H27.5002C25.069 3.58331 22.7374 4.52713 21.0184 6.20715C19.2993 7.88716 18.3335 10.1657 18.3335 12.5416V17.9166H12.8335V25.0833H18.3335V39.4166H25.6668V25.0833H31.1668L33.0002 17.9166H25.6668V12.5416C25.6668 12.0665 25.86 11.6108 26.2038 11.2747C26.5476 10.9387 27.0139 10.75 27.5002 10.75H33.0002V3.58331Z"
                    stroke="#900B09"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              {/* Botón de Teléfono */}
              <a
                href="tel:2489127356"
                target="_blank"
                className="text-primary hover:bg-[#900B09]/70 transition-colors duration-300 border-2 border-[#900B09] rounded-full p-3"
                aria-label="Phone"
              >
                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.4166 30.315V35.69C39.4186 36.189 39.3164 36.6829 39.1165 37.1401C38.9166 37.5972 38.6234 38.0077 38.2557 38.345C37.888 38.6823 37.4539 38.9391 36.9812 39.099C36.5086 39.2588 36.0077 39.3182 35.5107 39.2733C29.9975 38.6742 24.7016 36.7903 20.0486 33.7729C15.7197 31.0221 12.0495 27.3519 9.29865 23.0229C6.27069 18.3488 4.38634 13.0272 3.79823 7.48914C3.75346 6.99368 3.81234 6.49433 3.97113 6.02288C4.12992 5.55143 4.38513 5.11821 4.72052 4.75079C5.05591 4.38338 5.46413 4.08982 5.91919 3.88882C6.37425 3.68782 6.86618 3.58377 7.36365 3.5833H12.7387C13.6082 3.57475 14.4511 3.88265 15.1104 4.44963C15.7697 5.01661 16.2003 5.80398 16.322 6.66497C16.5488 8.38509 16.9696 10.074 17.5762 11.6996C17.8172 12.3408 17.8694 13.0378 17.7265 13.7078C17.5836 14.3778 17.2516 14.9928 16.7699 15.48L14.4945 17.7554C17.045 22.2409 20.759 25.9549 25.2445 28.5054L27.5199 26.23C28.007 25.7483 28.6221 25.4163 29.2921 25.2734C29.9621 25.1305 30.659 25.1827 31.3003 25.4237C32.9258 26.0303 34.6148 26.451 36.3349 26.6779C37.2052 26.8007 38.0001 27.239 38.5683 27.9096C39.1365 28.5803 39.4384 29.4363 39.4166 30.315Z" stroke="#900B09" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
            <Link href="#contact" className="text-second text-2xl font-bold font-lucidity_condensed">Join us!</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
