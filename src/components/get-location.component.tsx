function GetLocationComponent({setLocation}:any) {
    
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      

    function getCurrentPosition(): void {
        navigator.geolocation.getCurrentPosition(success, error, options)
    }

    function success(position: any) {
        console.log('Position', position);
        const posObj = {lat: position.coords.latitude, lng: position.coords.longitude};
        setLocation(posObj)
    }

    function error(error: any ){
        console.error('OOps some error', error)
    }

  return (
      <div>
        <button className='get-location' onClick={() => getCurrentPosition()}>GetCurrentLocation</button>
      </div>
  )
}

export default GetLocationComponent

