import { useContext } from "react";
import { StateContext } from "../state";


export const useUserName = () => {
    const {user, setUser} = useContext(StateContext);
    return user.userName
}
