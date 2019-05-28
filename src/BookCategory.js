import React, {Component} from 'react';
import BookItem from './BookItem';
import "./App.css";
import PropTypes from 'prop-types';


class BookCategory extends Component {

    static propTypes = {
        bookList: PropTypes.array.isRequired,
        categoryTitle: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        changeCategory: PropTypes.func.isRequired

    };

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