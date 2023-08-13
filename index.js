import prompt from 'prompt-sync';
let ler = prompt();
 
console.log('iai comparça');
console.log('como se chama');
 
let nome = ler();

console.log('prazer');
console.log(nome);

//proxima

import prompt from 'prompt-sync';
let ler = prompt();


console.log('Oi, qual seu nome?');
let nome = ler();

console.log('boas vindas ' + nome);

console.log('fale um numero para eu calcular o dobro')
let numero = number(ler());

console.log('o dobro de ' + numero + 'é' )

//proxima

import prompt from 'prompt-sync'
let ler =  prompt();

console.log('seja bem vindo, ao programa de soma');
console.log('\n informe o primeiro numero');

let n1 = Number(ler());

console.log('\n informe o segundo numero');
let n2 = Number(ler());

let soma = n1 + n2
console.log('a soma de ' + n1 + ' + ' + n2 + ' é ' + soma);

//proxima

import prompt from 'prompt-sync'
let ler = prompt();

console.log('===ESSE PROGRAMA INFORMA SE VOCÊ ESTA COM FEBRE===');

console.log('\n informe sua temperatura');
let temp = Number(ler());

let febre = temp >= 37.5;

console.log('você está com febre? ' + febre);

//proxima

import { premio } from './premio.js'

import prompt from 'prompt-sync'
let ler = prompt()


console.log(' informe uma opção de 1 a 3')
let op = Number (ler())


let x = premio(op)

console.log(x)


export function  premio (a){

    let x = ''

    if ( a == 1)
    {
        x='voce ganhou uma viajem'
    }


    else if ( a == 2)
    {
        x='voce ganhou um pc gamer'
    }


    else if ( a == 3)
    {
        x='voce ganhou uma renovação do seu guarda-roupas'
    }


    else
    {
        x='voce não ganhou nada'
    }

    return x;

}

//proxima

import { mes } from './mes.js'

import prompt from 'prompt-sync'
let ler = prompt()

console.log('fale o numero de um mes')
let m = ler()

let x = mes(m)

console.log(x)


export function mes (a){
    let y = ''

    if (a == 1){
        y = 'janeiro'
    }

    
    else if (a == 2){
        y = 'fevereiro'
    }

    
    else if (a == 3){
        y = 'marco'
    }
    
    else if (a == 4){
        y = 'abril'
    }
    
    else if (a == 5){
        y = 'maio'
    }
    
    else if (a == 6){
        y = 'junho'
    }
    
    else if (a == 7){
        y = 'julho'
    }
    
    else if (a == 8){
        y = 'agosto'
    }
    
    else if (a == 9){
        y = 'setembro'
    }
    
    else if (a == 10){
        y = 'outubro'
    }
    
    else if (a == 11){
        y = 'novembro'
    }
    
    else if (a == 12){
        y = 'dezembro'
    }

    return y
}

//proxima

import { media } from './media.js'
import { result } from './media.js'

import prompt from 'prompt-sync'
let ler = prompt()


console.log(' informe suas tres notas para calcular a media')
let m1 = Number(ler())
let m2 = Number(ler())
let m3 = Number(ler())


let t = media (m1, m2, m3)

let  b = result (t)


console.log('a sua media é ' + t + ' \ne sua situação é ' + b)



export function media (a, b, c){
 
 
    let x = (a + b + c)/3
    
    return x.toFixed(1)
}

export function result (a){

    let situ = ''

    if ( a >=8){

        situ = 'aprovado com sucesso'
    }

    else if ( a >= 6 && a <8 ){

        situ = 'aprovado'
    }

    else if ( a >= 3 && a <6 ){

        situ = 'recuperação'
    }

    else if ( a >= 1 && a <3 ){

        situ = 'reprovado'
    }


    else {
        situ = 'desistente'
    }

    return situ
    
}

//proxima

import prompt from 'prompt-sync'
let ler = prompt()

import {farol} from './farol.js'

