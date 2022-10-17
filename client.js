const axios = require("axios");
const { PassThrough } = require("stream");

const options_T = {
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
};

function soma(a, b) {
    return a+b;
}

function tamanhoString(string) {
    return string.length;
}

function nome_usuario(email) {
    return email.split("@")[0];
}

function jaca_wars(v, theta) {
    dist =  v**2 * Math.sin(2*theta* Math.PI/180) / 9.8;
    if (dist < 98) {
        return -1;
    } 
    else if (dist > 102) {
        return 1;
    }
    else {
        return 0;
    }
}

function anobissexto(ano) {
    if (ano % 4 == 0) {
        if (ano % 100 == 0) {
            if (ano % 400 == 0) {
                return true;
            }   
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}

function volume_pizza(raio, altura) {
    return Math.round(Math.PI * raio**2 * altura);
}

function mru(s0, v, t) {
    return s0 + v*t;
}

function inverte_string(string) {
    return string.split("").reverse().join("");
}

function soma_valores(objeto) {
    return Object.values(objeto).reduce((a, b) => a + b, 0);
}

function eh_primo(n) {
    if (n == 1) {
        return false;
    }
    else if (n == 2) {
        return true;
    }
    else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}

function enesimo_primo(n) {
    var primos = [];
    var i = 2;
    while (primos.length < n) {
        if (eh_primo(i)) {
            primos.push(i);
        }
        i++;
    }
    return primos[n-1];
}

function maior_prefixo_comum(lista){
    var palavra = "";
    for (var i = 0; i < lista.length; i++) {
        var check =  "";
        var primeira = lista[i];
        var segunda = lista[i+1];
        var lista_p1 = primeira.split("");
        if (segunda != undefined) {
            lista_p2 = segunda.split("");
            for (var j = 0; j < lista_p1.length; j++) {
                if (lista_p1[j] == lista_p2[j]) {
                    check += lista_p1[j];
                }
                else {
                    break;
                }
            }
        }
        
        if (check.length > palavra.length) {
            palavra = check;
        }
    }
    return palavra;

}


function soma_segundomenor_segundomaior(numeros) {
    numeros.sort((a, b) => a - b);
    return numeros[1] + numeros[numeros.length-2];
}

function eh_palindromo(string) {
    return string == string.split("").reverse().join("");
}

function conta_palindromo(lista) {
    var cont = 0;
    for (var i = 0; i < lista.length; i++) {
        if (eh_palindromo(lista[i])) {
            cont++;
        }
    }
    return cont;
}

function soma_string_de_numeros(lista) {
    return lista.map(Number).reduce((a, b) => a + b, 0);
}

async function soma_requisicoes(endpoints, options) {
    var soma = 0;
    for (var i = 0; i < endpoints.length; i++) {
        var response = await axios.get(endpoints[i], options);
        soma += response.data;
    }
    return soma;
}

async function caca_tesouro(endpoint, options) {
    var data  = endpoint;
    while (typeof data == "string") {
        response = await axios.get(data, options);
        data = response.data;
    }
    return data;
}





axios.post('https://tecweb-js.insper-comp.com.br/token', { 'username': 'felipemt3' }, options_T)
.then((response) => {
    const token = response.data.accessToken;
    const options = {
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + token}
    };

    axios.get("https://tecweb-js.insper-comp.com.br/exercicio", options)
    .then((response) => { 
        console.log(response.data);

        resposta = soma(response.data.soma.entrada.a, response.data.soma.entrada.b);
        axios.post('https://tecweb-js.insper-comp.com.br/exercicio/soma', { 'resposta': resposta }, options)
        .then((response) => {
            console.log(response.data, "soma");
        });

        resposta = tamanhoString(response.data["tamanho-string"].entrada.string);
        axios.post('https://tecweb-js.insper-comp.com.br/exercicio/tamanho-string', { 'resposta': resposta }, options)
        .then((response) => {
            console.log(response.data, "tamanho-string");
        });

        resposta = nome_usuario(response.data["nome-do-usuario"].entrada.email);
        axios.post('https://tecweb-js.insper-comp.com.br/exercicio/nome-do-usuario', { 'resposta': resposta }, options)
        .then((response) => {
            console.log(response.data, "nome");
        });

        resposta = jaca_wars(response.data["jaca-wars"].entrada.v, response.data["jaca-wars"].entrada.theta);
        axios.post('https://tecweb-js.insper-comp.com.br/exercicio/jaca-wars', { 'resposta': resposta }, options)
        .then((response) => {
            console.log(response.data, "jaca");
        });

        resposta = anobissexto(response.data["ano-bissexto"].entrada.ano);
        axios.post('https://tecweb-js.insper-comp.com.br/exercicio/ano-bissexto', { 'resposta': resposta }, options)
        .then((response) => {
            console.log(response.data, "bissexto");
        });
        
        resposta = volume_pizza(response.data["volume-da-pizza"].entrada.z, response.data["volume-da-pizza"].entrada.a);
        axios.post('https://tecweb-js.insper-comp.com.br/exercicio/volume-da-pizza', { 'resposta': resposta }, options)
        .then((response) => {
            console.log(response.data, "volume");
        });

        resposta = mru(response.data["mru"].entrada.s0, response.data["mru"].entrada.v, response.data["mru"].entrada.t);
        axios.post('https://tecweb-js.insper-comp.com.br/exercicio/mru', { 'resposta': resposta }, options)
        .then((response) => {
            console.log(response.data, "mru");
        });

        resposta = inverte_string(response.data["inverte-string"].entrada.string);
        axios.post('https://tecweb-js.insper-comp.com.br/exercicio/inverte-string', { 'resposta': resposta }, options)
        .then((response) => {
            console.log(response.data, "inverte");
        });

        resposta = soma_valores(response.data["soma-valores"].entrada.objeto);
        axios.post('https://tecweb-js.insper-comp.com.br/exercicio/soma-valores', { 'resposta': resposta }, options)
        .then((response) => {
            console.log(response.data, "soma-valores");
        });

        resposta = enesimo_primo(response.data["n-esimo-primo"].entrada.n);
        axios.post('https://tecweb-js.insper-comp.com.br/exercicio/n-esimo-primo', { 'resposta': resposta }, options)
        .then((response) => {
            console.log(response.data, "primo");
        });

        resposta = maior_prefixo_comum(response.data["maior-prefixo-comum"].entrada.strings);
        axios.post('https://tecweb-js.insper-comp.com.br/exercicio/maior-prefixo-comum', { 'resposta': resposta }, options)
        .then((response) => {
            console.log(response.data, "prefixo");
        });

        resposta = soma_segundomenor_segundomaior(response.data["soma-segundo-maior-e-menor-numeros"].entrada.numeros);
        axios.post('https://tecweb-js.insper-comp.com.br/exercicio/soma-segundo-maior-e-menor-numeros', { 'resposta': resposta }, options)
        .then((response) => {
            console.log(response.data, "segundo soma");
        });

        resposta = conta_palindromo(response.data["conta-palindromos"].entrada.palavras);
        axios.post('https://tecweb-js.insper-comp.com.br/exercicio/conta-palindromos', { 'resposta': resposta }, options)
        .then((response) => {
            console.log(response.data, "palindromo");
        });

        resposta = soma_string_de_numeros(response.data["soma-de-strings-de-ints"].entrada.strings);
        axios.post('https://tecweb-js.insper-comp.com.br/exercicio/soma-de-strings-de-ints', { 'resposta': resposta }, options)
        .then((response) => {
            console.log(response.data, "soma-lista");
        });

        soma_requisicoes(response.data["soma-com-requisicoes"].entrada.endpoints, options)
        .then((resposta) => {
            axios.post('https://tecweb-js.insper-comp.com.br/exercicio/soma-com-requisicoes', { 'resposta': resposta }, options)
            .then((response) => {
                console.log(response.data, "soma-requisicoes");
            });
        });
        
        caca_tesouro(response.data["caca-ao-tesouro"].entrada.inicio, options)
        .then((resposta) => {
            axios.post('https://tecweb-js.insper-comp.com.br/exercicio/caca-ao-tesouro', { 'resposta': resposta }, options)
            .then((response) => {
                console.log(response.data, "tesouro");
            });
        });



    });
});





