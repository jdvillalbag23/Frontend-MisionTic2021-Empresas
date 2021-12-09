import { UserDataModel } from "./user-data.model";

export class SessionDataModel{
    tk? : string;
    datos?: UserDataModel;
    isLoggedIn: boolean = false;
}