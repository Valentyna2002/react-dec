import {IUser, UserModelDummy} from "../model/UserModel.ts";


const userEndpoint =import.meta.env.VITE_API_DUMMY_URL +'/users'+'?skip='


export const loadUsers =async (page:string):Promise<IUser[]> => {
    let skip = 0;
    const limit = 30
    if (+page>0){
         skip=limit*(+page)-limit
    }


        const resUser:UserModelDummy = await fetch(userEndpoint+ skip).then(res => res.json())

        return resUser.users
    }
