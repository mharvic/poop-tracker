// export default function Home() {
//   return (
//     <main>
//       <h1>Home</h1>
//       <p>Welcome to the home page.</p>
//     </main>
//   );
// }

import { useState, useEffect } from "react";
export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => {
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, []);
  if (error) return <main><h1>Home</h1><p>Something went wrong: {error}</p></main>;
  return (
    <main>
      <h1>Home</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </main>
  );
}