import React from 'react'
import CreateMortal from './CreateMortal'
import {useHistory, Redirect} from 'react-router-dom'


export default function UserSidePanel(props) {
    const {data, setShowMortal,setShowSide,showMortal} = props
    const {push,location,go} = useHistory()
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

                
                <a onClick={()=>{
                    localStorage.removeItem('token')
                    push('/welcome')
                    }}> Log out
                </a>


            </div>
            
            
            
        </div>
    )
}
