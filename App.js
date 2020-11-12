import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider  } from '@apollo/client';




//components
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';
//import DeleteBook from './components/DeleteBook';
//import BookDetails from './components/BookDetailswithout';


//apolloclient set up

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
   cache: new InMemoryCache( )
});


function App(){
  
  return (

   <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList/>
        <AddBook/>
        <BookDetails/>
    
     
       
        
      </div>
      </ApolloProvider>
  );
}


export default App;
