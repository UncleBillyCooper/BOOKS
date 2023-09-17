import React from "react";
import { useDispatch/*, useSelector*/} from "react-redux";
import { actions } from "../store/slices/currentBookSlice";
import fakeCover from '../images/FakeCover.png'



/*/book/${props.bookCard.volumeInfo.title}/${props.bookCard.volumeInfo.categories}/${props.bookCard.volumeInfo.authors}/${props.bookCard.volumeInfo.description}/${props.bookCard.volumeInfo.imageLinks.thumbnail}*/
function BookItem(props) {
    // const currentBook = useSelector(state=>state.currentBook)
    const dispatch = useDispatch()
    // console.log(currentBook) 

function Selector () {
    document.querySelector('.content-box').style.display = 'none' ;
    document.querySelector('.BookPage').style.display = 'flex';
    document.querySelector('.name-search>input').value = '';
    dispatch(actions.addBook(props))
}

    return(
     
    <div className='card' onClick={Selector}>
        <img src={props.bookCover} alt='какая-то картинка'/>
        <p>{props.bookCategory}</p>
        <div className="bookName__box">
            <h2>{props.bookName}</h2>
        </div>
        <div className="bookName__box">
            <h3>{props.autor}</h3>
        </div>
        
     </div>

       
        
    )

}



export default BookItem;