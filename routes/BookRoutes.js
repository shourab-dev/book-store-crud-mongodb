const express = require("express");
const BookRouter = express.Router();
const BookController = require("../controller/BookController");

BookRouter.get("/:id?", BookController.getAllBooks);
BookRouter.post("/", BookController.storeBook);
BookRouter.put("/:id", BookController.updateBook);
BookRouter.delete("/:id", BookController.deleteBook);


module.exports = BookRouter;
