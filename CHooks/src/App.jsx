import { useState, useEffect } from 'react'
import { useFetch } from './components/customHooks'
// import {UseFetch} from './components/codealong/useFetch'

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")



return (
  <>

  <h1>Hello world</h1>
  <h2>Lets build something together with custom hooks</h2>
  
    {data &&
      data.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
  </>
);
};


export default App