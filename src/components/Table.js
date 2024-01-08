import React from 'react'
import TableRow from './TableRow'
import  uuid  from 'react-uuid'

function Table({items}) {
  return (
    <table>
        <tbody>
                {items.map(item => {
                return <TableRow key={ uuid() } item={ item } />;
            })}
        </tbody>
    </table>
  )
}

export default Table
//table work like grid you can you rowspan colspan
//<table>  tag for table
//<tr> tag for table row
//<th> for table header use <tr> and <th> together
//<td> for table cell
//you can use <thead> inside <tr> inside <th> to create table header

{/* <thead>
<tr>
  <th>Header content 1</th>
  <th>Header content 2</th>
</tr>
</thead> */}


//for table bodys 
//You use directyly <tr> <td> Table Cell Data </td> </tr>
//Or <tbody> and samae 

// <tbody>
// <tr>
//   <td>Body content 1</td>
//   <td>Body content 2</td>
// </tr>
// </tbody>

//WHAT I NEED TODAY//

{/* <p>Simple table with header</p>
<table>
  <tr>
    <th>First name</th>
    <th>Last name</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table> */}