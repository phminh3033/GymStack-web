export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e97d67843bmsh46589f55df2e4bdp16dde7jsnb396dac1671a',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};
