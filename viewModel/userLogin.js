import { isAuthenticated } from "../model/server/auth.js"

export function userAdmin(){
    if(isAuthenticated()) {
        return 'admin'
    }
    return 'user'
}