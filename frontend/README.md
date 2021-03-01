O projeto consiste em recuperar dados da API do themealdb e salvar em um banco de dados os alimentos pesquisados. 

O desenvolvimento foi realizado utilizando ReactJS como ferramenta, utilizando dependência o styled componentes para a estilização dos componentes. 

O sistema faz uso de três componentes:

<h2 style="text-align: center">Header</h2>
<img style="width: 80%; margin: auto" src="./component-header.png" alt="Imagem do Componente Header">
<p style="text-align: justify">Este componente é o cabeçalho da página, contendo apenas o título de nosso sistema. </p>

<h2 style="text-align: center">Container</h2>
<img style="width: 80%; margin: auto" src="./component-container.png" alt="Imagem do Componente Container">
<p style="text-align: justify">Este componente fica responsável pelo resto da aplicação. Nele contem um formulário onde o usuário insere o nome de um alimento e realiza uma busca. O componente Container tem em seu corpo, um outro componente, responsável por renderizar cada item recuperado no banco de dados.  </p>

<h2 style="text-align: center">ListItem</h2>
<img style="width: 80%; margin: auto" src="./component-listItem.png" alt="Imagem do Componente ListItem">
<p style="text-align: justify">Este componente é renderizado à cada item encontrado no banco de dados. As informações contidas nele incluem: Título do alimento, sua categoria, de onde que ele é, sua foto e por fim, as instruções para sua realização.  </p>


<h2 style="text-align: center">SearchedMeals</h2>
<img style="width: 80%; margin: auto" src="./searched-meals-full-screen" alt="Imagem da Aplicação por Completa">
<p style="text-align: justify">A aplicação possui responsividade, assumindo um layout agradável para todos os tamanhos diferentes de tela, alterando principalmente o comportamento do component ListItem, alterando levemente seu layout: </p>
<img style="margin: auto" src="./component-listitem-responvididade.png" alt="Imagem do component ListItem Responsivo">


<h2 style="text-align: center">Backend</h2>
A aplicação conta com um backend com o objetivo de armazenar os alimentos procurados. No frontend essa rota é chamada após a validação de que o alimento existe na API do Themealsdb, apenas salvando as buscas que obtiveram sucesso. 

O Backend foi criado com o express e também foi utilizado como dependência o axios, para permitir acesso do frontend da aplicação. 