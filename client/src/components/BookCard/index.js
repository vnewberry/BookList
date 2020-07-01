import React from "react";
import axios from "axios";
import "./style.css";




function BookCard(props) {
    console.log(props.results);

    const saveBook = (i) => {
        let choice = props.results[i].volumeInfo;
        axios.post("/api/books", choice)
        .then (res => console.log(res))
        .catch (err => console.log(err));
    }

  

    return props.results ? (
        <>
            {props.results.map(({ volumeInfo }, i) => {
                return (<div key={i}>
                    <h1>{volumeInfo.title}</h1>
                    <h2>{volumeInfo.authors}</h2>
                    <img src={volumeInfo.imageLinks.thumbnail} alt="book" />
                    <p>{volumeInfo.description}</p>
                    <span>
                        <a href={volumeInfo.previewLink}><span>Preview Link </span></a>| 
                        <a href={volumeInfo.infoLink}><span> Info Link </span></a>| 
                        <span onClick={() => saveBook(i)}> Save</span>
                    </span>
                    
                </div>)
            })}

        </>

    ) : null;
}

export default BookCard;

