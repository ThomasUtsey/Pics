import React from 'react'
import unsplash from './api/unsplash'
import SearchBar from './Components/searchBar'
import ImageList from './Components/imageList'

class App extends React.Component{
    state = {
        pics:[],
        listname:''
    }

     onSearchSubmit = async (term)=>{
        this.setState({listname:term})
      const response = await unsplash.get('/search/photos',{
          params:{query:term}
      })
      this.setState({pics:response.data.results})
      
    }

    render(){
        console.log(this.state)
    return (<div>
        {this.state.listname !== ''
        ?<h1>{`List of ${this.state.listname} pictures`}</h1>
        :<h1>An Empty list</h1>
        }
       
        <SearchBar
        onSubmit = {this.onSearchSubmit}
        />
         <ImageList
        pics = {this.state.pics}
        />
    </div>)
    }
}

export default App