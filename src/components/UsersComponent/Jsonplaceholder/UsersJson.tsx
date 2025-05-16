import {useEffect, useState} from "react";
import {IUser} from "../../../models/JsonModels/UserModelJ.ts";
import {loadUsers} from "../../../servise/api.servise.jsonplaceholder.tsx";
import {UserJson} from "./UserJson.tsx";

export const UsersJson = () => {
    const [user, setUser] = useState<IUser[]>([])
    useEffect(() => {
        loadUsers().then(value => setUser(value))
    },[])
    return (
        <div>
            {
                user.map(user=> <UserJson user={user} key={user.id}/>)
            }
        </div>
    )
}