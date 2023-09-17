import React, { useState, useEffect } from 'react';
import Cover from "../images/FakeCover.png"
import { useSelector} from "react-redux";
import { actions } from "../store/slices/currentBookSlice";

function BookItem(props) {
    const currentBook = useSelector(state=>state.currentBook[0]);
    console.log(currentBook)

    
    
    const [cover, setCover] = useState(Cover);
    const [category, setCategory] = useState('категория');
    const [name, setName] = useState('название');
    const [autor, setAutor] = useState('Автор');
    const [description, setDescription] = useState('Описание');

    

    useEffect(() => {
        setCover(currentBook&&currentBook.bookCover);
        setCategory(currentBook&&currentBook.bookCategory);
        setName(currentBook&&currentBook.bookName);
        setAutor(currentBook&&currentBook.autor);
        setDescription(currentBook&&currentBook.bookDesc)
      });

    function Selector () {
        document.querySelector('.content-box').style.display = 'flex' ;
        document.querySelector('.BookPage').style.display = 'none' ;
               
    }

    return(
        

    <div className='BookPage'>
    <div className="BookPage__card">
        {/* <img src={currentBook.bookCover || Cover} alt="какая-то картинка"/> */}
        <img src={cover} alt="какая-то картинка"/>
    </div>
    
    <div className="text-content">
    <h4>{category}</h4>
        <h2>{name}</h2>
        <h3>{autor}</h3>
        <div className="BookPage__description">
        <p>{description}</p>
        </div>
        <button onClick={Selector}>На главную</button>
        
    </div>
    </div>

       
        
    )

};



export default BookItem;