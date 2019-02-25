import * as _ from "lodash";

export const padLeftDate = (date: number):string => _.padStart(date + '', 2, '0')

