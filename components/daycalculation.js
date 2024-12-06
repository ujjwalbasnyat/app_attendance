import React from 'react'

function DaysCalculator() {
    const calculateDays = (startDate) => {
        const start = new Date(startDate)
        const current  = new Date();
    }
  return (
    <div className='bg-white shadow-md rounded-md p-4'>
        <div className='grid gap-2'>
        <div className='font-semibold'>Days & Amount Calculator</div>
        <table>
                <thead >
                <tr className='bg-primary text-white '>
                    <th className='px-4 py-1 text-left'>Name</th>
                    <th className='px-4 py-1 text-center'>Total Days</th>
                    <th className='px-4 py-1 text-right'>Total Amount</th>
                </tr>
                </thead>
                <tbody>
                <tr className='hover:bg-blue-100'>
                    <td className='border-b border-primary border-opacity-50 px-4 py-1 text-left'>Aasus Raut</td>
                    <td className='border-b border-primary border-opacity-50 px-4 py-1 text-center'>18</td>
                    <td className='border-b border-primary border-opacity-50 px-4 py-1 text-right'>1500.00</td>
                </tr>
                <tr className='hover:bg-blue-100'>
                    <td className='border-b  border-primary px-4 py-1'>Safal Sapkota</td>
                    <td className='  border-b border-primary px-4 text-center'>32</td>
                    <td className='  border-b border-primary px-4 text-right'>2666.67</td>
                </tr>
                <tr className='hover:bg-blue-100'>
                    <td className='border-b  border-primary px-4 py-1'>Samir K.C</td>
                    <td className='  border-b border-primary px-4 text-center'>19</td>
                    <td className='  border-b border-primary px-4 text-right'>1583.33</td>
                </tr>
                <tr className='hover:bg-blue-100'>
                    <td className='border-b  border-primary px-4 py-1'>Shreesh Bhatta</td>
                    <td className='  border-b border-primary px-4 text-center'>18</td>
                    <td className='  border-b border-primary px-4 text-right'>1500.00</td>
                </tr>
                <tr className='hover:bg-blue-100'>
                    <td className='border-b  border-primary px-4 py-1'>Susamsha Basnet</td>
                    <td className='  border-b border-primary px-4 text-center'>05</td>
                    <td className='  border-b border-primary px-4 text-right'>0416.67</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DaysCalculator;