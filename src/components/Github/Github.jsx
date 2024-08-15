/* eslint-disable no-unused-vars */
import React from "react"
import { useLoaderData } from "react-router-dom"
// import { useEffect } from "react"


function Github() {
    const data = useLoaderData()
    // const [data , setData] = React.useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Shyamnarayananj").then((response)=> response.json()).then((data)=> {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    console.log(data)

  return (
    <div className='p-4 text-center bg-gray-500 text-3xl'>Github <br />
    Followers:{data.followers}
    <img src={data.avatar_url} width={200} alt="Profile Picture" />
    Name: {data.name} <br />
    Bio: {data.bio} <br />
    Created at: {data.created_at}
    </div>
  )
}

export default Github

export const githubInfoLoader =async() =>{
    const response = await fetch("https://api.github.com/users/Shyamnarayananj")
        return response.json()
}