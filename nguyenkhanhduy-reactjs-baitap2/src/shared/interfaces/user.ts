import { Contact } from './contact';
export interface User{
    id: string,
    createdAt?: Date,
    email: string,
    password: string,
    contacts?:  Contact[]
}