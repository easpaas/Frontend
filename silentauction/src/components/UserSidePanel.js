import React from 'react'
import CreateMortal from './CreateMortal'
import {useHistory, Redirect,Link} from 'react-router-dom'


export default function UserSidePanel(props) {
    const {data} = props
    return (
        <div>
            
            <h3 id='userName' className='sideItem' > Create A New Bid</h3>

            <div>
                <CreateMortal data={data} /> 

                
                


            </div>
            
            
            
        </div>
    )
}
