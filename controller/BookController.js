const express = require("express");
const mongoose = require("mongoose");
const Book = require("../models/Book");
const BookController = {
  /**
   * * GET ALL BOOKS
   */
  getAllBooks: async (req, res) => {
    const id = req.params.id;

    if (!id) {
      const allBooks = await Book.find({});
      return res.status(200).json(allBooks);
    }

    const book = await Book.find({ _id: id });
    return res.status(200).json(book);
  },

  /**
   * * STORE BOOK
   */
  storeBook: (req, res) => {
    const myBook = new Book(req.body);
    myBook
      .save()
      .then(() => {
        res.status(200).send("Successfully Inserted!");
      })
      .catch((err) => {
        res.status(404).send("Something went wrong!");
      });
  },

  /**
   * * UPDATE BOOKS BY ID
   */
  updateBook: (req, res) => {
    const id = req.params.id;

    Book.updateOne({ _id: id }, { $set: req.body })
      .then(() => {
        res.status(200).send("Successfully Updated!");
      })
      .catch((err) => {
        res.status(404).send("Something went wrong!");
      });
  },

  /**
   * *DELETE BOOKS BY ID
   */
  deleteBook: (req,res)=> {
    const id = req.params.id

    Book.deleteOne({ _id: id })
      .then(() => res.send("Successfully Deleted"))
      .catch(() => res.send("Something wrong Happed"));

  },
};

module.exports = BookController;
