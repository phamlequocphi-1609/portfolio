"use client";
import { memo, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { CapabilityCard } from "./capability-card";
import { CapabilityItem } from "@/types/capability";

interface CapabilitiesBarrelProps {
  items: CapabilityItem[];
  autoPlayInterval?: number;
}

interface BarrelSlideItem extends CapabilityItem {
  slideId: string;
}

export const CapabilitiesBarrel = memo(
  ({ items, autoPlayInterval = 3000 }: CapabilitiesBarrelProps) => {
    const displayItems = useMemo<BarrelSlideItem[]>(() => {
      if (!items || items.length === 0) return [];
      const repeatCount = Math.ceil(12 / items.length);

      return Array.from({ length: repeatCount }, (_, i) => i + 1).flatMap(
        (round) =>
          items.map((item) => ({
            ...item,
            slideId: `capability-${item.id}-round-${round}`,
          })),
      );
    }, [items]);

    return (
      <div className="relative w-full py-4 flex items-center justify-center select-none overflow-hidden [perspective:1400px]">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={displayItems.length > 6}
          slidesPerView="auto"
          speed={800}
          autoplay={{
            delay: autoPlayInterval,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: false,
          }}
          coverflowEffect={{
            stretch: 15,
            depth: 160,
            modifier: 1,
          }}
          className="w-full !overflow-visible py-6 [&_.swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next)]:!opacity-0 [&_.swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next)]:!pointer-events-none [&_.swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next)]:!invisible"
        >
          {displayItems.map((item) => (
            <SwiperSlide
              key={item.slideId}
              style={{ width: "275px", height: "355px" }}
              className="!w-[250px] sm:!w-[280px] !h-[330px] sm:!h-[360px] transition-all duration-500 rounded-2xl overflow-hidden"
            >
              {({ isActive, isPrev, isNext }) => {
                const isVisible = isActive || isPrev || isNext;
                return (
                  <div
                    className={`w-full h-full transition-opacity duration-300 ${
                      isVisible
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none invisible"
                    }`}
                  >
                    <CapabilityCard item={item} isActive={isActive} />
                  </div>
                );
              }}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  },
);

CapabilitiesBarrel.displayName = "CapabilitiesBarrel";
