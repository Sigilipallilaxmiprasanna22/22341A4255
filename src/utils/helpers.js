export function generateShortcode(){ return Math.random().toString(36).substring(2,7); }
export function validateURL(url){ try{ new URL(url); return true; }catch{ return false; } }