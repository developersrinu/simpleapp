import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WordDetails = () => {
  const { word } = useParams();
  const [defination, setDefination] = useState(null);

  useEffect(() => {
    // Fetch data for the selected word using the API
    const fetchWordDetails = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data = await response.json();
        if (data && data[0]) {
          setDefination(data[0]);
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchWordDetails();
  }, [word]);

  if (!defination) {
    return <p>Loading...</p>;
  }

  return (
    <div className="result">
      <h2>{defination.word}</h2>
      <p>{defination.phonetic}</p>
      {defination.phonetics.map((element) => (
        <div key={element.text}>
          <audio src={element.audio} controls />
          <p>{element.text}</p>
        </div>
      ))}
      {defination.meanings.map((meaning) => (
        <div key={meaning.partOfSpeech}>
          <h2>{meaning.partOfSpeech}</h2>
          <p>{meaning.definitions[0].definition}</p>
        </div>
      ))}
    </div>
  );
};

export default WordDetails;
