import {IResponseDao} from "@/services/response"
import { IEntity } from "@/services/entity/entity";

export interface IStardardTablePagination{
    total:number,
    pageSize:number,
    current:number
}
export interface IStardardTableProxy{
    query:(param:IStardardTablePagination)=>Promise<IResponseDao>,
    queryById:(id:number)=>Promise<IResponseDao>,
    update:(entity:IEntity)=>Promise<IResponseDao>,
    insert:(entity:IEntity)=>Promise<IResponseDao>,
    delete:(id:number)=>Promise<IResponseDao>
}