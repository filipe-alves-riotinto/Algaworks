import { Post } from "../@types";
import Service from "../Service";

class PostService extends Service {
    static getAllPosts () {
        return this.Http
            .get<Post.Paginated>('/posts')
            .then(this.getData)
    }
}

export default PostService