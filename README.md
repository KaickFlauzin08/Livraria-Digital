# 📚 Livraria Digital

Uma aplicação web full-stack simples e eficiente para o gerenciamento de uma livraria, permitindo o cadastro de livros vinculados a autores e a visualização dinâmica do acervo através de cards.

---

## 🚀 Tecnologias Utilizadas

### **Back-end**
* **C# / .NET Core**: Linguagem e framework principal.
* **ASP.NET Core Web API**: Criação dos endpoints RESTful.
* **Entity Framework Core**: ORM para comunicação com o banco de dados.
* **Swagger**: Documentação e teste da API.

### **Front-end**
* **HTML5 & CSS3**: Estrutura e estilização da interface.
* **JavaScript (ES6+)**: Consumo da API via `Fetch API` e manipulação dinâmica do DOM.

---

## 🛠️ Funcionalidades

* **Listagem de Livros:** Exibição dinâmica de cards contendo título, nome do autor e preço final.
* **Cadastro de Livros:** Formulário para inserção de novos títulos com seleção de autor via dropdown (Select).
* **Gerenciamento de Autores:** Busca automática de autores cadastrados para preenchimento de opções no formulário.
* **Cálculo de Preço:** Exibição do preço final formatado diretamente nos cards.

---

## 🔧 Como Executar o Projeto

### 1. Pré-requisitos
* [.NET SDK](https://dotnet.microsoft.com/download) instalado.
* Um navegador moderno (Chrome, Edge, Firefox).
* Editor de código (VS Code ou Visual Studio).

### 2. Configurando o Back-end
1. Navegue até a pasta da API no seu terminal.
2. Execute o comando para rodar o projeto:
   ```bash
   dotnet run
