import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseList = () => {
    const [userList,setUserList]=useState([])
     console.log('userList array contains:',userList)
     useEffect(() =>{
        getUserList()
     },[])
     const getUserList = async() =>{
        const response= await axios.get( "https://jsonplaceholder.typicode.com/todos")
        setUserList(response.data)
     }
     const userListDelete=(id) =>{
        const filterUserList = userList?.filter((item)=>item.id!==id);
        setUserList(filterUserList)
     }
  return (
    <div>UseList
        {userList.map((item)=>{
            return(
                <div key={item.id}><p><b>{item.id}:</b>
                {item.title}</p>
                <span><button onClick={() => 
                    userListDelete(item.id)}>DELETE</button></span></div>
            )
            })}
            
    </div>
  )
}

export default UseList