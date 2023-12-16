import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <div className='w-full border-b'>
          <div className='flex wrapper items-center justify-between'>
                  <Link href={"/"} className='w-36'>Logo</Link>

                   <div>
                         <nav className='md:flex-between hidden w-full max-w-xs'>
                              <NavItems/>
                         </nav>
                   </div>

                  <div className='flex w-32 justify-end gap-3'>
                       
                       <div>
                            
                            <MobileNav/>
                       </div>
                      
                         <Button className="rounded-full" asChild size="lg">
                         <Link href={"/signin"}>Signin</Link>
                         </Button>
                         
                       
                  </div>
          </div>

    </div>
  )
}

export default Header