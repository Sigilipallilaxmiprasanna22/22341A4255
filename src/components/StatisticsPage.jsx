import React, { useEffect, useState } from 'react';
function StatisticsPage(){ const [data,setData]=useState([]);
useEffect(()=>{ const saved = JSON.parse(localStorage.getItem('urls')||'[]'); setData(saved); },[]);
return (<div style={{padding:'20px'}}>{data.map((d,i)=>(<div key={i}><p>{d.short} -> {d.url}</p></div>))}</div>);}
export default StatisticsPage;