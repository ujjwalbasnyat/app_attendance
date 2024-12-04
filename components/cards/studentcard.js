'use client'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import Link from 'next/link'
import { db } from '@/app/firebase/config';
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

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
                                <p>Class {student.level}</p>
                                <p>{student.instituteName}</p>
                                <p>{student.phone}</p>
                                <p>Starting date : {student.startingDate}</p>
                                </div>
                                <div className='flex justify-between gap-10 item-center'>
                                    <div>Present Days: 0</div>
                                    <div>Absent Days: 0</div>
                                    <div>Total Days: 0</div>
                                </div>
                            </div>
                        </div>

                        <div className='flex item-center justify-end text-2xl text-accent gap-5'>
                            <RiDeleteBinLine className='hover:text-white'/>
                            <BiEdit className='hover:text-white'/>
                        </div>

                        </div>
                    </Link>
                ))
            ) : (
                <p className='text-accent'>No student record found.</p>
            )}
        </div>
    );
}

export default StudentCard;
