const api_url = 'https://wheretheiss.at/v1/satellites/25544'


gesISS()



async function gesISS() {
    const response = await fetch(api_url);
    const data = await response.json()
    console.log(data)
}