const key = 'd3f01f645emsh1132b141790b4a6p1dbc51jsn82e7be5c5213' 
const key2 = '265ec974b6msh9365c012e191801p181882jsn059916dde9d2' 
const key3 = '4d6d0fe8camsha41c061c6d44a9bp14e960jsn20e2de25bebf' 

export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': key3,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': key3,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data

    // const response =   await fetch(url, options)
    // const data = await response.json()
  // .then(response => response.json())
  // .then(data => response.json())
	// .then(response => console.log(response))
  // return data
}

