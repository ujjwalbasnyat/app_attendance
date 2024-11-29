'use client'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import Link from 'next/link'
import { db } from '@/app/firebase/config';

const StudentCard = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'students'));
                const studentData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setStudents(studentData);
            } catch (error) {
                console.error("Error fetching student data", error);
            }
        };
        fetchStudents();
    }, []);

    return (
        <div className=''>
            {students.length > 0 ? (
                students.map((student) => (
                    <Link key={student.id} href="#" >
                        <div className='bg-primary my-4 p-6 rounded-md text-md text-white '>
                            <div className='flex item-center justify-between'>
                            <div className=''>
                                <div className='flex item-center justify-between '>
                                    <p className=''>Student name: {student.name}</p>
                                    <div>Profile</div>
                                </div>
                                <div className='flex flex-col item-center justify-center'>
                                <p>Standard: {student.level}</p>
                                <p>Institute: {student.instituteName}</p>
                                <p>Contact: {student.phone}</p>
                                <p>Starting date : {student.startingDate}</p>
                                </div>
                                <div className='flex justify-between gap-10 item-center'>
                                    <div>Present Days: 0</div>
                                    <div>Absent Days: 0</div>
                                    <div>Total Days: 0</div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No student found.</p>
            )}
        </div>
    );
}

export default StudentCard;
