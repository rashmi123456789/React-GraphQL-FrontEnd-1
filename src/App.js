import React from "react";
import "./styles.css";
import BookList from "./components/BookList";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import AddBooks from "./components/AddBooks";

const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})
export default function App() {
  return (
    <ApolloProvider client={client}>
    <div className="main">
      <h2>Book List</h2>
      <BookList/>
      <AddBooks/>
    </div>
    </ApolloProvider>
  );
}
