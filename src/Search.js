import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";
import BookCategory from './BookCategory';
import './App.css';

class Search extends Component {


    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            searchBooksResults: []
        };
    }

    updateSearchTerm = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.searchTerm !== prevState.searchTerm) {
            if (this.state.searchTerm === "") {
                this.setState({searchBooksResults: []})
                return
            }
            BooksAPI.search(this.state.searchTerm)
                .then((result) => {
                    result.length > 0 ? this.setState({searchBooksResults: result}) : this.setState({searchBooksResults: []})

                })
                .catch((err) => {
                    console.log('error', err);
                });
        }
    }

    render() {

        const {
            searchBooksResults
        } = this.state;

        const {
            changeCategory,
            books
        } = this.props;


        return (

            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"/>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            name="searchbar"
                            onChange={this.updateSearchTerm}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookCategory
                        bookList={searchBooksResults}
                        categoryTitle={"Found Books: "}
                        changeCategory={changeCategory}
                        books={books}
                    />
                </div>
            </div>
        );
    }
}

export default Search;