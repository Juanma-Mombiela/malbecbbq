import Image from 'next/image';

export default function CateringEvents() {
  return (
    <section id="catering" className="bg-white py-10">
      <div className="checkered-pattern w-full"></div>
      <div className="container mx-auto flex flex-col items-center text-center px-4 pt-8">
        <h3 className="text-second text-4xl font-bold font-lucidity_condensed mb-4">
          Catering & Events
        </h3>
        <p className="text-primary text-sm font-nourd font-medium max-w-3xl mb-6">
        Want to bring the Malbec BBQ experience to your next event? We’ve got you covered! From full-service catering and pickup to our amazing food truck, we deliver our signature flavors to your event. Whether it’s a wedding, engagement party, corporate event, festival, or any other venue, we are ready to provide you an unforgettable experience.
        </p>
        <div className="relative w-full max-w-4xl">
          <img
            src="/catering.jpg"
            alt="Catering BBQ"
            className="rounded-[12px] object-cover w-full h-96"
          />
          {/* Navigation Arrows */}
          <button className="flex items-center justify-center absolute w-14 h-14 top-1/2 -left-7 transform -translate-y-1/2 bg-primary text-white rounded-[10px] p-2 shadow-md">
            <img src="/arrow-left.svg" alt="Arrow" className="w-8 h-8" />
          </button>
          <button className="flex items-center justify-center absolute w-14 h-14 top-1/2 -right-7 transform -translate-y-1/2 bg-primary text-white rounded-[10px] p-2 shadow-md">
            <img src="/arrow-right.svg" alt="Arrow" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
