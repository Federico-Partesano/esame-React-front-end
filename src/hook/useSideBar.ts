import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../redux/reducers";
import { toogle } from "../redux/reducers/sidebar";

export const useSideBar = () => {
    const sidebar = useSelector(({sidebar}: RootReducer) => sidebar);
    const dispatch = useDispatch();

    useEffect(() => {
     console.log('toggle', sidebar);
    }, [sidebar]);
    

    const toogleSideBar = () => {
        dispatch(toogle());
    }

    return [sidebar,toogleSideBar] as const;
}