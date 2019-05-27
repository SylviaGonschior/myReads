import React, {Component} from 'react';
import BookShelfChanger from "./BookShelfChanger";


class BookItem extends Component {


    componentDidMount() {
        const {
            book
        } = this.props;

        this.setState({shelf: book.shelf});

    }

    render() {

        const {
            book,
            booksWithShelf,
            changeBookShelf
        } = this.props;



        const bookUrl = book.imageLinks ? book.imageLinks.thumbnail : "";

        return (

            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: "url(" + bookUrl + ")"
                        }}></div>
                    <BookShelfChanger
                        book={book}
                        booksWithShelf={booksWithShelf}
                        changeBookShelf={changeBookShelf}
                    />
                </div>
                <div className="book-authors">{book.authors}</div>
                <div className="book-title">{book.title}</div>
            </div>
        )
    }

}

export default BookItem;