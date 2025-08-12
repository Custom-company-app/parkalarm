import nl from "@/content/nl.json";
import en from "@/content/en.json";

export type Locale = "nl" | "en";

export async function getContent(locale: Locale) {
  switch (locale) {
    case "en":
      return en as any;
    case "nl":
    default:
      return nl as any;
  }
}
