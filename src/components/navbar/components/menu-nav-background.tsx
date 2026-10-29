interface MenuNavBackgroundProps {
  isDarkMenu: boolean;
}

export function MenuNavBackground({ isDarkMenu }: MenuNavBackgroundProps) {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        className={`absolute -top-32 -right-32 h-[560px] w-[560px] rounded-full blur-[140px] pointer-events-none transition-opacity duration-700 ${
          isDarkMenu ? "bg-accent/15 opacity-60" : "bg-accent/10 opacity-50"
        }`}
      />
      <div
        className={`absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full blur-[160px] pointer-events-none transition-opacity duration-700 ${
          isDarkMenu ? "bg-mint/10 opacity-50" : "bg-mint/10 opacity-40"
        }`}
      />
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mint/30 to-transparent" />
    </div>
  );
}
