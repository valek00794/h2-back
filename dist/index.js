"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blogsController_1 = require("./controllers/blogsController");
const postsController_1 = require("./controllers/postsController");
const settings_1 = require("./settings");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(settings_1.SETTINGS.PORT, () => {
    console.log(`Example app listening on port ${settings_1.SETTINGS.PORT}`);
});
app.get(settings_1.SETTINGS.PATH.blogs, blogsController_1.getBlogsController);
app.get(settings_1.SETTINGS.PATH.posts, postsController_1.getPostsController);
app.get(settings_1.SETTINGS.PATH.postsById, postsController_1.findPostController);
app.get(settings_1.SETTINGS.PATH.blogsById, blogsController_1.findBlogController);
app.delete(settings_1.SETTINGS.PATH.postsById, postsController_1.deletePostController);
app.delete(settings_1.SETTINGS.PATH.blogsById, blogsController_1.deleteBlogController);
