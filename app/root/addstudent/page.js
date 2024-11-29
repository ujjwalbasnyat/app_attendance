'use client'
import { db } from '@/app/firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';

const Student = () => {
  const [student, setStudent] = useState({
    name: "",
    phone: "",
    instituteName: "",
    level: "",
    startingDate: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};

    if (!student.name.trim()) {
      formErrors.name = "Student name is required.";
    }
    if (!student.phone.trim()) {
      formErrors.phone = "Contact number is required.";
    } else if (!/^\d{10}$/.test(student.phone)) {
      formErrors.phone = "Contact number must be between 10 digits.";
    }
    if (!student.instituteName.trim()) {
      formErrors.instituteName = "Institute name is required.";
    }
    if (!student.startingDate.trim()) {
      formErrors.startingDate = "Starting date is required.";
    }

    setError(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop execution if validation fails
    }

    setLoading(true);
    setError({});
    setSuccess(false);

    try {
      await addDoc(collection(db, 'students'), student);
      setSuccess(true);
      setStudent({ name: "", level: "", instituteName: "", phone: "", startingDate: "" });
    } catch (error) {
      setError({ general: 'Failed to add student details.' });
      console.error("Error adding document", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=' border   p-4 rounded-md '>
      <form onSubmit={handleSubmit} className='w-60 p-4 flex flex-col gap-5'>
        
        <input
          type='text'
          placeholder='Student name'
          name='name'
          value={student.name}
          onChange={handleInputChange}
          className='focus:outline-none'
        />
        {error.name && <p className='text-accent'>{error.name}</p>}

        <input
          type='number'
          placeholder='Level'
          name='level'
          value={student.level}
          onChange={handleInputChange}
          className='focus:outline-none'
        />

        <input
          type='text'
          placeholder='Institute name'
          name='instituteName'
          value={student.instituteName}
          onChange={handleInputChange}
          className='focus:outline-none'
        />
        {error.instituteName && <p className='text-accent'>{error.instituteName}</p>}

        <input
          type='text'
          placeholder='Contact number'
          name='phone'
          value={student.phone}
          onChange={handleInputChange}
          className='focus:outline-none'
        />
        {error.phone && <p className='text-accent'>{error.phone}</p>}

        <div className='flex flex-col items-start justify-between'>
          <label className=''>Starting date</label>
          <input
            type='date'
            name='startingDate'
            value={student.startingDate}
            onChange={handleInputChange}
            className='focus:outline-none'
          />
          {error.startingDate && <p className='text-accent'>{error.startingDate}</p>}
        </div>

        <button className='bg-primary text-white p-2 rounded-md' type='submit'>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {success && <p className="text-green-500 mt-4">Student details added successfully!</p>}
      {error.general && <p className="text-accent ">{error.general}</p>}
    </div>
  );
};

export default Student;
