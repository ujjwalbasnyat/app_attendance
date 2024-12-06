import React from 'react'

function PaymentCard() {
  return (
    <div className='bg-white shadow-md rounded-md p-4'>
        <div className='grid gap-2'>
            <div className='font-bold'>Due Payments</div>
            <table>
                <thead >
                <tr className='bg-primary text-white '>
                    <th className='px-4 py-1 text-left'>Name</th>
                    <th className='px-4 py-1 text-center'>Due Month</th>
                    <th className='px-4 py-1 text-right'>Amount</th>
                </tr>
                </thead>
                <tbody>
                <tr className='hover:bg-blue-100'>
                    <td className='border-b border-primary border-opacity-50 px-4 py-1 text-left'>Kapil Ghimire</td>
                    <td className='border-b border-primary border-opacity-50 px-4 py-1 text-center'>02</td>
                    <td className='border-b border-primary border-opacity-50 px-4 py-1 text-right'>Rs.5000</td>
                </tr>
                <tr className='hover:bg-blue-100'>
                    <td className='border-b  border-primary px-4 py-1'>Safal Sapkota</td>
                    <td className='  border-b border-primary px-4 text-center'>01</td>
                    <td className='  border-b border-primary px-4 text-right'>Rs.2500</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default PaymentCard