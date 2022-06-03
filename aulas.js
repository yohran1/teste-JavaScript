

nomes = ["Yohran", "Jade", "Adri"];
notaA = [9.0, 6.5, 4.5];
notaB = [8.0, 8.0, 8.5];
conceito = "  "

function media ( n1, n2 ) {
    return ( n1 + n2 ) /2;
}

 c = function ( media ) {
if ( media >= 8 ) {
    conceito = "Ótimo"
}
else if ( media >= 7.0 ) {
    conceito = "Bom"
}
else {
    conceito = "Regular"
}

switch ( conceito ) {

    case "Ótimo": 
        return "Parabéns, vc é um ótimo aluno!!";
        break;

    case "Bom": 
    return "Você está quase perfeito, continue assim!!";
    break;

    case "Regular": 
        return "Estude mais um pouco";
        break;

    default:
        return "Houve algum erro404!";
        break;
}
}
function passou ( media ) {

    if ( media >= 7 ) {
        return "Aprovado"
    }
    else {
        return "Reprovado"
    }
}

for ( index in nomes ) {

     n1 = notaA[index];
     n2 = notaB[index];

     m = media ( n1, n2 );

    console.log(nomes[index] + " | " +
                n1 + " | " +
                n2 + " ( " +
                m + " - " +
                passou(m) + " )         " +
                c(m)
                )
}


// ----------------------------------------------------------
/*
function criarAluno(nome, n1, n2) {

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) /2;
        }
    }
}
var turma = [ 
    criarAluno( "Yohran", 9, 6 ),
    criarAluno( "Igor", 7, 4 ),
    criarAluno( "Mariana", 8, 7.5 )

]

var aluno = turma[0]; 

turma.forEach( function(elemento) {

    console.log(elemento)
})
*/
//--------------------------------------------------------------
/*
function obj ( n, s ) {

    this.nome = n;
    this.sobrenome = s
}



var a = new obj( "Igor", "Oliveira" );

console.log(a["nome"])
*/

//-------------------------------------------------------------------

/*
var nomes = ["Yohran", "Jade", "Adri"];
var notaA = [7.0, 6.5, 9.5];
var notaB = [8.0, 7.0, 8.5];

function media ( n1, n2 ) {

    return ( n1 + n2 ) /2;
}


function passou ( media ) {

    if ( media >= 7 ) {
        return "Aprovado"
    }
    else {
        return "Reprovado"
    }
}

for ( var index in nomes ) {

    var n1 = notaA[index];
    var n2 = notaB[index];

    var m = media ( n1, n2 );

    console.log(nomes[index] + ": " +
                n1 + " | " +
                n2 + " | " +
                m + " | " +
                passou(m)
                )
}
*/
// --------------------------------------------------------------------
//
//