export interface User {
    id:number;
    profile_data: {
        username:string,
        profile_description:string,
        profile_image:string
    },
    account_data: {
        login:string,
        password:string,
        data_created:string
    }
}