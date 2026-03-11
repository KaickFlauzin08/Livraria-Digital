const formCadastro = document.getElementById("formCadastro");
const LivrosApiURL = "http://localhost:5110/api/Livros";
const divCards = document.getElementById("cards");

async function buscarLivro() {
  try {
    const resposta = await fetch(LivrosApiURL);
    if (!resposta.ok) {
      throw new Error(`Erro ao buscar dados:   ${resposta.status}`);
    }
    const dados = await resposta.json();
    divCards.innerHTML = "";
    dados.forEach((dado) => {
      console.log(dado.titulo);
      console.log(dado.precoFinal);
      let livroElement = document.createElement("div");

      livroElement.innerHTML = `
      <h2>${dado.titulo}</h2>
<p>Preço Final: R$ ${dado.precoFinal}</p>`
;

      divCards.appendChild(livroElement);
    });
  } catch (error) {
    console.log("Erro ao buscar os dados:", error);
  }
}
buscarLivro();

async function optionLivro() {
  try {
    const resposta = await fetch("http://localhost:5110/api/Autores");
    if (!resposta.ok) {
      throw new Error(`Erro ao buscar dados:   ${resposta.status}`);
    }
    const dados = await resposta.json();
    console.log("Dados recebidos:", dados);
    const selectAutores = document.getElementById("autor");
    selectAutores.innerHTML = "<option value='' >Selecione um Autor</option>";  // se quiser fazer no HTML pode fazer <option value='' selected>Selecione um Autor</option>

    dados.forEach((dado) =>{
      const option = document.createElement("option")
      option.value = dado.AutorId;
      option.textContent = dado.nome;
      selectAutores.appendChild(option); 
    });
  } catch (error) {
    console.log("Erro ao buscar os dados:", error);
  }
}

optionLivro();


async function cadastrarLivro(event) {
  event.preventDefault();
  
  const titulo = document.getElementById("tituloInput").value;
  const preco = parseFloat(document.getElementById("precoInput").value);

  try {
    const resposta = await fetch(LivrosApiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo: titulo,
        preco: preco,
        AutorId: 1,
      }),
    }); 

    if (!resposta.ok) {
      throw new Error(`Erro no servidor: ${resposta.status}`);
    }

    const mensagem = await resposta.text();
    console.log("Sucesso:", mensagem);

    formCadastro.reset();
    await buscarLivro();  // Atualiza a lista na tela
    
  } catch (error) {
    console.log("Erro ao cadastrar livro:", error);
    alert("Houve um erro ao salvar o livro.");
  }
}

formCadastro.addEventListener("submit", cadastrarLivro);
buscarLivro();

