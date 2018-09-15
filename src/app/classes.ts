export abstract class Resource {
    id: number;
    parentId?: number;
  }

export class User extends Resource{
    email?: string;
    password?: string;
    firstname?: string;
    lastname?: string
	friends?: Array<User>;
}

export class Post extends Resource{
    text: string;
    date?: DateConstructor;
    likes: number;
    user: User;
    parent: Post;
}

export class Comment extends Post{
    post_id: number
}