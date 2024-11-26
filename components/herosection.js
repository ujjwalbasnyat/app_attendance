import React from 'react'
import StudentCard from './cards/studentcard'
import AdminPanel from './cards/adminpanel'

const Herosection = () => {
  return (
    <div className='p-4 flex flex-col gap-5'>

        <AdminPanel/>
        <StudentCard person = {{
            name: "Kapil Ghimire",
            imgId: "K",
            standard : 1,
            schoolName: "Golden Flower Secondary School",
            presentDay: 40,
            absentDay: 8,
            totalDay: 48,

        }}/>
        <StudentCard person = {{
            name: "Asus Raut",
            imgId: "A",
            standard : 7,
            schoolName: "Oracle Ray Academy",
            presentDay: 9,
            absentDay: 1,
            totalDay: 10,
            
        }}/>
        <StudentCard person = {{
            name: "Shreesh Bhatta",
            imgId: "S",
            standard : 7,
            schoolName: "Oracle Ray Academy",
            presentDay: 10,
            absentDay: 0,
            totalDay: 10,
        }}/>
        <StudentCard person = {{
            name: "Soham Dulal",
            imgId: "S",
            standard : 7,
            schoolName : 'Oracle Ray Academy',
            presentDay: 8,
            absentDay: 2,
            totalDay:10
        }}/>
        <StudentCard person = {{
            name: "Subham Dulal",
            imgId: "S",
            standard : 3,
            schoolName: "Oracle Ray Academy",
            presentDay: 8,
            absentDay: 2,
            totalDay: 10,
        }}/>
        <StudentCard person = {{
            name: "Safal Sapkota",
            imgId: "S",
            standard : 6,
            schoolName: "Bidhya Mandir Secondary School",
            presentDay: 22,
            absentDay: 0,
            totalDay:22,
        }}/>
        <StudentCard person = {{
            name: "Susamsha Basnet",
            imgId: "S",
            standard : 4,
            schoolName: "Bidhya Mandir Secondary School",
            presentDay: 36,
            absentDay: 2,
            totalDay: 38
        }}/>
        <StudentCard person = {{
            name: "Sudikshya Basnet",
            imgId: "S",
            standard : 5,
            schoolName: "Bidhya Mandir Secondary School",
            presentDay: 36,
            absentDay: 2,
            totalDay: 38,
        }}/>
        <StudentCard person = {{
            name: "Samir KC",
            imgId: "S",
            standard : 7,
            schoolName: "Golden Flower Secondary School",
            presentDay: 11,
            absentDay: 0,
            totalDay: 11,
        }}/>
    </div>
  )
}

export default Herosection