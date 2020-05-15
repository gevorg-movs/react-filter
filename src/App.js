import React from 'react';
import './App.css';
import Table from './Table/Table';
import Loading from './Loading/Loading';
import _ from 'lodash';
import SelectedRow from './SelectedRow/SelectedRow';
import Search from './Search/Search';

class App extends React.Component {

  state = {
    data: [],
    isLoading: true,
    sortField: 'id',
    sortType: 'asc',
    row: null,
    searchValue: null
  }

  async componentDidMount() {
    const respone = await fetch('/users.php');
    const data = await respone.json()
    this.setState({
      data,
      isLoading: false
    })

  }

  OnSortBy = (sortField) => {
    const sortType = this.state.sortType === 'asc' ? 'desc' : 'asc';
    const orderedData = _.orderBy(this.state.data, sortField, sortType);
    this.setState({
      data: orderedData,
      sortField,
      sortType
    })
  }

  ChekedRow = (chekedrow) => {
    this.setState({
      row: chekedrow
    })
    
  }

  onSearch = (searchValue) => {
    this.setState({searchValue})     
  }

  filteredData = () => {
    const {data, searchValue} = this.state;
    if(!searchValue) {
      return data
    } else {
      return data.filter( item => {
        return  item.name.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                item.username.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                item.email.toLowerCase().includes(this.state.searchValue.toLowerCase())
      })
    }
  }

  render () {    
    const filteredData = this.filteredData();
    return (
      <div className="container">
        {
          <Search onSearch={this.onSearch}/>
        }
        {
          this.state.isLoading ? 
          <Loading /> : 
          <Table 
          data={filteredData}
          OnSortBy = {this.OnSortBy}
          sortType = {this.state.sortType}
          sortField = {this.state.sortField}
          ChekedRow = {this.ChekedRow}
          />          
        }
        {
          this.state.row ? <SelectedRow person={this.state.row}/> : null
        } 
      </div>
    );
  }
}

export default App;
