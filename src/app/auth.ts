import { Service } from '@angular/core';

@Service()
export class Auth {
    static isLoggedIn = false;
    static username = "admin";
    static password = "admin123";

    doLogin(username:string, password:string): boolean{
        if(username === Auth.username && password === Auth.password){
            Auth.isLoggedIn = true;
            return true;
        } else{
            Auth.isLoggedIn = false;
            return false;
        }
    }

    doLogout(){
        Auth.isLoggedIn = false;
    }
}
