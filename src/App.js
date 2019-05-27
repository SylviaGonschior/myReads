import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelf from './BookShelf';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    };

    changeBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(() => {
                BooksAPI.getAll()
                    .then((books) => {
                        this.setState({books});
                    })
            })

    };

    render() {

        const {
            books
        } = this.state;

        const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
        const wantToRead = books.filter((book) => book.shelf === "wantToRead");
        const read = books.filter((book) => book.shelf === "read");

        return (
            <div className="app">
                <Route exact path="/"
                       render={() => (
                           <div className="list-books">
                               <div className="list-books-title">
                                   <h1>MyReads</h1>
                               </div>
                               <div className="list-books-content">

                                   <BookShelf
                                       bookList={currentlyReading}
                                       shelfTitle={"Currently Reading"}
                                       changeBookShelf={(book, shelf) =>
                                           this.changeBookShelf(book, shelf)
                                       }
                                       booksWithShelf={books}
                                   />
                                   <BookShelf
                                       bookList={wantToRead}
                                       shelfTitle={"Want to Read"}
                                       changeBookShelf={(book, shelf) =>
                                           this.changeBookShelf(book, shelf)
                                       }
                                       booksWithShelf={books}
                                   />
                                   <BookShelf
                                       bookList={read}
                                       shelfTitle={"Read"}
                                       changeBookShelf={(book, shelf) =>
                                           this.changeBookShelf(book, shelf)
                                       }
                                       booksWithShelf={books}
                                   />

                               </div>
                           </div>
                       )}
                />
            </div>


        );
    }
}

export default BooksApp;
