import { StaticHtmlPage } from "@/components/StaticHtmlPage";
import { topPage } from "@/content/top";

export default function HomePage() {
  return <StaticHtmlPage page={topPage} contactLinks />;
}
