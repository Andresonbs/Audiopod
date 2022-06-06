function enviarA(){
  var title = document.getElementById('title')
  alert(document.URL)
  var artist = document.getElementById('artist')
  var myFile = document.getElementById('myFile');
  var myFile2 = document.getElementById('myFile2');
  var area = document.getElementById('textarea');
  const dic = {
    title: title.value,
    artist: artist.value,
    area: area.value
};
  fetch('http://127.0.0.1:8080/test', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dic),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function redirect(){

}
function audioBook(){
  var form = document.getElementById('uploadForm')
  var titulo = document.getElementById('titulo')
  var title = document.getElementById('title')
  var artista = document.getElementById('artista')
  var artist = document.getElementById('artist')
  var arquivo_audio = document.getElementById('arquivo_audio');
  var capa = document.getElementById('capa');
  var sinopse_nome = document.getElementById('sinopse_nome');
  var myFile = document.getElementById('myFile');
  var myFile2 = document.getElementById('myFile2');
  var area = document.getElementById('textarea');
  var btn_enviar = document.getElementById('btn-enviar');

  let w3_white = document.getElementById('caixa');
  w3_white.style.width = '400px';
  w3_white.style.height = '427px';

  form.action = "http://127.0.0.1:8080/audiobook"

  titulo.innerHTML = '<b>Titulo:</b>';
  title.innerHTML = `<input type="text" id="title" name="title">`;

  artista.innerHTML = '<b>Narrador:</b>';
  artist.innerHTML = `<input type="text" id="artist" name="artist">`;

  arquivo_audio.innerHTML = '<b>Arquivo de áudio:</b>';
  myFile.innerHTML = `<input type="file" id="myFile" name="filename">`;

  capa.innerHTML = '<b>Capa:</b>';
  myFile2.innerHTML = `<input type="file" id="myFile2" name="filename2">`;

  sinopse_nome.innerHTML = '<b>Sinopse:</b>';
  area.innerHTML = `<textarea id="sinopse" name="descricao" rows="2" cols="25"></textarea>`;

  btn_enviar.innerHTML = `<button id='btn_enviar' type="submit" style="width:100%;" class="btn btn-primary"><i class="fa fa-pencil"></i>ENVIAR</button>`;

}
function podCast(){
  document.addEventListener('submit', (e) => {
    // Store reference to form to make later code easier to read
    const form = e.target;

    // Post data using the Fetch API
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
    });

    // Prevent the default form submit
    e.preventDefault();
  });
  var form = document.getElementById('uploadForm')
  var titulo = document.getElementById('titulo')
  var title = document.getElementById('title')
  var artista = document.getElementById('artista')
  var artist = document.getElementById('artist')
  var arquivo_audio = document.getElementById('arquivo_audio');
  var myFile = document.getElementById('myFile');
  var capa = document.getElementById('capa');
  var sinopse_nome = document.getElementById('sinopse_nome');
  var myFile = document.getElementById('myFile');
  var myFile2 = document.getElementById('myFile2');
  var area = document.getElementById('textarea');
  var btn_enviar = document.getElementById('btn-enviar');

  let w3_white = document.getElementById('caixa');
  w3_white.style.width = '400px';
  w3_white.style.height = '427px';

  form.action = "http://127.0.0.1:8080/podcasts"

  titulo.innerHTML = '<b>Titulo:</b>';
  title.innerHTML = `<input type="text" id="title" name="title">`;

  artista.innerHTML = '<b>Narrador:</b>';
  artist.innerHTML = `<input type="text" id="artist" name="artist">`;

  arquivo_audio.innerHTML = '<b>Arquivo de áudio:</b>';
  myFile.innerHTML = `<input type="file" id="myFile" name="filename">`;

  capa.innerHTML = '<b>Capa:</b>';
  myFile2.innerHTML = `<input type="file" id="myFile2" name="filename2">`;

  sinopse_nome.innerHTML = '<b>Descricao:</b>';
  area.innerHTML = `<textarea id="sinopse" name="descricao" rows="2" cols="25"></textarea>`;

  btn_enviar.innerHTML = `<button id='btn_enviar' type="submit" style="width:100%;" class="btn btn-primary"><i class="fa fa-pencil"></i>ENVIAR</button>`;
}