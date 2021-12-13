import React from 'react'
import loading from './gif/loading.gif'
const Spinner =()=> {
   
        return (
            <div className='text-center my-3'>
                <img src={loading} alt="Loading"  />
            </div>
        )
    }


export default Spinner
