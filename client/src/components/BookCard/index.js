import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class BookCard extends Component {
  state = {
    savedBooks: [],

    
  };

  handleSave = (result) => {
    // API.saveBook();
    console.log(result);
  }
  componentDidMount() {
    API.getBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

  sa = (book) => {
    if (this.state.savedBooks.map((book) => book._id).includes(book._id)) {
      API.deleteBook(book._id)
        .then((deletedBook) =>
          this.setState({
            savedBooks: this.state.savedBooks.filter(
              (book) => book._id !== deletedBook._id
            ),
          })
        )
        .catch((err) => console.error(err));
    } else {
      API.saveBook(book)
        .then((savedBook) =>
          this.setState({
            savedBooks: this.state.savedBooks.concat([savedBook]),
          })
        )
        .catch((err) => console.error(err));
    }
  };
  

  render() {
    return (
      <div>
        {this.props.noMatch ? (
          <h1 className="text-center">No Results to Display</h1>
        ) : (
          <div>
            {this.props.books.map((result, i) => (
              <div className="card mb-3" key={i}>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      alt={result.volumeInfo.title}
                      className="img-fluid"
                      src={
                        // {result.volumeInfo.imageLinks ? (
                          result.volumeInfo.imageLinks.thumbnail
//                           ) : ("https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6")
// // cant get this thing to work right
//                       }
                    }
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">
                        {result.volumeInfo.title} by {result.volumeInfo.authors}
                      </h5>
                      <p className="card-text">
                        {result.volumeInfo.description}
                      </p>
                      <div>
                        <a
                          href={result.volumeInfo.previewLink}
                          className="btn badge-pill btn-outline-dark mt-3"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                        <button
                          onClick={() => this.handleSave(result)}
                          className="btn badge-pill btn-outline-dark mt-3"
                        >
                          {/* {this.state.savedBooks
                            .map((book) => book._id)
                            .includes(result._id)
                            ? "Unsave"
                            : "Save"} */}
                          save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default BookCard;
