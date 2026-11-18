import { Typography } from "@/components/ui";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative bg-surface/40 dark:bg-surface/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto p-9">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <Typography
            variant="caption_12_400"
            tag="p"
            className="text-text-muted"
          >
            &copy; {currentYear} Pham Le Quoc Phi
          </Typography>
          <Typography
            variant="caption_12_400"
            tag="p"
            className="text-text-muted flex items-center gap-1"
          >
            Software Developer
          </Typography>
        </div>
      </div>
    </footer>
  );
}
