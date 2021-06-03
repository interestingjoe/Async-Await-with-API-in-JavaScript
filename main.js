let api = 'https://catfact.ninja/breeds';

let fetchAPI = async (api) => {
    let response = await fetch(api);
    let json = response.json();
    return json;
}

fetchAPI(api)
.then((response) => {console.log(response.json())})
.catch((error) => console.log(error));
