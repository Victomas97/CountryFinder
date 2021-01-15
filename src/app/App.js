import React, { useState } from "react";
import './App.css';
import {getContries} from "./services/countryService";

const App = () => {
  const [search, setSearch] = useState('');

  const handlerChangeSearch = (e) => {
      setSearch(e.target.value);
      if(e.target.value.replaceAll(' ', '')) {
          getContries(e.target.value)
              .then((countries) => {
                console.log(countries)
              });
      }
  }
  return (
    <div>
      <input value={search} onChange={handlerChangeSearch}/>
    </div>
  );
}

export default App;
