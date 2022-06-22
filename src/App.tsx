import { useState } from 'react';
import AddressForm from './pages/address-form.page';

function App() {
  
  const initLocation = {
    lat: '',
    lng: '',
    address: '',
    country: '',
    city: ''
  };

  const [location, setLocation] = useState(initLocation)

  function submitLocation(loc: any) {
    console.log(loc);
    setLocation({...location, lat: loc.lat, lng: loc.lng});
  }

  return (
    <div className="App">
      <header>
        Taxi Comaparer App
      </header>
      <body>
        <AddressForm setPickUpAddress={submitLocation}/>
        {/* Put your adress form*/}
        {/* list of providers */}
      </body>
      <footer>
        ReactHooksSandbox
      </footer>
    </div>
  );
}

export default App;
