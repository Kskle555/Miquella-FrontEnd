import React from 'react'

export default function RecentNews() {
  return (
    <div className='mt-36 text-center '>
        <table class="table-auto  w-2/3 border mt-7  bg-gray-800 text-white mx-auto">
  <thead>
    <tr>
      <th>NewsID</th>
      <th>Writer</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody className='border'>
    <tr>
      <td>#121</td>
      <td>Mustafa</td>
      <td>01.01.2023</td>
    </tr>
    <tr className='border' >
      <td>#125</td>
      <td>Yağmur</td>
      <td>08.05.2023</td>
    </tr>
    <tr>
    <td>#123</td>
      <td>Oğuz</td>
      <td>02.05.2023</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
