import React from 'react'
import './searchBar.css'

class SearchBar extends React.Component{
    state ={
        term:''
    }
    onInputChange = (e) =>{
        this.setState({term:e.target.value})
    }
    onSubmitHandler = (e) =>{
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render(){return(
<div className="ui segment search-bar">
 <form onSubmit={this.onSubmitHandler} className="ui form search-input">
  <div className="ui inverted left icon input massive">
    <input type="text" value={this.state.term} onChange={this.onInputChange} placeholder="Image Search..."/>
    <i className="search icon"></i>
  </div>
 </form>
 </div>
    )
}
}
export default SearchBar