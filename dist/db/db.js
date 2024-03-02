"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDB = exports.db = void 0;
exports.db = {
    posts: [
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
};
const setDB = (dataset) => {
    if (!dataset) {
        exports.db.posts = [];
        exports.db.blogs = [];
        return;
    }
    exports.db.posts = dataset.posts || exports.db.posts;
    exports.db.blogs = dataset.blogs || exports.db.blogs;
};
exports.setDB = setDB;
