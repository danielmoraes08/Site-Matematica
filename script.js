const habilidadeSelect = document.getElementById('habilidadeSelect');
const subHabilidadeSelect = document.getElementById('subHabilidadeSelect');
const subHabilidadeContainer = document.getElementById('subHabilidadeContainer');
const explicacao = document.getElementById('explicacao');
const textoExplicacao = document.getElementById('textoExplicacao');
const imgMapaMental = document.getElementById('imgMapaMental');
const resetButton = document.getElementById('resetButton');
const habilidadeDescricao = document.getElementById('habilidadeDescricao');

const subHabilidades = {
    "EM13MAT301": {
        descricao: "Resolver e elaborar problemas do cotidiano, da Matemática e de outras áreas do conhecimento, que envolvem equações lineares simultâneas, usando técnicas algébricas e gráficas, com ou sem apoio de tecnologias digitais.",
        "Sistemas Lineares": {
            descricao: `Os sistemas lineares são um conjunto de duas ou mais equações lineares que compartilham as mesmas variáveis. A solução de um sistema linear é o ponto ou conjunto de pontos onde todas as equações do sistema se interceptam. Estes sistemas são amplamente usados para modelar problemas em que há múltiplas condições que devem ser atendidas simultaneamente. Aplicações práticas incluem problemas de otimização, engenharia e até mesmo na análise de redes econômicas. Métodos como substituição, adição e o uso de matrizes são ferramentas comuns para encontrar a solução dos sistemas.`,
            mapa: "Images/SistemasLineares.png"
        },
        "Matriz": {
            descricao: `Uma matriz é uma tabela organizada em linhas e colunas que pode ser usada para representar um sistema de equações lineares. As operações com matrizes, como adição, multiplicação e inversão, são fundamentais para a resolução de sistemas lineares, especialmente em problemas de maior complexidade. Além disso, as matrizes têm aplicações em computação gráfica, modelagem de redes de computadores, algoritmos de aprendizado de máquina e até na física, como na representação de transformações lineares em espaços vetoriais.`,
            mapa: "Images/Matriz.png"
        }
    },
    "EM13MAT305": {
        descricao: "Resolver e elaborar problemas com funções logarítmicas nos quais seja necessário compreender e interpretar a variação das grandezas envolvidas, em contextos como os de abalos sísmicos, pH, radioatividade, Matemática Financeira, entre outros.",
        "Função Logarítmica": {
            descricao: `A função logarítmica é a inversa da função exponencial. Ela é fundamental em diversos campos da matemática, pois ajuda a resolver equações em que a variável aparece como um expoente. O logaritmo permite transformar uma multiplicação de grandes números em uma soma, facilitando cálculos complexos. Além disso, a função logarítmica é crucial para modelar fenômenos de crescimento e decaimento, como no cálculo de juros compostos, em populações biológicas e até em processos físicos como a desintegração radioativa.`,
            mapa: "Images/funcaologaritmica.png"
        },
        "Logaritmo": {
            descricao: `O logaritmo é a operação matemática que resolve a equação exponencial. Por exemplo, o logaritmo de 1000 na base 10 (log₁₀) é 3, porque 10³ = 1000. O logaritmo tem várias aplicações no mundo real, como na escala Richter de terremotos, onde ele é usado para medir a magnitude dos terremotos de forma a representar uma ampla gama de valores de forma compacta. Também é utilizado em algoritmos de criptografia, na análise de algoritmos e em sistemas de medição como o pH na química.`,
            mapa: "Images/logaritmo.png"
        }
    },
    "EM13MAT403": {
        descricao: "Analisar e estabelecer relações, com ou sem apoio de tecnologias digitais, entre as representações de funções exponencial e logarítmica expressas em tabelas e em plano cartesiano, para identificar as características fundamentais (domínio, imagem, crescimento) de cada função.",
        "Potência": {
            descricao: `As funções de potência envolvem uma base elevada a um expoente. Essas funções são essenciais para descrever muitos fenômenos de crescimento rápido, como a multiplicação exponencial de bactérias em uma população, o crescimento de investimentos financeiros com juros compostos, ou o aumento de radiação em reações nucleares. As potências também são úteis na física, especialmente em leis como a da gravitação de Newton, que usa uma função de potência para descrever a atração gravitacional entre dois corpos.`,
            mapa: "Images/potencia.png"
        },
        "Função Exponencial": {
            descricao: `A função exponencial é uma função matemática que descreve o crescimento ou decaimento rápido de uma quantidade. Ela é modelada por \(f(x) = a^x\), onde \(a\) é uma constante positiva. As funções exponenciais são amplamente utilizadas para modelar fenômenos naturais e econômicos, como o crescimento populacional, a decomposição de substâncias químicas, e os fluxos de capital no mercado financeiro. Além disso, elas estão no coração das equações diferenciais que modelam muitos sistemas dinâmicos, como o comportamento de circuitos elétricos, sistemas biológicos e mesmo o comportamento das taxas de juros.`,
            mapa: "Images/funcaoexponencial.png"
        }
    },
    "MatFinan": {
        descricao: "Compreender e aplicar os principais conceitos de matemática financeira, com ou sem o uso de tecnologias digitais, para a resolução de problemas envolvendo situações do cotidiano, como financiamentos, investimentos e planejamento orçamentário.",
        "SAC": {
            descricao: `O Sistema de Amortização Constante (SAC) é um modelo de financiamento em que o valor amortizado em cada parcela é constante, fazendo com que o valor total das prestações diminua ao longo do tempo. Esse sistema é amplamente utilizado em financiamentos imobiliários, pois favorece o devedor com parcelas decrescentes e menor pagamento total de juros ao final do contrato. A compreensão do SAC permite que estudantes analisem criticamente propostas de financiamento e façam escolhas mais conscientes.`,
            mapa: "Images/sac.png"
        },
        "Price": {
            descricao: `O Sistema Francês de Amortização (Tabela Price) é um modelo de financiamento caracterizado por parcelas fixas ao longo do tempo. Embora a prestação se mantenha constante, a composição entre amortização e juros varia: inicialmente, paga-se mais juros e menos amortização. Esse sistema é comumente utilizado em empréstimos pessoais e financiamentos de veículos. Entender o funcionamento da Tabela Price é essencial para comparar alternativas de crédito e compreender o impacto dos juros compostos sobre o valor total pago.`,
            mapa: "Images/price.png"
        }
    },
    "FigGeo": {
        descricao: "Reconhecer, representar e resolver problemas envolvendo figuras geométricas planas e espaciais, utilizando propriedades e relações entre elementos geométricos, além de realizar estimativas e medições em contextos diversos.",
        "Figuras Geométricas": {
            descricao: `As figuras geométricas são formas estudadas na geometria, como triângulos, quadrados, retângulos, círculos, prismas e cilindros. O estudo dessas figuras envolve o reconhecimento de propriedades como lados, ângulos, perímetros, áreas e volumes. A geometria está presente em diversas situações cotidianas, como na arquitetura, design, construção civil e até em jogos digitais. O desenvolvimento da percepção espacial e a capacidade de visualização são habilidades fundamentais que a geometria promove.`,
            mapa: "Images/figurasgeometricas.png"
        }
    },
    "Trigonometria": {
        descricao: "Compreender e aplicar as razões trigonométricas no estudo de triângulos e suas aplicações em contextos diversos, como engenharia, navegação, astronomia e construções.",
        "Trigonometria": {
            descricao: `A trigonometria é um ramo da matemática que estuda as relações entre os ângulos e os lados dos triângulos. As principais razões trigonométricas — seno, cosseno e tangente — permitem resolver problemas envolvendo medidas indiretas, como a altura de edifícios ou a distância entre dois pontos inacessíveis. Além da geometria, a trigonometria é fundamental em disciplinas como a física, a engenharia e a astronomia, pois permite modelar fenômenos periódicos como ondas sonoras, luminosas e elétricas.`,
            mapa: "Images/trigonometria.png"
        }
    }
    
};

