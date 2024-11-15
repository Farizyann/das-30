export interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IReactions;
    views: number;
    userId: number;
}

export interface IReactions {
    likes: number;
    dislikes: number;
}

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    phone: string,
    username: string,
    image: string
}

export interface IComment {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: IUserComment;
}

export interface IUserComment {
    id: number;
    username: string;
    fullName: string;
}
