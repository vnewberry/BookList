import React, { Component } from "react";
import {Input, Button} from "../components/SearchForm";
import API from "../utils/API";
import BookCard from "../components/BookCard";


class Search extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    description: "",
    image: "",
    link: "",
  };
  
  componentDidMount() {

  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.title);
  };
  
  handleFormSubmit = event => {

    event.preventDefault();
    API.searchBooks(this.state.title)
      .then(res => {
        this.setState({books: res.data.items});
        console.log(
          res.data.items[0].volumeInfo.title, 
          res.data.items[0].volumeInfo.authors, 
          res.data.items[0].volumeInfo.description,
          res.data.items[0].volumeInfo.imageLinks.thumbnail,
          res.data.items[0].volumeInfo.previewLink,
          res.data.items[0].volumeInfo.infoLink);
          
      } )
      .catch(err => console.log(err))


  };
  render() {
    return (
      <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
         <Input
             value={this.state.title}
             onChange={this.handleInputChange}
             name="title"
             placeholder="Book Name (required)"
         />
          <Button
            disabled={!this.state.title}
            onClick={this.handleFormSubmit}/>
        </div>
      </div>
      <BookCard results={this.state.books} />
    </div>
    );
  }
}

export default Search;