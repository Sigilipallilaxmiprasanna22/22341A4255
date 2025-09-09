import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Logger from '../middleware/LoggerMiddleware';
function RedirectHandler(){ const {shortcode} = useParams();
useEffect(()=>{ const urls=JSON.parse(localStorage.getItem('urls')||'[]'); const found=urls.find(u=>u.short===shortcode);
 if(found){ window.location.href=found.url; Logger('Redirected:'+shortcode); }else{ Logger('Shortcode not found:'+shortcode); alert('URL not found'); } },[shortcode]); return <div>Redirecting...</div>;}
export default RedirectHandler;