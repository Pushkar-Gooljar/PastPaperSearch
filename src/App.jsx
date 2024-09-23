import React, { useState } from 'react';
import TagInput from './components/TagInput';
import SearchResults from './components/SearchResults';
import compP1 from './data/compP1.json';
import compP2 from './data/compP2.json';
import dtP3 from './data/dtP3.json';
import chemP1 from './data/chemP1.json';
import chemP2 from './data/chemP2.json';
import chemP4 from './data/chemP4.json';
import phyP1 from './data/phyP1.json';
import phyP2 from './data/phyP2.json';
import phyP4 from './data/phyP4.json';
import bioP1 from './data/bioP1.json';
import bioP2 from './data/bioP2.json';
import bioP4 from './data/bioP4.json';
import './App.css';

const App = () => {
  const [tags, setTags] = useState([]);
  const [results, setResults] = useState([]);
  const [selectedFile, setSelectedFile] = useState('compP1');
  const [clickedLinks, setClickedLinks] = useState({});

  const dataFiles = { compP1, compP2, dtP3, chemP1, chemP2, chemP4, phyP1, phyP2, phyP4, bioP1, bioP2, bioP4 };

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

          <option value="phyP1">Physics P1</option>
          <option value="phyP2">Physics P2</option>
          <option value="phyP4">Physics P4</option>

          <option value="chemP1">Chemistry P1</option>
          <option value="chemP2">Chemistry P2</option>
          <option value="chemP4">Chemistry P4</option>

          <option value="bioP1">Biology P1</option>
          <option value="bioP2">Biology P2</option>
          <option value="bioP4">Biology P4</option>
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
