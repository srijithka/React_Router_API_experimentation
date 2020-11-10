import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function InputUser() {
    const [inputHandle,setInputHandle]=useState('srijith1402')
    const [toggle,setToggle]=useState(false)
    const [item,setItem]=useState({})
    const [status,setStatus]=useState(false)
    
    useEffect(()=>
        {
            fetchUser()
        },[toggle])
    const submitHandler=()=>
    {
        console.log(inputHandle)
        setToggle(!toggle)
        
       // setInputHandle("")
            
    }
    const fetchUser=()=>
    {
        axios.get(`https://codeforces.com/api/user.info?handles=${inputHandle}`)
        .then(result=>
            {
            const da=result.data
           
            if(da['status']==='OK')
            {
                //console.log(da['result'][0]['lastName'])
                setItem(da['result'][0])
                setStatus(true)
                setInputHandle("")
            }
          
            }
        )
        .catch(err=>
            {
                console.log(err)
                setStatus(false)
                setInputHandle("")
            }

        )
    }
   
        
    
    return (
        <div>
            <input value={inputHandle} onChange={e=>setInputHandle(e.target.value)}/>
            <button onClick={submitHandler}>fetch details</button>
            <h1>User Details</h1>
            {
            status?
            <div>
                <h3>User Name-{item['firstName']?item['firstName']+" "+item['lastName']:'Not available'}</h3>
                <h3>Handle-{item['handle']}</h3>
                <h3>Max Rating-{item['maxRating']+"--"+item['maxRank']}</h3>
            </div>:
            <h1>Not availble...please enter ur codeforces handle correctly</h1>
            }       
            
        </div>
    )
}

export default InputUser
