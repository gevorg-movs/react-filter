import React from 'react';

function Table(props) {
  const a = <span className="text-primary">{props.sortType === 'asc' ? 
  <i className="fa fa-arrow-down" aria-hidden="true"></i>
 : <i className="fa fa-arrow-up" aria-hidden="true"></i>
}</span>
  return (
   <table className="table">
   <thead>
     <tr>
       <th className="cursp" onClick={ () => props.OnSortBy('id')}>id {props.sortField === 'id' ? a : null} </th>
       <th className="cursp" onClick={ () => props.OnSortBy('name')}>name {props.sortField === 'name' ? a : null}</th>
       <th className="cursp" onClick={ () => props.OnSortBy('username')}>username {props.sortField === 'username' ? a : null}</th>
       <th className="cursp" onClick={ () => props.OnSortBy('email')}>email {props.sortField === 'email' ? a : null}</th>
     </tr>
   </thead>
   <tbody>
    {
      props.data.map(item => {
         return (
            <tr className="cursp" key={item.id} onClick={ () => props.ChekedRow(item) }>
            <th>{item.id}</th>
            <td >{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
          </tr>
         )
      })
    }
   </tbody>
 </table>
  );
}

export default Table;
