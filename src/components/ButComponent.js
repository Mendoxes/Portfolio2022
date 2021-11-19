import React from 'react'


export default function ButComponent({ima,anim}) {
    return (
        <div className="Plus--link" aria-label="Disney">
        <div className="Plus--image-container">
            <div>
                <img alt="" className="Plus--image pad" src={ima}/>
                <img alt="" className="Plus--image Plus--hover-image" src={anim}/>
            </div>
        </div>
    </div>
    )
}
