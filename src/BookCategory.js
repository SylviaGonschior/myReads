import React, {Component} from 'react';
import BookItem from './BookItem';
import "./App.css";


class BookCategory extends Component {

    render() {

        const {
            bookList,
            categoryTitle,
            books,
            changeCategory
        } = this.props;

        return (

        <div className="bookshelf">
            <h1 className="bookshelf-title">{categoryTitle}</h1>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookList.map((book, index) => {
                        return (
                            <BookItem
                                key={index}
                                book={book}
                                books={books}
                                changeCategory={changeCategory}/>
                        );
                    })
                    }
                </ol>
            </div>
        </div>
    )
    }

}

export default BookCategory;