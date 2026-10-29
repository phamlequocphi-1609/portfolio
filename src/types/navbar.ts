export type Language = "VI" | "EN";
export type ThemeColor = "dark" | "light";

export interface NavItem {
  title: string;
  href: string;
  number: string;
  description?: string;
}
