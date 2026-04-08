import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import React from 'react'
import Layout from './components/Layout'
import TodoList from './pages/TodoList'
import Settings from './pages/Settings'
import TodoDetail from './pages/TodoDetail'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<TodoList />}/>
          <Route path='/Settings' element={<Settings />}/>
          <Route path='/TodoDetail' element={<TodoDetail />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}