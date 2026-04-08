import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <div>
      {/* 상단바 */}
      <header>
        할일 대시보드
        <NavLink
          to='/'
          className={({ isActive }) => {
            return isActive ? "text-blue-600" : "text-gray-500"
          }}
        >목록</NavLink>
        <NavLink
          to='/Settings'
          className={({ isActive }) => {
            return isActive ? "text-blue-600" : "text-gray-500"
          }}
        >설정</NavLink>
        <NavLink
          to='/TodoDetail'
          className={({ isActive }) => {
            return isActive ? "text-blue-600" : "text-gray-500"
          }}
        >상세</NavLink>
      </header>

      {/* 변경될 요소 */}
      <main>
        <Outlet></Outlet>
      </main>

      {/* 하단바 */}
      <footer>
          <NavLink
          to='/'
          className={({ isActive }) => {
            return isActive ? "text-blue-600" : "text-gray-500"
          }}
        >목록</NavLink>
        <NavLink
          to='/Settings'
          className={({ isActive }) => {
            return isActive ? "text-blue-600" : "text-gray-500"
          }}
        >설정</NavLink>
      </footer>
    </div>
  )
}