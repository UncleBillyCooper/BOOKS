import React, { useState } from 'react';
import './App.css';
import './styles/BookAbout.css'
import { useDispatch, useSelector} from "react-redux";
import { actions } from "./store/slices/booksArr";


import Book from './components/book';
import Lupa from './images/lupa.png';
import BookAbout from './components/aboutBook';

function App() {
  
  const ArrayBOOKS = useSelector(state=>state.arrayBooks)
  const dispatch = useDispatch()
  // console.log(ArrayBOOKS)

  const [nameBook, setNameBook] = useState('');
  const [catagoryBook, setCategoryBook] = useState('');
  const [sortBook, setSortBook] = useState('relevance');
  // const [books, setBooks] = useState({});
  // const [totalResult, setTotalResult] = useState(0);
  const [startIndex, setStartIndex] = useState(1);

    function clearing () {
      dispatch(actions.removeBooks())
    }

    function getBooks () {
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${nameBook}+subject:${catagoryBook}&orderBy=${sortBook}&maxResults=30&startIndex=${startIndex}&key=AIzaSyA6hxjxZ79gS4TDP7_NhzFqNxMWQ6QNrQA`, requestOptions)
        .then(response => response.json())
        .then(
          (result) => {           
            // setTotalResult(result.totalItems);
            dispatch(actions.addToArrBooks(result.items));
            console.log(result.items.length);
            if (result.items.length % 30 !==0 || result.items.length === 0) {
              document.querySelector('.content-box > button').style.display = 'none';
              document.querySelector('.content-box > h2').style.display = 'block';
              setStartIndex(1)
            } else {
              document.querySelector('.content-box > button').style.display = 'block';
              document.querySelector('.content-box > h2').style.display = 'none'
            }           
          })
        
        .catch(error => console.log('error', error));
      
      if (document.querySelector('.content-box').style.display === 'none') {
        document.querySelector('.content-box').style.display = 'flex';
        document.querySelector('.BookPage').style.display = 'none';
      };

      
        
    };

    async function start () {
      await clearing();
      
      await getBooks();
      await setStartIndex(startIndex + 30);
    };

    async function oneMoreStart () {
      await getBooks();
      await setStartIndex(startIndex + 30);
      
    };

    

    

  return (
    <div className="App">
      <header className="header">
      <h1>НАЙТИ КНИГУ</h1>
      <div className="name-search">
        <input
          type="search"
          placeholder="введите название или часть названия книги"
          onChange={(event)=>{setNameBook(event.target.value)}}
        />
        <img src={Lupa} alt="иконка" />
      </div>
      <div className="aditional-options">
        <div className="category">
          <label htmlFor="books-category">Категория: </label>
          <select type="search" name="books-category" defaultValue="all" onChange={(event)=>{setCategoryBook(event.target.value)}}>
            <option value=" " >все категории</option>
            <option value="art">искусство</option>
            <option value="biography">биография</option>
            <option value="computers">компьютеры и программирование</option>
            <option value="history">история</option>
            <option value="medical">медицина</option>
            <option value="poetry">поэзия</option>
          </select>
        </div>
        <div className="sorting">
          <label htmlFor="books-sorting">Сортировка по: </label>
          <select type="search" name="books-sorting" defaultValue="relevance" onChange={(event)=>{setSortBook(event.target.value)}}>
            <option value="relevance" >значимости</option>
            <option value="newest">новинкам</option>
          </select>
        </div>
      </div>
      <button className="btn-submit" onClick={start}>Начать поиск</button>
    </header>
    <div className='content-box'>
    
    <h2>Поиск завершен. По Вашему запросу найдено: {Object.keys(ArrayBOOKS).length} книг</h2>
    <div className='card-list'>
    
    {Object.keys(ArrayBOOKS).length === 0 ? <h3>Список пуст</h3> : ArrayBOOKS.map(ArrayBOOK => <Book bookCover={ArrayBOOK.coverB} autor={ArrayBOOK.authorB} bookName={ArrayBOOK.nameB} bookCategory={ArrayBOOK.catagoryB} bookDesc={ArrayBOOK.description} bookID={ArrayBOOK.id} key={ArrayBOOK.id+Math.random()}/>)}
    
    </div>
    <button onClick={oneMoreStart}>Загрузить еще</button>
    </div>
    <BookAbout/>
   </div>
  )
}

export default App;
