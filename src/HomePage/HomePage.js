import React, { useState } from "react";
import home from './home.css'
import img from '../assets/XOsX.gif'
import { useSelector, useDispatch } from 'react-redux';
import { addToHistory } from "../actions";

export default function HomePage() {
    const [word, setWord] = useState('');
    const [defination, setDefination] = useState('')
    const [loading, setLoading] = useState(true)
    const [history, setHistory] = useState([])

    const dispatch = useDispatch();
    const meaning = async () => {
        try {

            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await response.json();
            setLoading(false);
            console.log(data);
            setWord(data);
            setWord('')
            setDefination(data[0]);
            setHistory((prevHistory) => [...prevHistory, defination]);
            console.log(defination)
            console.log(history)
            dispatch(addToHistory({ word, definition: data[0] }));
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            {defination !== undefined ?
                <div className="body">
                    <div className="search">
                        <input
                            type="text"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                            autoFocus
                            placeholder="search for a word"
                        />
                        <button onClick={() => meaning()} disabled={!word}>Search</button>

                    </div>
                    {defination &&
                        <div className="result">
                            <h2>{defination.word}</h2>
                            <p>{defination.phonetic}</p>
                            {defination.phonetics.map((element) => (
                                <div key={element.text}>
                                    <audio src={element.audio} controls />
                                    <p>{element.text}</p>
                                </div>
                            ))}


                            {defination && defination.meanings.map((meaning) => {
                                return (<>
                                    <h2>{meaning.partOfSpeech}</h2>
                                    <p>{meaning.definitions[0].definition}</p>
                                </>)
                            })}

                        </div>
                    }
                </div> :
                <div>
                    <p>Sorry friend, we couldn't find definitions for the word you were looking for</p>
                </div>

            }
            {loading ?
                <>
                    <h1>Type a Word to Let me go,Pls</h1>
                    <img src={img} alt="loading"></img>
                </> : ""}
        </>


    )
}
