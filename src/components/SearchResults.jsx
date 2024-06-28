import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results, clickedLinks, onLinkClick }) => {
  let temp = []
  results.map((result, index) => 
    temp.push(<span className="badge bg-primary">{result.foundTags}</span>)
  )
  console.log(temp)
  return (
    <div className="search-results mt-4">
      <h2>Search Results</h2>
      <ol className="list-group">
        {results.map((result, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <a
              href={`https://pastpapers.papacambridge.com/directories/CAIE/CAIE-pastpapers/upload/${result.paperName}`}
              target="_blank"
              rel="noopener noreferrer"
              className={clickedLinks[result.paperName] ? 'clicked-link' : ''}
              onClick={() => onLinkClick(result.paperName)}
            >
              {result.paperName}
            </a>
            <div className="bdg">
   {result.foundTags.map(r => <span className="badge bg-primary">{r}</span>)}
              
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
