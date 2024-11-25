import Link from 'next/link'
import React from 'react'


const StudentCard = ({person}) => {
  return (
    <Link href= "#" className='bg-primary p-4 rounded-md text-md text-white'>
        <div className='flex items-center justify-between'>
            <div>
                {person.name}
            </div>
            <div class="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center text-xl font-bold">
                {person.imgId}
            </div>
        </div>
        <div>
            Level: {person.standard}
        </div>
        <div>
            {person.schoolName}
        </div>
        <div className='flex items-center justify-between'>
        <div>
            Present Day:{person.presentDay}
        </div>
        <div>
            Absent Day: {person.absentDay}
        </div>
        <div>
            Total Day:{person.totalDay}
        </div>
        </div>
    </Link>
  )
}

export default StudentCard