console.log('qual a cor que esta no semaforo')
    let cor = ler();

    let f = farol(cor);

    console.log(f)


export function farol (a){
    let x = ''

    if (a == 'verde'){
        x = 'atravesse'
    }

    else if (a == 'vermelho'){
        x = 'espere'
    }

    else{
        x = 'se é daltonico?'
    }

    return x
}

//proxima

import prompt from 'prompt-sync'
let ler = prompt()

import {orca} from './orca.js'



console.log (' informe seu orçamento famliar e depois os gastos ')

let og = Number(ler())
let gg = Number(ler())

let f = orca (og, gg)

console.log(f)


export function orca (a, b) {
 
    let x = ''

    if(a >= b  ) {

        x = 'voce esta dentro do orçamento'
    }

    else if( a < b){

        x = ' voce esta fora do orçamento'
    }

    return x
    
}

//proxima

import prompt from 'prompt-sync'
let ler= prompt();

console.log('esse programa calcula a media \n informe o tres notas')
let n1 = Number(ler())

let n2 = Number(ler())
let n3 = Number(ler())

let r = media(n1, n2, n3)

console.log(r)

function media(a, b, c) {
    let r = (a + b + c) / 3;

    return r.toFixed(1);
}

//proxima

import prompt from 'prompt-sync'
let ler= prompt();

console.log('numero1:')
let n1 = Number(ler())

console.log('numero2:')
let n2 = Number(ler())


console.log('numero3:')
let n3 = Number(ler())

let x = dobro(n1)

let z = dobro(n2)

let y = dobro(n3)

console.log('o dobro do 1° é ' + x + ' \no dobro do 2° é ' + z + '\no dobro do 3° é ' + y  )

function dobro (a){
  let x = a * 2;
  return x;
}

//proxima

import prompt from 'prompt-sync'
let ler = prompt();

import { media } from './media.js';

console.log('informe suas notas')

let n1 = Number(ler())
let n2 = Number(ler())
let n3 = Number(ler())

let x = media (n1, n2, n3)

console.log('sua media é ' + x.toFixed(1))


export function media (a, b , c) {
 
    let m = (a + b + c) /3;

    return m
}

//proxima

import prompt from 'prompt-sync'
let ler = prompt();

import { mult } from './compra.js'
import { desconto } from './compra.js'

console.log('informe a quantidade de camisas de R$25 vc comprou')
let camisa = Number(ler())

let x = mult(camisa)
let z = desconto(x) 

console.log(' o valor total da compra é ' + x + ' e com o desconto de 15% ficou ' + z)

export function mult(a){
    let x = 25 * a 

    return x;
}


export function desconto(a){
    let y = (a * 15) / 100
    
    let z = a - y

    return z
}

//proxima

import prompt from 'prompt-sync'
let ler = prompt();

import { temp } from './temp.js'

console.log('informe a temperatura')
let tem = ler();

let aa = temp(tem)

console.log(aa)


export function temp(a){
    let z = a >= 27.5;
    
    return z
}


//proxima

import prompt from 'prompt-sync'
let ler = prompt();

import { cor } from './cor.js'

console.log('informe a 1° cor');
let cor1 = ler();

console.log('informe a 2° cor');
let cor2 = ler();

let x = cor(cor1);
let z = cor(cor2);

console.log('a primeira cor é uma cor primaria? ' + x + ' a segunda cor é uma cor primaria? ' + z)


export function cor (a){
    let y = a == 'azul' || a == 'amarelo' || a == 'vermelho';

    return y
}

//proxima

import prompt from 'prompt-sync'
let ler = prompt();

import { media } from './media.js';

console.log('isso informará se você passou, OBS: nota min. 6')
console.log('informe suas notas')

let n1 = Number(ler())
let n2 = Number(ler())
let n3 = Number(ler())

let x = media (n1, n2, n3)

console.log(x)


export function media (a, b , c) {
 
    let m = (a + b + c) /3;

    let p = m >=  6

    return p
}