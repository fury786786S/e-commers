import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio incidunt animi molestiae quae harum exercitationem non commodi laborum itaque minus? Natus quidem non architecto inventore reprehenderit, dicta odit! Voluptatem, perspiciatis!</p>

            </div>
        </div>
    )
}

export default DescriptionBox