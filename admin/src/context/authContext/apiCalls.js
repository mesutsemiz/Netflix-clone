import axios from "axois";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async(user, dispatch)=>{
    dispatch(loginStart);
    try {
        const res = axios.get("auth/login", user);
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}