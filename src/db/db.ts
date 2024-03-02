import { DBType } from "../types/db";

export const db: DBType = {
  posts:[
    {
      "id": "string",
      "title": "string",
      "shortDescription": "string",
      "content": "string",
      "blogId": "string",
      "blogName": "string"
    }
  ],
  blogs: [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "websiteUrl": "string"
    }
  ]
}

export const setDB = (dataset?: Partial<DBType>) => {
  if (!dataset) {
    db.posts =  []
    db.blogs = []
    return
  }

  db.posts = dataset.posts || db.posts
  db.blogs = dataset.blogs || db.blogs
}