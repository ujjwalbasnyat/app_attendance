'use client'
import React, {useState} from 'react'

const Student = () => {

  const [student, setStudent] = useState({
    name: "",
    phone:"",
    instituteName : "",
    level : "",
    startingDate: "",

  })
  const [newStudent, setNewStudent] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setNewStudent(student); // Store the submitted data in submittedData state
    setStudent({ name: "", instituteName: "", phone: "", level:"", startingDate:"" }); // Reset form
  };
  return (
    <div className='bg-primary m-4 p-4 rounded-md '>
      <form  onSubmit= {handleSubmit} className='flex flex-col gap-5'>
        <input type='text' placeholder='Student name' name='name'
        value={student.name} onChange={handleInputChange}/>
        <input type='number' placeholder='Level' name='number' value={student.level} onChange={handleInputChange}/>

        <input type='text' placeholder='Institute name' name='instituteName' value={student.instituteName} onChange={handleInputChange}/>
        <input type='text' placeholder='Contact number' name='number' value={student.phone} onChange={handleInputChange}/>


        <div className='flex flex-col items-start justify-between'>
        <label className='text-white' >Starting date</label>
        <input type='date' name='date' value={student.startingDate} onChange={handleInputChange}/>
        </div>

        <div className='flex  items-center justify-start gap-5'>
        <label className='text-white'>
        <input type='radio' name="radio" value="Male" />Male
        </label>
        <label className='text-white'>
        <input type='radio' name="radio" value="Female" />Female
        </label>
        <label className='text-white'>
        <input type='radio' name="radio" value="Other" />Other
        </label>
        </div>
        <button className='bg-secondary' type='submit'>Submit</button>
      </form>


      <div>
      {newStudent && (
        <div>
          <div>{newStudent.name}</div>
          <div>{newStudent.level}</div>
          <div>{newStudent.instituteName}</div>
          <div>{newStudent.phone}</div>
          <div>{newStudent.startingDate}</div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Student;