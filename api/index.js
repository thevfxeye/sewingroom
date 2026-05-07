export default async function handler(req, res) {
  const target = "https://ksa.edu.pl" + (req.url === '/' ? '/en/apply/' : req.url);
  const response = await fetch(target);
  let body = await response.text();
  
  // The Injection
  const banner = '<div style="position:fixed;top:0;left:0;width:100%;background:#00b89c;color:white;text-align:center;padding:15px;z-index:9999999;font-family:sans-serif;font-weight:bold;pointer-events:auto;">🧵 Open the sewing room</div>';
  
  // Inject after the opening body tag
  body = body.replace('<body', '<body style="padding-top:50px;"' + '><div id="sewing-banner">' + banner + '</div>');
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(body);
}
