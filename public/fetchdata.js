// import React, { useState, useEffect } from 'react';

// const FetchData = (props) => {
//     const [ posts, setPost ] = useState([])
//     useEffect(() => {
//         const { id } = props.match.params;
//         fetch(`http://localhost:3001/api/showings${id}`)
//         .then(response => response.json())
//         .then(showings => {
//             setPost([showings]);
//         });
//     }, []);
//   return (
//     <>
//       <h1>Blog</h1>
//       {posts.map (post => (
//           <div className="Blog" key={showings.id}>
//             <h2>{showings.title}</h2>
//              <p>{showings.date}</p>      
//             <p>{showings.body}</p>
//           </div>
//         ))
//       };
//     </>
//   );
// }
// export default FetchData;

