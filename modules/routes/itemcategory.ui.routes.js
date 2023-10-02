import express from "express";
import { getUiCategoryList } from "../controller/itemcategory.controller.js";

const itemCategoryUiRouter = express();

itemCategoryUiRouter.route("/").get(getUiCategoryList);

export default itemCategoryUiRouter;
