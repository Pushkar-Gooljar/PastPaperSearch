import React, { useState } from 'react';
import TagInput from './components/TagInput';
import SearchResults from './components/SearchResults';
import compP1 from './data/compP1.json';
import compP2 from './data/compP2.json';
import dtP3 from './data/dtP3.json';
import './App.css';

const App = () => {
  const [tags, setTags] = useState([]);
  const [results, setResults] = useState([]);
  const [selectedFile, setSelectedFile] = useState('compP1');
  const [clickedLinks, setClickedLinks] = useState({});

  const dataFiles = { compP1, compP2, dtP3 };

  const handleSearch = () => {
    if (tags.length === 0) return;

    const data = dataFiles[selectedFile];
    const matchingPapers = data.papers
      .filter(paper => tags.some(tag => paper.contents.toLowerCase().includes(tag.toLowerCase())))
      .map(paper => {
        const foundTags = tags.filter(tag => paper.contents.toLowerCase().includes(tag.toLowerCase()));
        return { paperName: paper.paperName, foundTags };
      });

    setResults(matchingPapers);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.value);
  };

  const handleLinkClick = (paperName) => {
    setClickedLinks({ ...clickedLinks, [paperName]: true });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Keyword Search</h1>
      <div className="form-group">
        <label htmlFor="dataFileSelect">Select Paper</label>
        <select id="dataFileSelect" className="form-control" onChange={handleFileChange} value={selectedFile}>
          <option value="compP1">Computer P1</option>
          <option value="compP2">Computer P2</option>
          <option value="dtP3">Design & Tech P3</option>
        </select>
      </div>
      <TagInput tags={tags} setTags={setTags} />
      <div className="text-center">
        <button className="btn btn-primary mt-3" onClick={handleSearch} disabled={tags.length === 0}>
          Search
        </button>
      </div>
      <SearchResults results={results} clickedLinks={clickedLinks} onLinkClick={handleLinkClick} />
    </div>
  );
};

export default App;
