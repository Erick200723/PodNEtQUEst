import { TransferModelCast } from "../models/filter-model";
import { repoPodcasts } from "../repositories/podcasts-repo";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<TransferModelCast> => {

    let responseFormat: TransferModelCast = {
        statusCode: 0,
        body: [],
    };
        
    const data = await repoPodcasts();

    responseFormat = {
        statusCode: data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }

    return responseFormat;
};
