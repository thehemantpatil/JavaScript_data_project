// region variable is used to store the fetch data of json file 
//from server

export let region = {};

/* fetchRegion function is for fetch the json object.
   Store fetched object into region. */

export const fetchRegion = async(url) => {
    await fetch(url)
        .then(data => data.json())
        .then((data) => {
            data = JSON.parse(JSON.stringify(data));
            region = data;
        })
        .catch(error => console.log(error));
}