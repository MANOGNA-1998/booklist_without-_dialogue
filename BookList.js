import { useQuery,useState } from '@apollo/client';
import { getBooksQuery ,getBookQuery} from '../queries/queries'
import React, { Component } from 'react';

//import components
import BookDetails from './BookDetails'



const DisplayBooks = ( loading, error, data, selectBook,setColorfunc,setmodalfunc) => 
{
  
    if (loading) return <p>Loading....</p>;
    if (error) return <p>Something went wrong</p>;
    
    return data.books.map(book => {
      return (
        
      
        <li id={book.id} key={book.id} onClick={() => {
          selectBook(book.id);
           setColorfunc(book.id);
          setmodalfunc();
          
         // window.location.reload(false)
          
        } 
        }>
          {book.name}
        </li>
          
      );
    });
 
  
  };
  

  
  function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);
    const [selected, setSelected] = useState(null);
    const [oldcolor,setoldcolor] = useState(null);
    const [modalIsOpen, setmodalIsOpen] = useState(false)


    const selectBook = (id) =>{
       setSelected(id);

    };
    
   


    const setColorfunc = (col)=> {

      
      var property = document.getElementById(col);
     
      setoldcolor (property);
      

      
     property.style.backgroundColor="#7FFF00";
     
     console.log('hello');
    };



    const setmodalfunc =()=>{
      setmodalIsOpen(true);
      }
 
    
    return (
    
      <div >
        <ul id='book-list'>
         
        {DisplayBooks(loading,error,data,selectBook,setColorfunc,setmodalfunc)}
          
          
         
        </ul>
        
        <BookDetails bookId={selected} modalIsOpen={modalIsOpen} setmodalIsOpen={setmodalIsOpen}/>
       
        

        
      </div>
      
    );
    
   
  }

export default BookList;