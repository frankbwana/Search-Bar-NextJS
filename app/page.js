"use client"
import { useEffect, useState } from "react"
import  Coins  from "./components/Coins";

export default function Home() {
   const [coins, setCoins] = useState();
   useEffect(() =>{
    const getCoins = async () =>{
      const response = await fetch('api/movies')
      const coins = await response.json()
      setCoins(coins.data.coins)
    }
    getCoins();

   }, [])

  return (
    <main className=" text-center">
      <h1 className=" font-bold text-6xl mt-14">Crypto Coins</h1>
      <Coins />
    </main>
  )
}
