"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsController = void 0;
const db_1 = require("../db/db");
const getPostsController = (req, res) => {
    res
        .status(200)
        .json(db_1.db.posts);
};
exports.getPostsController = getPostsController;
