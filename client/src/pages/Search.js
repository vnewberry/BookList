import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";


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
  };
  
  handleFormSubmit = event => {

    event.preventDefault();
    API.searchBooks(this.state.title)
      .then(res => {
        this.setState({books: res.data.items});
        // console.log(
        //   res.data.items[0].volumeInfo.title, 
        //   res.data.items[0].volumeInfo.authors, 
        //   res.data.items[0].volumeInfo.description,
        //   res.data.items[0].volumeInfo.imageLinks.thumbnail,
        //   res.data.items[0].volumeInfo.previewLink,
        //   res.data.items[0].volumeInfo.infoLink);
          
      } )
      .catch(err => console.log(err))


  };
  render() {
    return (
     <SearchForm/>
    );
  }
}

export default Search;