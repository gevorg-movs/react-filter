import React from 'react';

class Search extends React.Component {

   onChangeInput = (event) => {   
       this.props.onSearch(event.target.value)
   }

   render() {
      return (      
         <div>
               <div className="input-group mb-3 mt-3">         
            <input type="text" className="form-control font-weight-bold" placeholder="Search" aria-label="" aria-describedby="basic-addon1" 
            onChange={this.onChangeInput}/>
            <div className="input-group-prepend">
            </div>
         </div>
         <div className="alert alert-danger text-center">Սեղմեք <span className="font-weight-bold">id, name, username,  email</span> դաշտերի վրա հերթականությունը փոխելու համար
            <p>Սեղմեք տողի վրա տվյալ մարդուն ընտրելու համար</p>
            <p>Search դաշտում կարող եք փնտրել ցանկալի մարդուն</p>
         </div>
         </div>
      )
   }
}

export default Search;