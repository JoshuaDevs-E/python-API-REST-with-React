import { React, useState, useEffect } from 'react';

function App() {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch('/members')
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      {typeof data.members === 'undefined' ? (
        'Loading...'
      ) : (
        data.members.map((member, i) => (
          <p key={i}>
            <p>{member}</p>
          </p>
        ))
      )}
    </div>
  );
}

export default App;
