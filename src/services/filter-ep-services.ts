import { IncomingMessage } from "http";
import { repoPodcasts } from "../repositories/podcasts-repo";
import { TransferModelCast } from "../models/filter-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined) : Promise<TransferModelCast> => {

    //retorno interface
    let responseFormat: TransferModelCast = {
        statusCode: 0,
        body: [],
    };

    //busca dados
    const queryString = podcastName?.split("?p=")[1] ||  "";
    const data = await repoPodcasts(queryString);

    responseFormat.statusCode = 
        data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    responseFormat.body = data;

    return responseFormat;
}; 