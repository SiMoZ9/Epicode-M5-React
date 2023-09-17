/*
  I componenti funzione non hanno bisogno di metodi render
  La manipolazione dello stato è rilegata agli hooks e allo useState

*/

import React from'react';
import LifeCycles from './components/lifeCycles/LifeCycles';
import MainLayout from "./Layouts/MainLayout";
import {PostContext} from "./context/BooksContext";
import BookCard from "./components/card/BookCard";

function App() {
  return (
      <PostContext>
        <BookCard/>
      </PostContext>
  )
}

export default App;
