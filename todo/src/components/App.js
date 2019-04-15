import React from 'react'
import Footer from './Footer'
import AddTodo from '../containters/AddTodo';
import VisibleTodoList from '../containters/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
