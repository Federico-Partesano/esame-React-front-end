
    export interface User {
        id: string;
        nickname: string;
    }

    export type RespSignIn = {
        user: User;
        token: string;
    }

