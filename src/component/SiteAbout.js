import React from 'react'
import '../styles/SiteAbout.css'

function SiteAbout() {
  return (
    <div className='About-container' id='marksid'>
      <h1>Total mark of Students in 2022-2023</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Goodboy</td>
            <td>80%</td>
          </tr>
          <tr className="active-row">
            <td>i am good boy</td>
            <td>70%</td>
          </tr>
        </tbody>
      </table>

      <h1>Total mark of Students in 2021-2022</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Goodboy thi</td>
            <td>90%</td>
          </tr>
          <tr className="active-row">
            <td>i am good boy thi</td>
            <td>89%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SiteAbout