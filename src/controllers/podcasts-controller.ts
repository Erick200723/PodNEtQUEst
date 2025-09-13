import { IncomingMessage, ServerResponse } from 'http';

import { serviceListEpisodes } from '../services/list-ep-services';
import { serviceFilterEpisodes } from '../services/filter-ep-services';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';
import { TransferModelCast } from '../models/filter-model';

const DEFAULT_CONTENT = { 'Content-Type': ContentType.JSON }

export const getListEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse) => {

    const content : TransferModelCast = await serviceListEpisodes();

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));
    
    res.end();
};

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse) => {
        
    const content: TransferModelCast = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));

    res.end();
}; 
