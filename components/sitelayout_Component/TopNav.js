import React from 'react'
// import styles from'src/styles/sitelayout_main.module.css';
import SearchBox from './topNav/SearchBar'
import Profile from './topNav/Profile'
function TopNav() {
  return (
    <div>
        <div className="h-screen w-full bg-gray-700 absolute shadow-md opacity-80 z-10 flex flex-row">
          <div className='w-150 h-full border-solid ml-80'>
            
          </div>
          <div className="w-full h-full ml-80 flex justify-end items-center">
            <div className="w-45 h-full flex justify-between">
              <SearchBox />
              <div className="w-15 h-full border-solid border-green">

              </div>
              <Profile />
            </div>
          </div>
        </div>
    </div>
  )
}

export default TopNav