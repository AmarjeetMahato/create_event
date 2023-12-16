"use client"
import React from 'react'
import {headerLinks} from "@/constant"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
type Props = {}

const NavItems = (props: Props) => {
    const pathname = usePathname()
  return (
    <ul className='flex md:flex-between w-full flex-col items-start gap-5 md:flex-row'>
           {
            headerLinks&& headerLinks.map((link)=>{
              const isActive = pathname === link.route
              return(
                <>
                    <li className={`${isActive && "text-primary-500"}`} key={link.route}>
                      <Link  href={link.route}>{link.lable}</Link>
                    </li>
                </>
              )
            })
           }
        
    </ul>
  )
}

export default NavItems