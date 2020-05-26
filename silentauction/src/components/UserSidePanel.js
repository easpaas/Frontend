import React from 'react'

export default function UserSidePanel(props) {
    const {userData, setShowMortal,setShowSide,showMortal} = props
    return (
        <div>
            <button onClick={()=>setShowSide(false)} className='closeBtn'>X</button>
            <h3 id='userName' className='sideItem' > {userData.name} </h3>

            <div>
                <div id='createItem' 
                onClick={()=>setShowMortal(!showMortal)}  

                className='sideItem' >
                     Create Item 
                </div>

                <div id='openItems'  className='sideItem' > Open Bids</div>
                <div id='closedItems'  className='sideItem' > Closed Bids </div>

            </div>
            
            
            
        </div>
    )
}
