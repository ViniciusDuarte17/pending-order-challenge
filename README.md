

<h1 id= "top" align="center">
Desafio cruzamento de pedidos e notas
</h1>

<p align="center">
  <a href="#sobre">Sobre</a> &#xa0;|&#xa0; 
  <a href="#funcionalidade">Funcionalidade</a> &#xa0;|&#xa0;
  <a href="#tecnologias">Tecnologias utilizadas</a> &#xa0;|&#xa0;
  <a href="#orientar">Orientações</a> &#xa0;|&#xa0;  
  <a href="#desenvolvedor">Desenvolvedor</a> 
</p>

<h2 id="sobre">
Sobre o projeto
</h2>

<p align="center">
 Programa cuja execução cruza pedidos e notas gerando uma listagem de pedidos pendentes.
</p>

<h2 id="funcionalidade">
Funcionalidade do projeto:
</h2>

 - ```Leitura de arquivos de texto e conversão para JSON.```
<p align="center">
Implementei um algoritmo capaz de ler arquivos de texto e convertê-los em um formato de JSON válido. Dado um caminho onde o arquivo se encontra, o algoritmo percorre cada arquivo e os concatena em um único arquivo, transformando-os em JSON.
</p>

- ```Lendo todos os pedios em formato JSON.```

<p align="center">
 Implementei um algoritmo que lança exceção caso algum valor não corresponda ao tipo descrito ou caso haja repetição do número do item em um mesmo pedido. Além disso, o algoritmo também ordena os pedidos em ordem crescente.
</p>

- ```Lendo notas em formato JSON.```
<p align="center">
O algoritmo verifica se cada valor corresponde ao tipo descrito e verifica se há duplicação de números de itens dentro do mesmo pedido. Se algum valor não corresponder ao tipo descrito ou se houver duplicação de números de itens dentro do mesmo pedido, o algoritmo lançará uma exceção.
</p>

- ```Geração de listagem de pedidos pendentes.```

<p align="center">
 Inicialmente, o algoritmo realiza o cruzamento de pedidos e notas para identificar se existem produtos pendentes. 
Um item é considerado pendente se não teve toda a sua quantidade atendida pela soma das quantidades informadas para esse item nas notas lidas.
Após essa etapa, o algoritmo gera um arquivo de texto com a lista de pedidos pendentes, contendo o ID do pedido, número do item,
 valor total do pedido, quantidade a receber do valor total do item pendente e a quantidade faltante para que o produto não fique pendente.
</p>

<h2 id="tecnologias">
🛠 Tecnologias  usadas na construção do projeto
</h2>

* Node.js

<h2 id="orientar">
 Orientação para rodar aplicação localmente
</h2>

Clone o projeto

```bash
git clone https://github.com/ViniciusDuarte17/pending-order-challenge.git
```
Instale as dependências

```bash
npm install
```
Inicie o servidor

```
npm run dev 
```
```
Observação: o comando npm run dev gera o arquivo de pedidos pendentes sem realizar o build do projeto. Caso deseje utilizar o projeto já buildado, utilize o comando npm run start.
```

 <h2 id="desenvolvedor">👷🏻‍♂ Desenvolvedor</h2>
<table> 
<tr>
  <td align="center"><a href="https://github.com/ViniciusDuarte17"><img style="border-radius: 50%" src="https://user-images.githubusercontent.com/92999708/210431021-9923435c-eefe-4757-b8e2-e441910a4e88.png" width="100px" alt=""/>
 <br />
 <sub><b>Vinicius Duarte</b></sub></a> <a href="https://github.com/ViniciusDuarte17">👩🏻‍💻</a></td>
 </tr>
</table>

<a href="#top">Voltar para o topo 🔝</a>
