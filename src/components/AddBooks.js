import React from 'react';
import {graphql} from '@apollo/react-hoc';
import {compose} from 'recompose';
import {getAuthorsQuery,addBookMutation,GetBooksQuery} from '../queries/queries';


class AddBooks extends React.Component{

  constructor(props){
    super(props);

    this.state={
      name:"",
      genre:"",
      authorId:""
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

  }

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitForm(e){
    e.preventDefault();
    this.props.addBookMutation({
      variables:{
        name:this.state.name,
        genre:this.state.genre,
        authorId:this.state.authorId
      },
      refetchQueries:[{query:GetBooksQuery}]
    });
  }

  displayAuthors(){
    const data = this.props.getAuthorsQuery;
    if(data.loading){
      return(<option disabled>Please Wait...</option>)
    }else{
      return(
        data.authors.map(author=>{
          return <option key={author.id} value={author.id}>{author.name}</option>
        })
      )
    }
  }

  render(){
    return(
      <form onSubmit={this.submitForm}>
        <label>Book Name</label>
        <input name="name" onChange={this.handleChange} type="text"/>
        <br/>

        <label>Genre</label>
        <input name="genre" onChange={this.handleChange} type="text"/>
        <br/>

        <label>Author</label>
        <select name="authorId" onChange={this.handleChange}>
          <option>Select Author</option>
          {this.displayAuthors()}
        </select>
        <br/>

        <button>+</button>
      </form>

    );
  }
}

export default compose(
  graphql(GetBooksQuery,{name:"GetBooksQuery"}),
  graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
  graphql(addBookMutation,{name:"addBookMutation"}))(AddBooks);