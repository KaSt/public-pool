import { IsEnum, IsNumber } from 'class-validator';

import { eRequestMethod } from '../enums/eRequestMethod';

export class StratumBaseMessage {
    //@IsNumber()
    id?: string | number = null;
    @IsEnum(eRequestMethod)
    method: eRequestMethod;
}