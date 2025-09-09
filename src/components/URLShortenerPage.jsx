import React, { useState } from 'react';
import { generateShortcode, validateURL } from '../utils/helpers';
import Logger from '../middleware/LoggerMiddleware';
import { Button, TextField, Card, Grid, Typography } from '@mui/material';
function URLShortenerPage() {
  const [urls, setUrls] = useState(['']);
  const [results, setResults] = useState([]);
  const handleAddURL = () => { if(urls.length<5) setUrls([...urls,'']); };
  const handleChange = (index,e) => { const newUrls = [...urls]; newUrls[index] = e.target.value; setUrls(newUrls); };
  const handleSubmit = () => {
    const shortened = urls.map(url => { if(!validateURL(url)){ Logger('Invalid URL:'+url); return {url,short:''}; }
      const short = generateShortcode();
      Logger('Shortened:'+url+'->'+short);
      return {url, short, createdAt:new Date().toISOString(), expiresAt:new Date(Date.now()+30*60000).toISOString()};
    });
    setResults(shortened);
  };
  return (<div style={{padding:'20px'}}>
    <Typography variant='h4'>URL Shortener</Typography>
    {urls.map((u,i)=>(<TextField key={i} label='Enter URL' value={u} onChange={e=>handleChange(i,e)} fullWidth margin='normal' />))}
    <Button variant='contained' onClick={handleAddURL} style={{margin:'10px'}}>Add URL</Button>
    <Button variant='contained' onClick={handleSubmit} style={{margin:'10px'}}>Shorten</Button>
    <div>{results.map((r,i)=>(<Card key={i} style={{margin:'10px',padding:'10px'}}><Typography>Original: {r.url}</Typography><Typography>Short: {r.short}</Typography></Card>))}</div>
  </div>);
}
export default URLShortenerPage;