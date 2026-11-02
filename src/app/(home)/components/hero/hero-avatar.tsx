import Image from "next/image";

export const HeroAvatar = () => {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[310px] lg:max-w-[335px] mx-auto">
      <div className="relative rounded-3xl p-2 sm:p-2.5 bg-surface border border-border shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1">
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-elevated">
          <Image
            src="/avt_phi.jpg"
            alt="Pham Le Quoc Phi - Frontend Developer"
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover scale-[1.65] origin-[50%_72%] transition-transform duration-700 ease-out hover:scale-[1.7]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
