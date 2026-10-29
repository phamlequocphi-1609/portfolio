import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface MenuHeaderProps {
  onClose: () => void;
}

export const MenuHeader = ({ onClose }: MenuHeaderProps) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-20 pointer-events-none px-6 py-6 sm:px-8 md:px-12 md:py-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-end">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={onClose}
          aria-label="Close menu"
          className="pointer-events-auto group relative flex h-10 w-10 sm:h-11 sm:w-11 cursor-pointer items-center justify-center rounded-2xl border-border bg-surface/90 text-head backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300 hover:border-mint/60 hover:bg-surface/90 hover:text-mint hover:shadow-[0_0_20px_var(--accent-mint)]"
        >
          <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" />
        </Button>
      </div>
    </motion.header>
  );
};
