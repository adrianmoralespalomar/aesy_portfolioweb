export class CookiesManager {
    static GetCookieValue(cookieKey:string){
        return localStorage.getItem(cookieKey);
    }
    static SetCookieValue(cookieKey:string, cookieValue:string){
        localStorage.setItem(cookieKey, cookieValue);
    }
}