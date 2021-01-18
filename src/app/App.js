import React, { useState } from "react";
import './App.css';
import {getContries} from "./services/countryService";

const App = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  const handlerChangeSearch = (e) => {
      setSearch(e.target.value);
      if(e.target.value.replaceAll(' ', '')) {
          getContries(e.target.value)
              .then((countries) => {
                setCountries(countries);
                console.log(countries)
              });
      }
      else {
          setCountries([]);
      }
  }
  return (
      <>
          <div className={'gj'}>
              <input value={search} onChange={handlerChangeSearch}/>
          </div>
          { countries.length > 0 ?
              countries.map((value, index) => (
                  <>
                      <p> {value.name + ' - ' + value.capital} </p>
                      <img src={value.flag} alt={'flag'} width={'250px'} />
                  </>
              ))
              :
              <> No hay datos que mostrar</>
          }
      </>
  );
}

export default App;
