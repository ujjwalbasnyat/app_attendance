'use client'
import React, {useEffect, useState} from 'react'
import { collection, getDocs } from "firebase/firestore";
import StudentCard from './cards/studentcard'
import AdminPanel from './cards/adminpanel'
import { db } from '@/app/firebase/config';

const Herosection = () => {

   
  return (
    <div className='p-4 flex flex-col gap-5'>

        <AdminPanel/>
        <StudentCard/>
    </div>
  )
}

export default Herosection