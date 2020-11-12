import Modal from 'react-modal'
import { useQuery,useState } from '@apollo/client';
import { getBookQuery,getBooksQuery } from '../queries/queries'
import BookList from './BookList';
//import './cssModal.css'
Modal.setAppElement('#root')
const displayBookDetails = (loading, data, error,modalIsOpen,setmodalIsOpen) => {


    
    if (loading) return <p>loading...</p>
    if (error) return <p>Something went wrong..</p>
    if (data.book) {
        return (
             <div id="modal-class">
                <Modal isOpen={modalIsOpen} onRequestClose={()=>setmodalIsOpen(false)}
                style={{
    overlay: {
      position: 'fixed',
      top: 5,
      left: 5,
      right: 5,
      bottom: 5,
      backgroundColor: 'gray'
    },
    content: {
      position: 'absolute',
      top: '50px',
      left: '50px',
      right: '50px',
      bottom: '50px',
      border: '1px solid #ccc',
      
      background: '#AD1457',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
      color:'white'
    }
  }} >
                   

                    <h1>Book details</h1>
                    
                    <h2>{data.book.name}</h2>
                    <p>{data.book.genre}</p>
                    <p>{data.book.author.name}</p>
                    <p>all books by the author</p>
                    <ul className="other-books">
                        {
                           data.book.author.books.map(item=>{
                               return <li key={item.id}>{item.name}</li>
                           }) 
                        }
                    </ul>
                    
                    <div>
                        <button id="close" onClick={()=>setmodalIsOpen(false)}>
                           X</button>
                    </div>
                    



                </Modal>
                </div>


            

        )

    }else{
        return(
            <div>
                No data to display..
            </div>
        )
    }
}






function BookDetails(props) {
    const { loading, data, error } = useQuery(getBookQuery, {
        variables: {
            id: props.bookId
        },
        
    });
   let modalIsOpen=props.modalIsOpen;
    let setmodalIsOpen=props.setmodalIsOpen;
    



    return (
        <div id="book-details">
            
          {displayBookDetails(loading, data, error,modalIsOpen,setmodalIsOpen)}
          
            
          
         
     



        </div>


    )
    
}

export default BookDetails;


