





import React from "react";
import { useNavigate } from "react-router-dom";
import './history.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToHistory } from "../actions";

export default function HistoryPage() {
  const historyList = useSelector((state) => state.history.history);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const fetchDefinition = async (word) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
      dispatch(addToHistory(data[0])); // Save the entire definition object
      navigate(`/word/${word}`); // Redirect to the word's details page
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="history">
      <h1>Searched History</h1>
      <ul>
        {historyList.map((item, index) => (
          <li key={index} onClick={() => fetchDefinition(item.word)}>
            {item.word}
          </li>
        ))}
      </ul>
    </div>
  );
}








// // HistoryPage.js
// import React from "react";
// import './history.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToHistory } from "../actions";

// export default function HistoryPage() {
//   const history = useSelector((state) => state.history.history);
//   const dispatch = useDispatch();

//   const fetchDefinition = async (word) => {
//     try {
//       const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//       const data = await response.json();
//       dispatch(addToHistory(data[0])); // Save the entire definition object
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div className="history">
//       <h1>Searched History</h1>
//       <ul>
//         {history.map((item, index) => (
//           <li key={index} onClick={() => fetchDefinition(item.word)}>
//             {item.word}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
//----------------------------------------