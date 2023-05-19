/*const http = require('http');
const fs = require('fs');

// Define o caminho para o arquivo paises.json
const pathToFile = __dirname + '/paises.json';

http.createServer((req, res) => {
  if (req.url === '/paises') {
    // Define o cabeçalho da resposta para JSON
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Lê o arquivo paises.json
    fs.readFile(pathToFile, (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Erro interno do servidor');
        return;
      }

      // Analisa o conteúdo JSON
      const paises = JSON.parse(data);

      //slice

      const primeirosPaises = paises.slice(0, 20);

      // Gera a resposta HTTP com o conteúdo JSON
      res.statusCode = 200;
      res.end(JSON.stringify(primeirosPaises));
    });
  } 
  
  
  if (req.url === '/paisescomb') {

    // Lê o arquivo paises.json
    fs.readFile(pathToFile, (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Erro interno do servidor');
        return;
      }

      // Analisa o conteúdo JSON
      const paises = JSON.parse(data);

      //cria um novo array para a lista dos paises com B
      var paisescomb = [];

      //forEach

      paises.forEach(element => {

        var nomeTemporario = element.nome_pais;

        nomeTemporario = String(nomeTemporario);

        var primeiraLetra = nomeTemporario.substr(0,1);

        if(primeiraLetra == "B"){
          paisescomb.push(element.nome_pais);

        }

      // Gera a resposta HTTP com o conteúdo JSON
      res.statusCode = 200;
      res.end(JSON.stringify(paisescomb));
    });
  } 
  
  else {
    // Se a URL não for /paises, envia o arquivo index.html
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin' : '*'
    });
    let readStream = fs.createReadStream(__dirname + '/index.html');
    readStream.pipe(res);
  }
}).listen(8000);

console.log('Visite-me em: http://localhost:8000');
*/
const http = require('http');
  const fs = require('fs');

  // Define o caminho para o arquivo paises.json
  const pathToFile = __dirname + '/paises.json';

  http.createServer((req, res) => {
    if (req.url === '/paises') {
      // Define o cabeçalho da resposta para JSON
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');

      // Lê o arquivo paises.json
      fs.readFile(pathToFile, (err, data) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end('Erro interno do servidor');
          return;
        }

        // Analisa o conteúdo JSON
        const paises = JSON.parse(data);

        // Obtém apenas os primeiros 20 países
        const primeirosPaises = paises.slice(0, 20);

        // Gera a resposta HTTP com o conteúdo JSON dos primeiros 20 países
        res.statusCode = 200;
        res.end(JSON.stringify(primeirosPaises));
      });
    } 
    
    if (req.url === '/paisescomb') {
      
      fs.readFile(pathToFile, (err, data) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end('Erro interno do servidor');
          return;
        }

        // Alisa meu pelo
        const paises = JSON.parse(data);

        //cria um novo array para a lista dos paises com B
        var paisescomb = [];
        
        paises.forEach(element => {

          var nomeTemporario = element.nome_pais;

          nomeTemporario = String(nomeTemporario);

          var primeiraLetra = nomeTemporario.substr(0,1);

          if(primeiraLetra == "B"){
            paisescomb.push(element.nome_pais);

          }

        });
        // Gera a resposta HTTP com o conteúdo JSON dos paises iniciados com a letra B
        res.statusCode = 200;
        res.end(JSON.stringify(paisescomb));
      });
    }
    else {
      // Se a URL não for /paises nem /paisescomb, envia o arquivo index.html
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
      });
      let readStream = fs.createReadStream(__dirname + '/index.html');
      readStream.pipe(res);
    }
  }).listen(8000);

  console.log('Visite-me em: http://localhost:8000');