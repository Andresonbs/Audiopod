const fetch = require('node-fetch')
fetch('http://127.0.0.1:8080/podcasts', {
  method: 'GET' // opcional
})
.then(response => response.json())
.then(data => alert(data));