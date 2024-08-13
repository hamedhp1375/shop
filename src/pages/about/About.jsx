import React from 'react';
import useGetcomponent from '../../component/Getcomponent/Getcomponent';

function About() {
  const { data, error, loding } = useGetcomponent('https://jsonplaceholder.typicode.com/posts');
  if (loding) return <div>Loading...</div>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
    {data.map(item => (
      <p key={item.id}>{item.title}</p> 
    ))}
  </>
  );
}

export default About;
