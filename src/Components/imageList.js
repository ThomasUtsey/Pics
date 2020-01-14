import React from 'react'
import './imageList.css'
import ImageCard from './imagecard'

const ImageList = (props) =>{
    
    
    const images = props.pics.map(e =>{return(
        <div key={e.id}>
            {<ImageCard
                image={e}
            />
        }</div>
        )
        })
return <div className='image-list'>{images}</div>
    
}

export default ImageList
