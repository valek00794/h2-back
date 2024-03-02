import { BlogViewModel } from "./blog"
import { PostViewModel } from "./post"

export type DBType = {
    posts: PostViewModel[],
    blogs: BlogViewModel[],
}
