import React from 'react'
import styled from 'styled-components'

import CreateItemForm from './CreateItemForm'

export default function CreateMortal(props) {
    return (
        <div>
            <CreateItemForm data ={props.data} /> 
            
        </div>
    )
}
