// import { useState, useEffect } from 'react'
// import { CustomHooks } from './components/costumHooks'

// import './App.css'

// function App() {

//   return (
//     <>
//     <CustomHooks/>
//     </>
//   )
// }

// export default App

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      // .then((res) => res.json())
      // .then((data) => setData(data));
       .then(response => response.json())
       .then(json => console.log(json))
 }, []);

//  fetch('https://jsonplaceholder.typicode.com/todos/1')
//  .then(response => response.json())
//  .then(json => console.log(json))

return (
  <>
    {data &&
      data.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
  </>
);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);

export default Home