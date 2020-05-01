import React from 'react';
import {graphql} from 'react-apollo';
import {GetBooksQuery} from '../queries/queries';
import BookDetails from '../components/BookDetails';


class BookList extends React.Component{

  constructor(props){
    super(props)

    this.state={
      selected:null
    }
  }
  dispalyBooks(){
    const data = this.props.data;
    if(data.loading){
      return(<div>Loading.Please Wait...</div>)
    }else{
      return(
        <div>
          {data.books.map(book=>{
            return(<li key={book.id} 
              onClick={(e)=>{this.setState({selected:book.id})}}>{book.name}</li>)
          })}
        </div>
      )
    }
  }
  render(){
    return(
      <div>
        <ul id="book-lsit">
          <li>Book Name</li>
          {this.dispalyBooks()}
        </ul>

        <BookDetails bookId={this.state.selected}/>
      </div>
    )
  }
}

export default graphql(GetBooksQuery)(BookList);