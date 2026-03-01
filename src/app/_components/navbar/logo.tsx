 'use client'
 
 import React from 'react'

import {motion} from 'framer-motion'
import Link from 'next/link'

const MotionLink = motion(Link)
export default function logo() {
  return <>
  <div className="flex items-center justify-center ">
<MotionLink href="/" initial={{ backgroundColor: "#121212" }} className="w-17 h-16 py-0.5 bg-black text-white border border-white border-2 flex items-center justify-center rounded-full text-2xl font-bold" 
whileHover={{
    backgroundColor:['#121212','rgba(131,58,180,0.5)','rgba(253,29,29,0.5)','rgba(252,176,69,0.5)','rgba(131,58,180,0.5)','#121212'],
    transition:{duration:1, repeat:Infinity}
}}
>RA</MotionLink>

</div>
  
  </>
}
