import { UserSession } from "@/models/users";
import { clearUserSession } from "@/store/store";

export function getUserSession(){
    const localStorageUser = localStorage.getItem('userSession');
    return JSON.parse(localStorageUser!) as UserSession;
}

export function logOutSession(){
    localStorage.clear();
}

