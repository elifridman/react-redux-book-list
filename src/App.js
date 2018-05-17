import React, { Component } from 'react';
import BookList  from './book-list/book-list';
import BookDetail  from './book-detail/book-detail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <BookList/>
          <BookDetail/>
        </div>
      </div>
    );
  }
}

export default App;
