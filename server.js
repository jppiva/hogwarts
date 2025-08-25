import express from "express";
import bruxos from "./src/data/bruxos.js";
import dados from "./src/data/dados.js";

const serverPort = 3000;
const app = express();
const {varinhas,animais,pocoes,casas} = dados
app.use(express.json());

// Rota principal - Hogwarts
app.get('/', (req, res) => {
  res.send(`
    <div style="
      background: linear-gradient(135deg, #1a237e, #3949ab);
      color: white;
      padding: 50px;
      text-align: center;
      font-family: 'Georgia', serif;
      min-height: 100vh;
      margin: 0;
    ">
      <h1 style="
        font-size: 3rem;
        color: #ffd700;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        margin-bottom: 20px;
      ">
        ⚡ Bem-vindo à Hogwarts! ⚡
      </h1>
      <p style="font-size: 1.5rem; margin: 20px 0;">
        🏰 Escola de Magia e Bruxaria
      </p>
      <p style="font-size: 1.2rem; opacity: 0.9;">
        "É preciso muito mais que coragem para enfrentar nossos inimigos, 
        mas muito mais ainda para enfrentar nossos amigos."
      </p>
      <div style="margin-top: 30px;">
        <span style="font-size: 1.1rem;">🦁 Grifinória | 🐍 Sonserina | 🦅 Corvinal | 🦡 Lufa-lufa</span>
      </div>
    </div>
  `);
});

// Rota das casas
app.get('/casas', (req, res) => {
  res.json({
    casas: [
      { nome: "Grifinória", animal: "🦁", fundador: "Godrico Gryffindor" },
      { nome: "Sonserina", animal: "🐍", fundador: "Salazar Slytherin" },
      { nome: "Corvinal", animal: "🦅", fundador: "Rowena Ravenclaw" },
      { nome: "Lufa-lufa", animal: "🦡", fundador: "Helga Hufflepuff" }
    ]
  });
});

// Rota dos Bruxos
app.get("/bruxos", (req, res) => {
    res.json(bruxos);
});


// Rota do Bruxo por ID

// Iniciar servidor
app.listen(serverPort, () => {
  console.log(`⚡ Servidor Hogwarts iniciado em: http://localhost:${serverPort}`);
  console.log(`🏰 Pronto para receber novos bruxos!`);
});
app.get("/bruxos/nome/:nome", (req, res) => {
  let nome = req.params.nome.toLowerCase();
  const bruxoEncontrados = bruxos.filter(b => b.nome.toLowerCase().includes(nome));
  if (bruxoEncontrados.length > 0) {
    res.status(200).json(bruxoEncontrados);
  } else {
    res.status(404).json({
     "mensagem": "bruxo não encontrados"
    });
  }
});
app.get("/bruxos/casa/:casa", (req, res) => {
  let casa = req.params.casa.toLowerCase();
  const casaEncontrados = bruxos.filter(b => b.casa.toLowerCase().includes(casa));
  if (casaEncontrados.length > 0) {
    res.status(200).json(casaEncontrados);
  } else {
    res.status(404).json({
      "mensagem": "casa não encontrados"
    });
  }
});
app.get("/bruxos/varinha/:varinha", (req, res) => {
  let varinha = req.params.varinha.toLowerCase();
  const varinhaEncontrados = bruxos.filter(b => b.varinha.toLowerCase().includes(varinha));
  if (varinhaEncontrados.length > 0) {
    res.status(200).json(varinhaEncontrados);
  } else {
    res.status(404).json({
      "mensagem": "varinha não encontrados"
    });
  }
});
app.get("/bruxos/:id", (req, res) => {
    let id = parseInt(req.params.id);
    const idEncontrada = bruxos.find(p => p.id === id);
    if (idEncontrada) {
      res.status(200).json(idEncontrada);
    } else {
      res.status(404).json({
        "mensagem": "bruxo não encontrado"
      })
    }
  });
  app.get("/varinhas", (req, res) => {
    res.json(varinhas);
    if(varinhas.length > 0){
      res.status(200).json(varinhas);
    }else{
      res.status(404).json({
        "mensagem":"varinha não encontradas"
      })
    }
  });
  app.get("/pocoes", (req, res) => {
    res.json(pocoes);
    if(varinhas.length > 0){
      res.status(200).json(pocoes);
    }else{
      res.status(404).json({
        "mensagem":"poções não encontradas"
      })
    }
  });
  app.get("/animais", (req, res) => {
    res.json(animais);
  });

  app.get("/varinhas/:id", (req, res) => {
    let id = parseInt(req.params.id);
    const varinhaEncontrada = varinhas.find(p => p.id === id);
    if (varinhaEncontrada) {
      res.status(200).json(varinhaEncontrada);
    } else {
      res.status(404).json({
        "mensagem": "varinha não encontrado"
      })
    }
  });
  app.get("/animais/:id", (req, res) => {
    let id = parseInt(req.params.id);
    const animalEncontrado = animais.find(p => p.id === id);
    if (animalEncontrado) {
      res.status(200).json(animalEncontrado);
    } else {
      res.status(404).json({
        "mensagem": "animal não encontrado"
      })
    }
  });
  app.get("/casas/:id", (req, res) => {
    let id = parseInt(req.params.id);
    const casaEncontrada = casas.find(p => p.id === id);
    if (casaEncontrada) {
      res.status(200).json(casaEncontrada);
    } else {
      res.status(404).json({
        "mensagem": "casa não encontrado"
      })
    }
  });
  
