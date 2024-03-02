import { Request, Response } from 'express'
import { db } from '../db/db'
import { PostViewModel } from '../types/post'

export const getPostsController = (req: Request, res: Response<PostViewModel[]>) => {
    res
    .status(200)
    .json(db.posts)
}