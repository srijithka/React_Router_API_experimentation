import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function Start() { 
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetchItems()
    },[])

    const fetchItems=async()=>
    {
        const data=await fetch('https://codeforces.com/api/recentActions?maxCount=15')
        const act=await data.json();
        console.log(act.result)
        setItems(act.result)
        
    }

    return (
        <div>
            {
                items.map((item)=>{
                    return(
                        
                            <h3 key={Math.random()*1000}><Link to={`/start/${item.blogEntry.authorHandle}`}>{item.blogEntry.authorHandle}</Link></h3>
                    )
                })
                
            }
        </div>
    )
}

export default Start
