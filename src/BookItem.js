import React, {Component} from 'react';
import "./App.css";
import PropTypes from 'prop-types';

class BookItem extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        changeCategory: PropTypes.func.isRequired

    };

    constructor(props) {
        super(props);
        this.state = {
            shelf: ""
        };
    };

    componentDidMount() {

        const {
            book
        } = this.props;

        if (book.shelf) {
            this.setState({shelf: book.shelf});

        }
    };

    componentDidUpdate(prevProps, prevState) {

        const {
            book,
            changeCategory
        } = this.props;

        const {
            shelf
        } = this.state;

        if (shelf !== prevState.shelf) {
                changeCategory(book, shelf);
        }
    };


    setShelf = (event) => {

        this.setState({shelf: event.target.value});
    };


    setValue = () => {

        const {
            books,
            book
        } = this.props;

        let isValueSet = books.find(b => b.id === book.id);

        if (isValueSet) {
            return isValueSet.shelf;
        } else {
            return "none";
        }
    };


    render() {

        const {
            book
        } = this.props;

        const bookUrl = book.imageLinks ? book.imageLinks.thumbnail : "";

        return (

            <li key={book.id}
                className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: "url(" + bookUrl + ")"
                        }}
                    />
                    <div className="book-shelf-changer">
                        <select
                            onChange={this.setShelf}
                            value={this.setValue()}
                        >
                            <option value="move" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-authors">{book.authors}</div>
                <div className="book-title">{book.title}</div>
            </li>
        )
    }

}

export default BookItem;