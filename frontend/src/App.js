import React, { useEffect, useState } from 'react';
import Axios from "axios";

function App() {

  const [data, setData] = useState();

  const getData = async() => {

    const response = await Axios.get("http://localhost:5000/api/getAllBlogs");

    console.log(response, "------response-----------");
    setData(response.data);

  }

  useEffect(()=>{
    getData();
  }, [])

  return (
    <div>
         {data}
    </div>
  );
}

export default App;
