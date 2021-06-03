let api = 'https://catfact.ninja/breeds';

let fetchAPI = async (api) => {
    let response = await fetch(api);
    let json = await response.json();
    return json;
}

fetchAPI(api)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
