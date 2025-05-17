import {useEffect, useState} from "react";
import {IUsersDummy} from "../../../models/DummyModels/UserModel.ts";
import {loadUsersDummyJson} from "../../../servise/api.servise.dummyjson.tsx";
import {UserDummy} from "./UserDummy.tsx";
import {Outlet} from "react-router";

export const UsersDummy = () => {
    const [user, setUser] = useState<IUsersDummy[]>([])
    useEffect(()=>{
        loadUsersDummyJson().then(value => setUser(value))
    },[])

    return (
        <div>

            <Outlet/>
            <hr/>
            {
                user.map(user => <UserDummy user={user} key={user.id}/>)
            }
        </div>
    )
}