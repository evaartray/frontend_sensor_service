import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/models").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof data.models === 'undefined') ? (
        <p>Loading data...</p>
      ):(
        data.models.map((model, i) => (
          <p key={i}>{model}</p>
        ))
      )}

    </div>
  );
}

export default App;
