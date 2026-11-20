import HomeView from "./HomeView";
import { getProjects } from "./projects/content";

// Server component: reads project front matter from content/projects at
// build time and hands it to the client-side page.
export default function Home() {
  return <HomeView projects={getProjects()} />;
}
