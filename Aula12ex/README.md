 		Javascript [40 Horas]
	
**Aula 1**

- HTML: Conteúdo
- CSS: Estilo
- JS: Interações

**Aula 2**

- Ao final do curso, voltar e assistir novamente.
Link: https://www.youtube.com/watch?v=rUTKomc2gG8


**Aula 3**

- Sabe que empresa criou o JavaScript?

${Primeiros passos em JS}

- Minuto 11:15
Livros recomendados: JavaScript - O guia definitivo, JavaScript - O guia do programador

**Aula 4**

- Introduziu o JavaScript, falando de como colocar títulos alterar cores e a diferença de 'alert', 'confirm' e 'prompt'.

**Aula 5**

- Fala um pouco sobre NodeJS e explica oque é variável e como criar, e sobre os tipos primitivos.

- string = cadeias de caracteres
- Number = Todos os números, seja ele inteiro, decimal ou com virgula.
- True our false = boolean

**Aula 6**

*Reconhecer dados como números:*
- Number.parseInt(n) = Número inteiro
- Number.parseFloat(n) = Número real, com virgula
- Number(n) = Qualquer número, seja ele qual for recebido

*Reconhecer dados como string:*
- String(n)
- n.toString()

*Formatando String*
	var s = 'JavaScript'
- 'Estou aprendendo s' > não faz interpolação
- 'Estou aprendendo' + s > usa concatenação
- `Estou aprendendo ${s}` > usa template string
- s.length > Quantos caracteres a string tem
- s.toUpperCase() > tudo para 'MAIÚSCULAS'
- s.toLowerCase() > tudo para 'minúsculas'

- Quebra de linha = <br/>

*Formatando Números*
	var n1 = 1543.5
- n1.toFixed(2) > Deixa com duas casas decimais
- n1.toFixed(2).replace('.', ',') > Trocar '.' por ','
-  n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) > Mudar estilo de moeda

**Aula 7**

*Operadores*
-Aritméticos ('+', '-', '*', '/', '%', '**')
% = Resto da divisão
** = Potencia

*Atribuição*  
- 'n = n+4' é igual a 'n += 4'
	var n = 3
- n = n + 2 > n = 5
- n += 2 > n = 5

*Incremento*
var n = 10
- n++ > adiciona 1 e fica 11
- n-- > subtrai 1 e volta a ser 10

**Aula 8**
= -> Receber
== -> Igual 
=== -> Igual e do mesmo tipo

*Relacionais*
5 > 2 -> True	|     7 < 4 -> False
8 >= 8 -> True	|     9 <= 7 -> False
5 == 5 -> True	|     4 != 4 -> False

*Logicos*
- ! = Negação
- && = Conjunção (e)
- || = Dijunção (ou)

Ex:
- idade >=15 && idade <= 17 // a idade está entre 15 e 17?
- estado == 'RJ' || estado == 'SP' // O estado é RJ ou SP?
- salário > 1500 && sexo != 'm' // o salário é acima de 1500 e não é homem?

*Precedência*
1. () ** / ...
2. > < >= ...
3. !
4. &&
5. ||

*Ternário*
Teste ? True : False 
Ex: 
média>=7.0 ? 'Aprovado' : 'Reprovado'

**Aula 9** ++
id -> #
class -> .

DOM - Document Object Model
	Por marca
- GetElementsByTagName()
	Por ID
- GetElementById()
	Por Nome
- GetElementsByName()
	Por classe
- GetElementByClassName()
	Por seletor
- querySelector()
- querySelectorAll

Assistir aula 1 novamente

**Aula 10**
https://developer.mozilla.org/en-US/docs/Web/Events

-