import React from 'react'

export default function CreateItemForm() {
    return (
        <form>
            <input name='title'type='text ' />
            <select name='category'>
                <option >select category</option>
                <option value='electronics'>Electronics</option>
                <option value='home'>Home and Furniture</option>
                <option value='outside'>Outside Equipment</option>
                <option value='collectorItems'>Collectors Items</option>
            </select>

            <textarea name='description' />

            <input type='date' name='dateOpened'/>
            <input type='date' name='dateClosed'/>
            <input type='number' name='startingBid'/>

            
        </form>
    )
}
