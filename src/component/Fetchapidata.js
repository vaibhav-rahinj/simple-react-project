import React, { useEffect, useState } from "react";

function Fetchapidata() {
  const [state, setState] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        // `https://dummyjson.com/products?${state}`
        `https://jsonplaceholder.typicode.com/todos?${state}=userId=5`
      );
      const res = await get.json();
      setData(res);
      console.log(res);
    }
    getData();
  }, [state]);

  return (
    <div className="api_data">
      <h4>Hi this fetch api page</h4>
      <button onClick={() => setState(state + 5)}>Click me {state}</button>

      {data.map((element, index) => {
        return (
          <table className="table_data">
            <th>id</th>
            <th>Title</th>
            <th>completed</th>

            <tr key={index}>
              <td>{element.id}</td>
              <td>{element.title}</td>
              <td>{element.completed}</td>
            </tr>
          </table>
          // <div key={index}>
          //   <h4>{element.id}</h4>
          //   <h4>{element.title}</h4>
          // git branch -M main
          // git remote add origin https://github.com/vaibhav-rahinj/simple-react-project.git
          // git push -u origin main
          //   <h4>{element.completed}</h4>
          // </div>
        );
      })}
    </div>
  );
}

export default Fetchapidata;
