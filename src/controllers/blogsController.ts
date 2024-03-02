import { Request, Response } from 'express'
import { db } from '../db/db'
import { BlogViewModel } from '../types/blog'

export const getBlogsController = (req: Request, res: Response<BlogViewModel[]>) => {
    res
    .status(200)
    .json(db.blogs)
}