import React from 'react'
import CreateMortal from './CreateMortal'


export default function UserSidePanel(props) {
    const {data, setShowMortal,setShowSide,showMortal} = props
    return (
        <div>
            <button onClick={()=>setShowSide(false)} className='closeBtn'>X</button>
            <h3 id='userName' className='sideItem' > {data.userData.userData.username} </h3>

            <div>
                <button id='createItem' 
                onClick={()=>setShowMortal(!showMortal)}  

                className='sideItem' >
                     Create Item 
                </button>
                {showMortal ? <CreateMortal data={data} /> : null}

                <div id='openItems'  className='sideItem' > Open Bids</div>
                <div id='closedItems'  className='sideItem' > Closed Bids </div>

            </div>
            
            
            
        </div>
    )
}
