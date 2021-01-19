import React, { useState, useEffect } from "react";
import './App.css';
import {getContries} from "./services/countryService";
import MapComponent from "./components/MapComponent";

const App = () => {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState(null);

  const handlerChangeSearch = (e) => {
      setSearch(e);
  }

  useEffect(() => {
    if(search.replaceAll(' ', '')) {
      getContries(search)
        .then((countries) => {
          setCountry(countries ? countries[0] : null);
        });
    }
    else {
      setCountry(null);
    }
  });


  return (
      <div className={'grid-container'}>
        <div className={'map'}>
          <MapComponent onCountryChange={handlerChangeSearch}/>
        </div>
        <div className={'country'}>
          {
             country ?
              <div>
                <p> {country?.name + ' - ' + country?.capital} </p>
                <img src={country?.flag} alt={'flag'} width={'250px'} />
                <p> {country?.region + ' - ' + country?.population} </p>
              </div>
               :
               null
          }

        </div>
      </div>
  );
}

export default App;
