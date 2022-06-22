import React, { useState } from 'react'
import GetLocationComponent from '../components/get-location.component'

function AddressForm({setPickUpAddress}:any) { 

    const [location, setLocation] = useState({lat: '', lng :''})
    
    

    function submitPosition(): void {
        console.log(location)
        setPickUpAddress(location)
       }
  return (
        <div>
            <span> Should Be React Text {location?.lat }</span>
            <GetLocationComponent setLocation={setLocation}/>
            <button onClick={submitPosition}>Submit Position</button>
        </div>
  )
}

export default AddressForm
