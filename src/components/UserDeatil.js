import React,{useState,useEffect} from 'react'
import axios from 'axios'

function UserDeatil({match}) {
    console.log(match)
    //console.log(match.params.id)
    useEffect(()=>{
        fetchUser()
    },[])
    const [item,setItem]=useState({})

    const fetchUser=async ()=>
    {
        axios.get(`https://codeforces.com/api/user.info?handles=${match.params.id}`)
            .then(result=>
                {
                const da=result.data
               // const act=da.json()
                if(da['status']==='OK')
                {
                    console.log(da['result'][0]['lastName'])
                    setItem(da['result'][0])
                }
              //  console.log(act)
                }
            )
            
            

            
      // const act=data.json()
      //  console.log("fetching each student deatils")
     ///   console.log(act)
        //var parsedData = JSON.parse(act);
       // console.log(act[1])
      //  setItem(act[['PromiseResult']])
    }
    return (
        <div>
            <h1>User Details</h1>
            <h3>User Name-{item['firstName']+" "+item['lastName']}</h3>
            <h3>Handle-{item['handle']}</h3>
            <h3>Max Rating-{item['maxRating']+"--"+item['maxRank']}</h3>
        </div>
    )
}

export default UserDeatil
