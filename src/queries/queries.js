import {gql} from 'apollo-boost';

export const GetBooksQuery =gql`
{
  books{
    name,
    id
  }
}
`

export const getAuthorsQuery =gql`{
  authors{
    name,
    id
  }
}
`

export const addBookMutation = gql`
mutation($name:String!,$genre:String!,$authorId:String!){
  addBook(name:$name,genre:$genre,authorId:$authorId){
    name,
    id
  }
}
`

export const getBookDetailsQuery= gql`
query($id:ID){
  book(id:$id){
    name,
    genre,
    author{
      name,
      age,
      id,
      books{
        name,
        genre,
        id
      }
    }
  }
}
`