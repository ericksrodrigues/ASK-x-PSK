/*
 * 
 * Atividade Complementar: Disciplina de Sistemas de Comunicação
 * Curso: Engenharia da Computação - Universidade de Pernambuco
 * Profesosr: Carmelo Filho
 * Aluno: Ericks da Silva Rodrigues
 * 
 * 
 */
function computarChart(amp, exp) {
    google.charts.load('current', {'packages': ['line']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = new google.visualization.arrayToDataTable(calcularDistancia(parseInt(amp), parseInt(exp)));
        var options = {
            chart: {
                title: 'Gráfico ASK x PSK',
                subtitle: 'Relação Distância x Expoente de base Binária',
               },
            
            width: 900,
            height: 500,                      
        };
        
        var chart = new google.charts.Line(document.getElementById('chart'));

        chart.draw(data, options);
    }
}

//Função responsável por retornar o vetor da forma a qual a API utilizada possa plotar os dados
function calcularDistancia(amp, exp) {
    var primary_array = [['2^n Bits', 'ASK', 'PSK']];
    for (i = 1; i <= exp; i++) {
        primary_array.push([i, calcularDistanciaASK(amp, i), calcularDistanciaPSK(amp, Math.pow(2, i))]);
    }
    return primary_array;
}

//Função responsável por calcular a distancia entre os bits do PSK
function calcularDistanciaPSK(amp, value) {
    console.log(Math.cos(2*Math.PI));
    return Math.sqrt(2*Math.pow(amp, 2) - 2 * Math.pow(amp, 2) * Math.cos(2*Math.PI/value));
}

//Função responsável por calcular a distância entre os bits do ASK
function calcularDistanciaASK(amp, i) {
    return amp / (Math.pow(2, i) - 1);
}