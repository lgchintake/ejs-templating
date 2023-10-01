import express from "express";
import itemCategoryRoute from "./itemcategory.routes.js";

const Router = express();

Router.use("/item-category", itemCategoryRoute);

export default Router;
