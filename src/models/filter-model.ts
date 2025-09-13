import { PodcastModel } from "./podcast-model";

export interface TransferModelCast {
    statusCode: number;
    body: PodcastModel[];
}