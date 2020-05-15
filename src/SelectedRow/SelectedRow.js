import React from 'react';

export default ({person}) => (
    <div>
       <h2 className="text-center mt-2 mb-4">Selected person</h2>
     <table className="table table-bordered table-success font-weight-bold">
      <tbody>
         <tr>
            <th scope="row">{person.id}</th>
            <td>{person.name}</td>
            <td>{person.username}</td>
            <td>{person.email}</td>
         </tr>
      </tbody>
      </table>
    </div>
    )
      
   
