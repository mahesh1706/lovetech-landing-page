import stfrancis from '@/assets/partners/stfrancis.jpeg';
import vivekananda from '@/assets/partners/vivekananda.jpeg';
import mewa from '@/assets/partners/mewa.png';
import akshara from '@/assets/partners/akshara.png';
import rvnssmrv from '@/assets/partners/rvnssmrv.jpg';

const Partners = () => {
  const logos = [
    { src: stfrancis, alt: 'St. Francis College' },
    { src: vivekananda, alt: 'Swamy Vivekananda Rural First Grade College' },
    { src: mewa, alt: 'MEWA - Vanguard Business School' },
    { src: akshara, alt: 'Akshara College' },
    { src: rvnssmrv, alt: 'R V N SSMRV College' },
  ];

  return (
    <section id="partners" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          We Partnered With These Colleges
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex gap-12 animate-scroll">
            {logos.concat(logos).map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 lg:h-20 object-contain select-none opacity-90 hover:opacity-100 transition-opacity"
                draggable={false}
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;


