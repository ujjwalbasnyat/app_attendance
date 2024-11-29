'use client'
import { db } from '@/app/firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import React, {useState} from 'react';

const Student = () => {

  const [student, setStudent] = useState({
    name: "",
    phone:"",
    instituteName : "",
    level : "",
    startingDate: "",

  })
  const [newStudent, setNewStudent] = useState(null);
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    setError('')
    setSuccess(false);
    
    try{
      await addDoc(collection(db,'students'), student);
      setSuccess(true);
      setStudent({name: "", level:"", instituteName:"", phone: "", startingDate: ""})
    }catch(error){
      setError('Failed to add student details.')
      console.error("Error adding document",error)
    }finally{
      setLoading(false)
    }
  };
  return (
    <div className='bg-primary m-4 p-4 rounded-md '>
      <form  onSubmit= {handleSubmit} className='flex flex-col gap-5'>
        <input type='text' placeholder='Student name' name='name'
        value={student.name} onChange={handleInputChange}/>
        <input type='number' placeholder='Level' name='level' value={student.level} onChange={handleInputChange}/>

        <input type='text' placeholder='Institute name' name='instituteName' value={student.instituteName} onChange={handleInputChange}/>
        <input type='text' placeholder='Contact number' name='phone' value={student.phone} onChange={handleInputChange}/>


        <div className='flex flex-col items-start justify-between'>
        <label className='text-white' >Starting date</label>
        <input type='date' name='startingDate' value={student.startingDate} onChange={handleInputChange}/>
        </div>
        <button className='bg-secondary' type='submit'> {loading ? 'Submitting...' : 'Submit'}</button>
      </form>


      {success && (
        <p className="text-accent mt-4 ">Student details added successfully!</p>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  )
}

export default Student;