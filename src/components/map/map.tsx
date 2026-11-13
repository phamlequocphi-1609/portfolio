import { MapPin } from "lucide-react";
import { memo } from "react";
import { Typography } from "../ui";
import { DETAILED_ADDRESS, MAP_EMBED_URL } from "@/constants/contact";

export const Map = memo(() => {
  return (
    <div className="relative z-10 flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-9 h-9 rounded-xl border border-border/80 bg-elevated/60 dark:bg-elevated/40 flex items-center justify-center text-accent shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Typography variant="title_16_600" tag="h3" className="text-head">
                Where I live
              </Typography>
            </div>
            <Typography
              variant="caption_12_400"
              tag="p"
              className="text-text-muted mt-0.5"
            >
              {DETAILED_ADDRESS}
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden border border-border/80 bg-elevated/30 shadow-inner group">
        <iframe
          title="Location Map"
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter transition-all duration-500 dark:invert-[0.93] dark:hue-rotate-180 dark:contrast-[0.88] dark:brightness-[0.92] dark:saturate-[0.85] group-hover:dark:brightness-100"
        />
      </div>
    </div>
  );
});

Map.displayName = "Map";
