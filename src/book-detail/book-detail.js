import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  constructor(props){
    super(props);
  }
  render(){
    if(!this.props.book){
      return <div>Please Select A Book</div>
    }
    return(
      <div className="col-md-8">
        <h3>{this.props.book.title}</h3>
        <p>Pages Number: {this.props.book.pages}</p>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    book: state.activeBookReducer
  }
}
export default connect(mapStateToProps)(BookDetail);
