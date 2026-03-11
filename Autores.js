const AutoresForm = document.getElementById("AutoresForm");
const AutoresApiURL = "http://localhost:5110/api/Autores";
const divCards = document.getElementById("cards");

async function buscarAutor() {
  try {
    const resposta = await fetch(AutoresApiURL);
    if (!resposta.ok) {
      throw new Error(`Erro ao buscar dados:   ${resposta.status}`);
    }
    const dados = await resposta.json();
    divCards.innerHTML = "";
    dados.forEach((dado) => {
      console.log(dado.nome);
      console.log(dado.biografia);
      let autorElement = document.createElement("div");

      autorElement.innerHTML = `
      <h2>${dado.nome}</h2>
<p>Preço Final: R$ ${dado.biografia}</p>`;

      divCards.appendChild(autorElement);
    });
  } catch (error) {
    console.log("Erro ao buscar os dados:", error);
  }
}

async function cadastrarAutor(event) {
  event.preventDefault();
  
  const nome = document.getElementById("nomeInput").value;
  const biografia = parseFloat(document.getElementById("biografiaInput").value);


  try {
    const resposta = await fetch(AutoresApiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        biografia: biografia
      }),
    }); 

    if (!resposta.ok) {
      throw new Error(`Erro no servidor: ${resposta.status}`);
    }

    // Trocado para .text() para evitar o erro de "Unexpected token L"
    const mensagem = await resposta.text();
    console.log("Sucesso:", mensagem);

    AutoresForm.reset(); // Corrigido de resetf() para reset()
    await buscarAutor();  // Atualiza a lista na tela
    
  } catch (error) {
    console.log("Erro ao cadastrar livro:", error);
    alert("Houve um erro ao salvar o livro.");
  }
}

AutoresForm.addEventListener("submit", cadastrarAutor);
buscarAutor();
