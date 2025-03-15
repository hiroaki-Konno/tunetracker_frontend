import axios from 'axios';
import React, { useState } from 'react';
import ScoreDetailCard from './ScoreDetailCard';
function OldResult() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');

  const fetchData = async () => {
    try {
      const params = new URLSearchParams({ title, artist, genre });
      const response = await axios.get(
        `http://localhost:8000/api/data/?${params.toString()}`,
      );
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const handleSearch = () => {
    fetchData();
  };

  return (
    <div className="App">
      <div>
        <h1>Data from Django API</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Artist"
        />
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {data.map((item) => (
            <ScoreDetailCard item={item} />
            // <li key={item.id}>
            //   <a href={`result/${item.id}`}>
            //     {item.title} {item.artist}
            //   </a>
            // </li>
          ))}
        </ul>
      </div>
      {/* <div>
        <Hello />
        <Counter />
        <PersonalizedGreeting name="Hiroaki" />
      </div> */}
    </div>
  );
}
export default OldResult;
