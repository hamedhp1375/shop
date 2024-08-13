import { useState } from 'react';
import useGetcomponent from '../../component/Getcomponent/Getcomponent';
function Contact() {
  const {data,loding,error} = useGetcomponent('https://jsonplaceholder.typicode.com/posts');

  if (loding) return <p>loding...</p>
  if (error) return <p>Error: {error}</p>;
  return (
    <>
    {data.map(item => (
      <p key={item.id}>{item.body}</p> 
    ))}
  </>
  );
}

export default Contact;
