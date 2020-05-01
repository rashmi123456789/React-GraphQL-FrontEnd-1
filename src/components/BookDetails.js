import React from 'react';
import {graphql} from 'react-apollo';
import {getBookDetailsQuery} from '../queries/queries';


class BookDetails extends React.Component{

  displayBookDetails(){
    const {book} = this.props.data;
    if(book){
      console.log(book)
      return(
        <div>
          <h3>{book.name}</h3>
          <p>{book.genre}</p>
          <h4>{book.author.name}</h4>
          <h4>All the books of the author</h4>
          <ul>
          {book.author.books.map(b=>{
            return(
            <li key={b.id}>{b.name} - {b.genre}</li>
            );
          })}
          </ul>
        </div>
      )
    }
  }
  render(){
    return(<div>{this.displayBookDetails()}</div>)
  }
}

export default graphql(getBookDetailsQuery,{
  options:(props)=>{
    return{
      variables:{
        id:props.bookId
      }
    }
  }
})(BookDetails);

