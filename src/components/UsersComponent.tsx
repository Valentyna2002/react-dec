import {useEffect, useState} from "react";
import {IUser} from "../model/UserModel.ts";
import {loadUsers} from "../service/api.tsx";
import {UserComponent} from "./UserComponent.tsx";
import {useSearchParams} from "react-router-dom";

export const UsersComponent = () => {
    const [searchParams]=useSearchParams({page:'1'})

    const [user, setUser] = useState<IUser[]>([])
    useEffect(()=>{
       const currentPage =  searchParams.get('page') || '1'
        loadUsers(currentPage).then(value=>setUser(value))
    },[searchParams])

    return (
        <div>
            {
                user.map(user=><UserComponent user={user} key={user.id}/>)
            }
        </div>
    )
}