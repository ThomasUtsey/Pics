import React from 'react'
import './imageList.css'

class ImageCard extends React.Component{
constructor(props){
    super(props)
    this.state = {
        span:0
    }
    this.imageRef = React.createRef()
}
componentDidMount(){
    this.imageRef.current.addEventListener('load',this.setSpan)
}
setSpan = () =>{
const height = (this.imageRef.current.clientHeight)
const span = Math.ceil(height/10)+1
this.setState({span:span})
}

render(){
    const{description,urls} = this.props.image

    return(
    <div style={{gridRowEnd:`span ${this.state.span}`}} className="image-card">
        
        <img 
        ref={this.imageRef}
        src={urls.regular} 
        alt={description}
        />


    </div>
)
}
}
export default ImageCard