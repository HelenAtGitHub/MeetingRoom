import {IStardardTableProxy, IStardardTablePagination} from "@/components/StandardTable/data" 
import { IResponseDao } from "./response";
import request from "umi-request";
import { IEntity } from "./entity/entity";

class User implements IStardardTableProxy{
    
    query(param:IStardardTablePagination):Promise<IResponseDao>{
        console.log(param);
        return request<IResponseDao>('/api/users');
    }
    queryById(id:number):Promise<IResponseDao>{
        return request<IResponseDao>('/api/user/'+id);
    }
    update(entity:IEntity):Promise<IResponseDao>{
        return request<IResponseDao>('/api/user',{
            method:"PUT",data:entity
        });
    }
    insert(entity:IEntity):Promise<IResponseDao>{
        return request<IResponseDao>('/api/user',{
            method:"POST",data:entity
        });
    }
    delete(id:number):Promise<IResponseDao>{
        return request<IResponseDao>('/api/user/'+id,{
            method:"DELETE"
        });
    }
}

export default new User();