habilidadeSelect.addEventListener('change', function() {
    const habilidade = habilidadeSelect.value;
    
    if (habilidade) {
        habilidadeDescricao.textContent = subHabilidades[habilidade].descricao;
        subHabilidadeContainer.style.display = 'block';
        subHabilidadeSelect.innerHTML = '<option value="">Selecione um tópico...</option>';

        Object.keys(subHabilidades[habilidade]).forEach(subHabilidade => {
            if (subHabilidade !== "descricao") {
                let option = document.createElement('option');
                option.value = subHabilidade;
                option.textContent = subHabilidade;
                subHabilidadeSelect.appendChild(option);
            }
        });

        explicacao.style.display = 'none';
    } else {
        habilidadeDescricao.textContent = "";
        subHabilidadeContainer.style.display = 'none';
        explicacao.style.display = 'none';
    }
});


subHabilidadeSelect.addEventListener('change', function() {
    const habilidade = habilidadeSelect.value;
    const subHabilidade = subHabilidadeSelect.value;
    
    if (subHabilidade) {
        explicacao.style.display = 'block';
        textoExplicacao.textContent = subHabilidades[habilidade][subHabilidade].descricao;
        imgMapaMental.src = subHabilidades[habilidade][subHabilidade].mapa;
    } else {
        explicacao.style.display = 'none';
    }
});

resetButton.addEventListener('click', function() {
    habilidadeSelect.value = '';
    habilidadeDescricao.innerHTML = '';
    subHabilidadeSelect.innerHTML = '<option value="">Selecione um tópico...</option>';
    subHabilidadeContainer.style.display = 'none';
    explicacao.style.display = 'none';
});


const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.querySelector(".close");

imgMapaMental.addEventListener("click", function() {
    if (imgMapaMental.src) {
        modal.style.display = "flex";
        modalImg.src = imgMapaMental.src;
    }
});

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
