'use client'
import React, {useEffect, useState} from 'react'
import { collection, getDocs } from "firebase/firestore";
import StudentCard from './cards/studentcard'
import AdminPanel from './cards/adminpanel'
import PaymentCard from './paymentcard'
import Messenger from './message';
import DaysCalculator from './daycalculation';
import StudentProgress from './progress';

const Herosection = () => {

   
  return (
    <div className='p-4 flex flex-col gap-5'>
      <AdminPanel/>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
        <StudentProgress/>
        <div className='grid gap-4'>
          <PaymentCard/>
          <DaysCalculator/>
          <Messenger/>
        </div>
      </div>
      
    </div>
  )
}

export default Herosection