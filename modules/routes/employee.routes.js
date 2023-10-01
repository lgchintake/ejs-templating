import express from "express";
import {
  employeeList,
  getEmployees,
  saveEmployees,
  test,
} from "../controller/employee.controller.js";

const employeeRouter = express();

employeeRouter.route("/").get(getEmployees);
employeeRouter.route("/").post(saveEmployees);
employeeRouter.route("/test").get(test);
employeeRouter.route("/empList").get(employeeList);

export default employeeRouter;
