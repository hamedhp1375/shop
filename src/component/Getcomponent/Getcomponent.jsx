import axios from 'axios'
import React, { useEffect, useState } from 'react'
// واسه ساخت کاستوم هوک لازمه use پشت اسم فاتکشن بیاد
function useGetcomponent(url) {
 //url برای انتقال داده ها است
 const [data , setdata]=useState([])
 const [loding , setloding]=useState(true)
 const [error , seterror]=useState(null)

 useEffect(() => {
    axios.get(url)
    .then(response => {
        setdata(response.data.slice(0,10))
         setloding(false)
         seterror(null)
        
        })
         .catch(error => {
             setloding(false)
             seterror(error.message)
            })
            }, [url])

            console.log(data)
            
  return (
    // این مقادیر به ما برمیگرداند تا از ان در تابعی که استفاده کردیم به هر شکل لازم است استفاده کنیم
    {data,loding,error}
  )
}

export default useGetcomponent


// axios.get("https://jsonplaceholder.typicode.com/posts")
//  .then(res=>{
//     console.log(res.data.slice(0,10))
//  })