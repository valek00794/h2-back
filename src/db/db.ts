import { DBType } from "../types/db";

export const db: DBType = {
  posts:[
    {
      "id": "1",
      "title": "string1",
      "shortDescription": "string1",
      "content": "string1",
      "blogId": "string1",
      "blogName": "string1"
    },
    {
      "id": "2",
      "title": "string2",
      "shortDescription": "string2",
      "content": "string2",
      "blogId": "string2",
      "blogName": "string2"
    }
  ],
  blogs: [
    {
      "id": "1",
      "name": "string1",
      "description": "string1",
      "websiteUrl": "string1"
    },
    {
      "id": "2",
      "name": "string2",
      "description": "string2",
      "websiteUrl": "string2"
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