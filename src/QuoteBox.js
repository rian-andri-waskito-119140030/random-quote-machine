import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteBox = ({ setAppColor }) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [boxColor, setBoxColor] = useState('#f9f9f9');

  const fetchQuote = async () => {
    const response = await axios.get('https://api.quotable.io/random');
    setQuote(response.data.content);
    setAuthor(response.data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
    const newColor = getRandomColor();
    setBoxColor(newColor);
    setAppColor(newColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div id="quote-box" style={{ ...styles.quoteBox, backgroundColor: boxColor }}>
      <p id="text" style={styles.text}>{quote}</p>
      <p id="author" style={styles.author}>- {author}</p>
      <div style={styles.buttonContainer}>
        <a 
          id="tweet-quote" 
          href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`} 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.tweetButton}
        >
          <button style={styles.tweetButtonContent}>
            <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
            Tweet
          </button>
        </a>
        <button id="new-quote" onClick={handleNewQuote} style={styles.button}>New Quote</button>
      </div>
    </div>
  );
};

const styles = {
  quoteBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  text: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  author: {
    fontSize: '1.2em',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    marginBottom: '10px',
    backgroundColor: '#1DA1F2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  tweetButton: {
    textDecoration: 'none',
  },
  tweetButtonContent: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#1DA1F2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  icon: {
    marginRight: '8px',
  },
};

export default QuoteBox;
