// nodejs
// const https = require('https');
// https.get('https://example.com', res => {
//   let data = '';
//   res.on('data', chunk => data += chunk);
//   res.on('end', () => console.log(data));
// });

// Browser
fetch('https://example.com')
  .then(response => response.text())
  .then(console.log);
