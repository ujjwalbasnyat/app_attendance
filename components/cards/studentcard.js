'use client';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Link from 'next/link';
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

    // Function to delete a student
    const deleteStudent = async (id) => {
        try {
            // Delete the student document from Firestore
            await deleteDoc(doc(db, 'students', id));
            // Update the local state to remove the deleted student
            setStudents((prevStudents) =>
                prevStudents.filter((student) => student.id !== id)
            );
            console.log(`Student with ID ${id} deleted successfully.`);
        } catch (error) {
            console.error("Error deleting student", error);
        }
    };

    return (
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 '>
            {students.length > 0 ? (
                students.map((student) => (
                    <Link key={student.id} href="#">
                        <div className='bg-white border border-gray-200 rounded-lg shadow-md my-4 p-6 rounded-md text-md  text-slate-900 transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
                            <div className='flex item-center justify-between'>
                                <div className=''>
                                    <div className='flex item-center justify-between '>
                                        <p className=''>{student.name}</p>
                                        
                                    </div>
                                    <div className='flex flex-col item-center justify-center'>
                                        <p>Standard {student.level}</p>
                                        <p>{student.instituteName}</p>
                                        <p>{student.phone}</p>
                                        <p>Started on {student.startingDate}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex item-center justify-end text-2xl text-accent gap-5'>
                                <div className='group'>
                                <div className='text-black text-sm opacity-0 group-hover:opacity-40 transition-opacity duration-300'>
                                    Delete
                                </div>
                                <RiDeleteBinLine onClick={() => deleteStudent(student.id)} />
                                </div>
                                
                                <div className='group'>
                                <div className='text-black text-sm opacity-0 group-hover:opacity-40 transition-opacity duration-300'>
                                    Edit
                                </div>
                                <BiEdit />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p className='text-accent'>No student record found.</p>
            )}
        </div>
    );
};

export default StudentCard;
