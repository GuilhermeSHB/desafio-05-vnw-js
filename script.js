//1 - Crie um array que receba 5 itens e exiba no console.
let lista = [" Number", " Boolean", " Null", " String", "Undefined"];

//2 - Utilize um método para adicionar um nome ao inicio do array.
 
lista.splice(0,0, "Array");

//3 - Utilize um método para remover o último nome do array.

lista.splice(5, 1);


//4 - Utilize um método para adicionar dois nomes ao fim do array.

lista.splice(4,2,"Objeto","Atributo")

//5 - Utilize um método para remover o primeiro nome do array.

lista.splice(0,1);