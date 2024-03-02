"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDB = exports.db = void 0;
exports.db = {
    posts: [
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
