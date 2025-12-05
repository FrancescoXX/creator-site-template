import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const configPath = path.join(process.cwd(), "config", "modules.json");
    const configData = fs.readFileSync(configPath, "utf-8");
    const config = JSON.parse(configData);

    const podcastLinksPath = path.join(
      process.cwd(),
      "config",
      "podcastLinks.json"
    );

    if (fs.existsSync(podcastLinksPath)) {
      const podcastLinksData = fs.readFileSync(podcastLinksPath, "utf-8");
      const links = JSON.parse(podcastLinksData);

      if (Array.isArray(links) && config?.modules?.podcastEpisodes) {
        const baseDate = new Date("2024-01-01T00:00:00Z");
        const episodes = links.map((url: string, idx: number) => ({
          title: `Episode ${idx + 1}`,
          date: new Date(
            baseDate.getTime() + (links.length - idx) * 86400000
          ).toISOString(),
          url,
        }));

        config.modules.podcastEpisodes.episodeLinks = links;
        config.modules.podcastEpisodes.episodes = episodes;
      }
    }

    return NextResponse.json(config);
  } catch (error) {
    console.error("Error loading config:", error);
    return NextResponse.json(
      { error: "Failed to load configuration" },
      { status: 500 }
    );
  }
}

