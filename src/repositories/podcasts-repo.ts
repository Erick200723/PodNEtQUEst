import * as fs from "fs";
import * as path from "path";

import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodcasts = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const language = "utf-8";

  const rawData = await fs.promises.readFile(pathData, language); // <-- async
  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: PodcastModel) => podcast.podcastName === podcastName
    );
  }

  return jsonFile;
};