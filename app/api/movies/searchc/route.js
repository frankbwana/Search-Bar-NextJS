import { NextResponse } from "next/server";

async function fetchMovie() {
    const response = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', {
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': '19a849e823msh944a30c9ab30267p187106jsn0360bd1b0065',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
       
    })

    const movies = await response.json();
    return movies;
}

export async function GET(request)  {
    const movies = await fetchMovie();
    const { searchParams } = new URL(request.url)
    console.log(request.url)
    const query = searchParams.get('query')

    const filteredCoins = coins.data.coins.filter((coin) =>{
        return coin.name.toLowerCase().includes(query.toLocaleLowerCase()) || coin.symbol.toLowerCase().includes(query.toLocaleLowerCase())
    })
 NextResponse.json(filteredCoins);
}