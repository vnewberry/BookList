const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    const url ="https://www.googleapis.com/books/v1/volumes"
    axios
      .get(url, {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      .then(res =>
        db.Book.find().then(dbBooks =>
          res.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};