import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative">
      <Image
        src="/banner_principal.jpg"
        alt="Malbec BBQ"
        className="w-full h-96 object-cover"
      />
    </section>
  );
}
