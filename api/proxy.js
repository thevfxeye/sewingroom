export default async function handler(req, res) {
  const target = "https://ksa.edu.pl" + req.url;
  const response = await fetch(target);
  let body = await response.text();
  
  // The Injection
  const banner = '<div style="position:fixed;top:0;width:100%;background:#00b89c;color:white;text-align:center;padding:15px;z-index:999999;">🧵 Open the sewing room</div>';
  body = body.replace('<body>', '<body>' + banner);
  
  res.setHeader('Content-Type', 'text/html');
  res.send(body);
}