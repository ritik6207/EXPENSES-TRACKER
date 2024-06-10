const express = require("express");
const categoryController = require("../controllers/categoryCtrl");
const isAuthenticated = require("../middlewares/isAuth");

const categoryRouter = express.Router();

//! add
categoryRouter.post(
  "/api/v1/categories/create",
  isAuthenticated,
  categoryController.create
);
//! list
categoryRouter.get(
  "/api/v1/categories/lists",
  isAuthenticated,
  categoryController.lists
);
//! update
categoryRouter.put(
  "/api/v1/categories/update/:categoryId",
  isAuthenticated,
  categoryController.update
);
//! delete
categoryRouter.delete(
  "/api/v1/categories/delete/:categoryId",
  isAuthenticated,
  categoryController.delete
);

module.exports = categoryRouter;
