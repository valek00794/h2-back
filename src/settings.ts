import {config} from 'dotenv'
config()
 
export const SETTINGS = {
    PORT: process.env.PORT || 3000,
    PATH: {
        posts: '/posts',
        blogs: '/blogs',
    }
}
