"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogsController = void 0;
const db_1 = require("../db/db");
const getBlogsController = (req, res) => {
    res
        .status(200)
        .json(db_1.db.blogs);
};
exports.getBlogsController = getBlogsController;
