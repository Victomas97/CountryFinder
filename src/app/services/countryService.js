const url = "https://restcountries.eu/rest/v2/name/";

export const getContries = (name) => {
    return fetch(url + name)
        .then((response) => response.json() )
        .then((result) => {
            return result.message ? [] : result;
        })
        .catch((error) => console.log(error));
}