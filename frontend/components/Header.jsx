"use client"
import React from 'react'
import Lottie from 'react-lottie-player'
import logo from '../assets/logo.json'
import Link from 'next/link'
import { Button } from './ui/button'
const Header = () => {
  return (
    <div className='pt-5'>
      <header className="">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <Link href={'/'}>
      <div 
      
      className="flex-1 md:flex md:items-center md:gap-12">
      <Lottie
      loop
      animationData={logo}
      play
      style={{ width: 100, height: 100 }}
      />
        
      </div>
      </Link>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="block">
          <ul className="flex items-center gap-6 text-md font-bold">
            <li>
                <Link href={'/posts'}>
            <Button variant="secondary">
                All Blogs
            </Button>
      </Link>
            </li>

            
          </ul>
        </nav>

        
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Header
