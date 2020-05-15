import React from 'react';

class Search extends React.Component {

   onChangeInput = (event) => {   
       this.props.onSearch(event.target.value)
   }

   render() {
      return (      
         <div className="input-group mb-3 mt-3">         
         <input type="text" className="form-control" placeholder="Search" aria-label="" aria-describedby="basic-addon1" 
         onChange={this.onChangeInput}/>
         <div className="input-group-prepend">
         </div>
       </div>
      )
   }
}

export default Search;