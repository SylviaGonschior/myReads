import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookCategory from './BookCategory';
import {Route, Link} from 'react-router-dom';
import Search from './Search';
import {createHashHistory} from "history";

class BooksApp extends React.Component {
    state = {
        books: [],
        hover: false
    };

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) =>
                this.setState({
                    books
                })
            )
    };

    changeCategory = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(() => {
                BooksAPI.getAll()
                    .then((books) => {
                        this.setState({books});
                    })
            })
    };

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    };

    changeCategorySearch = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(() => {
                BooksAPI.getAll()
                    .then((books) => {
                        this.setState({books});
                    })
                    .then(this.onNavigate)
            })
    };

    onNavigate() {
        const history = createHashHistory();
        history.goBack();
    };

    render() {

        const {
            books
        } = this.state;

        const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
        const wantToRead = books.filter((book) => book.shelf === "wantToRead");
        const read = books.filter((book) => book.shelf === "read");
        const sortedBooks = books;

        return (
            <div className="app">
                <Route
                    path="/search"
                    render={() => (
                            <Search
                                changeCategory={(book, shelf) =>
                                    this.changeCategorySearch(book, shelf)
                                }
                                books={sortedBooks}
                            />
                    )}
                />

                <Route exact path="/"
                       render={() => (
                           <div className="list-books">
                               <div className="list-books-title">
                                   <h1>MyReads</h1>
                               </div>
                               <div className="list-books-content">
                                   <div>
                                       <BookCategory
                                           bookList={currentlyReading}
                                           categoryTitle={"Currently Reading"}
                                           changeCategory={(book, shelf) =>
                                               this.changeCategory(book, shelf)
                                           }
                                           books={sortedBooks}
                                       />
                                       <BookCategory
                                           bookList={wantToRead}
                                           categoryTitle={"Want to Read"}
                                           changeCategory={(book, shelf) =>
                                               this.changeCategory(book, shelf)
                                           }
                                           books={sortedBooks}
                                       />
                                       <BookCategory
                                           bookList={read}
                                           categoryTitle={"Read"}
                                           changeCategory={(book, shelf) =>
                                               this.changeCategory(book, shelf)
                                           }
                                           books={sortedBooks}
                                       />

                                   </div>
                               </div>
                               <div className="open-search">
                                   <Link to="/search">
                                       <button
                                           className={this.state.hover ? "open-search hover" : "open-search"}
                                           onMouseEnter={this.toggleHover}
                                           onMouseLeave={this.toggleHover}
                                       >
                                       </button>
                                   </Link>
                               </div>
                           </div>
                       )}
                />
            </div>


        );
    }
}

export default BooksApp;
