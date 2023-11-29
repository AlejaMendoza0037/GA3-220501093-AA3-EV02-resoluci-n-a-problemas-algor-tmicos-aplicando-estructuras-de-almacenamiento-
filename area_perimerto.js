
function calcularFigura(tipo, medidas) {
    switch (tipo) {
        case 'cuadrado':
            const lado = medidas[0];
            const areaCuadrado = lado * lado;
            const perimetroCuadrado = 4 * lado;
            return `Área del cuadrado: ${areaCuadrado}, Perímetro del cuadrado: ${perimetroCuadrado}`;
        case 'rectangulo':
            const base = medidas[0];
            const altura = medidas[1];
            const areaRectangulo = base * altura;
            const perimetroRectangulo = 2 * (base + altura);
            return `Área del rectángulo: ${areaRectangulo}, Perímetro del rectángulo: ${perimetroRectangulo}`;
        
        default:
            return 'Figura no reconocida';
    }
}


const tipoFigura = 'cuadrado'; 
const medidasFigura = [5]; 

const resultado = calcularFigura(tipoFigura, medidasFigura);
console.log(resultado);
