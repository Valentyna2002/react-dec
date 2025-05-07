import {CharacterComponent} from "../characterComponent/CharacterComponent.tsx";
import {simpsons} from "../../array.ts";

export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value,index) => <CharacterComponent key={index} item={value}>
                    {value.info}
                </CharacterComponent>)
            }
        </div>
    )
}