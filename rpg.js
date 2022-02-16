var prompt = require('prompt-sync')();

console.clear();
console.log('One piece rpg');
console.log('Resumo da historia');
console.log();
console.log(
    'O personagem principal da série, Monkey D. Luffy, é apresentado quando criança, junto com Shanks, um pirata que lhe serve de inspiração. Depois de entrar em conflito com um bandido das montanhas em um bar, é revelado que Luffy acidentalmente comeu uma Fruta do Diabo, a Gomu Gomu no Mi. Mais tarde, depois de Luffy provocar o bandido, ele é feito refém. Shanks e sua tripulação aparecem, e derrotam os comparsas do bandido, que escapa levando Luffy para um barco em alto mar. Higuma chuta Luffy para a água, antes de ser devorado por um Rei dos Mares local, Shanks chega a tempo de salvar a vida de Luffy. Shanks espanta o monstro marinho, usando Haki, mas perde o braço no processo. Por Shanks o Ruivo ter sacrificado seu braço esquerdo a fim de salvá-lo, Luffy se torna ainda mais determinado a se tornar um pirata. Antes de Shanks ir embora, ele entrega a Luffy seu chapéu de palha. Dez anos depois, Luffy começa a aventura para realizar seu sonho de se tornar o Rei dos Piratas.',
);

frutas: while (true) {
    let questao = prompt(
        '====Qual fruta você deseja escolher? GOMUGOMUNOMI, OPEOPENOMI, MERAMERANOMI==== ->',
    );
    console.log();
    questao.toUpperCase();
    if (
        questao == 'GOMUGOMUNOMI' ||
        questao == 'OPEOPENOMI' ||
        questao == 'MERAMERANOMI'
    ) {
        break frutas;
    } else {
        console.log('Digite UMA DAS OPÇÕES como resposta.');
    }
}
let nome = prompt('Qual será o nome do seu personagem? ');
console.log('Parabéns', nome);
console.log('------------------------');
console.log('Agora você é um pirata, logo logo você dará inicio a sua jornada');

console.log('PARABÉNS');
console.log('----------Você começou sua jornada.----------');
console.log();
console.log(
    'agora está em alto mar em um navio pirata desconhecido, Dois piratas encontram um bairro no navio, onde você está dormindo, logo depois você acorda e quebra o barril assim jogando os 2 piratas no mar, você conhece coby, coby e um e dos escravos do navio pirata de onde você está, vocês conversam durante um tempo e coby te conta que quer ser livre e ser um marinheiro, e pede sua ajuda',
);
console.log();

var status = {
    HP: 100,
    FOME: 100,
    FORÇA: 300,
    DINHEIRO: 250,
};

function batalha() {
    jogo: while (true) {
        console.clear();
        console.log('luta');
        quantidade: while (true) {
            var Lutas = prompt('Quantas lutas serão? -> ');
            for (var i = 0; i < Lutas; i++) {
                console.log('Valor inválido, digite um número valido');
            }
            {
                break quantidade;
            }
        }
        var opcoes = ['SOCO', 'CHUTE', 'ESPECIAL'];
        var ganhou = 0;
        var perdeu = 0;
        for (var i = 0; i < Lutas; i++) {
            opcao: while (true) {
                var escolha = prompt(
                    'Qual é sua escolha? SOCO, CHUTE ou ESPECIAL -> ',
                );
                escolha = escolha.toUpperCase();
                if (
                    escolha == opcoes[0] ||
                    escolha == opcoes[1] ||
                    escolha == opcoes[2]
                ) {
                    break opcao;
                } else {
                    console.log('Opção Inválida, tente novamente.');
                }
            }
            var item = opcoes[Math.floor(Math.random() * opcoes.length)];
            if (escolha == opcoes[0]) {
                if (item == opcoes[0]) {
                    console.log(
                        `Você EMPATOU, a jogada da marinha foi ${item}.`,
                    );
                } else if (item == opcoes[1]) {
                    console.log(
                        `Você PERDEU, a jogada do marinha foi ${item}.`,
                    );
                    perdeu += 1;
                } else {
                    console.log(
                        `Você GANHOU, a jogada do marinha foi ${item}.`,
                    );
                    ganhou += 1;
                }
            } else if (escolha == opcoes[1]) {
                if (item == opcoes[0]) {
                    console.log(
                        `Você GANHOU, a jogada do marinha foi ${item}.`,
                    );
                    ganhou += 1;
                } else if (item == opcoes[1]) {
                    console.log(
                        `Você EMPATOU, a jogada do marinha foi ${item}.`,
                    );
                } else {
                    console.log(
                        `Você PERDEU, a jogada do marinha foi ${item}.`,
                    );
                    perdeu += 1;
                }
            } else {
                if (item == opcoes[0]) {
                    console.log(
                        `Você PERDEU, a jogada do marinha foi ${item}.`,
                    );
                    perdeu += 1;
                } else if (item == opcoes[1]) {
                    console.log(
                        `Você GANHOU, a jogada do marinha foi ${item}.`,
                    );
                    ganhou += 1;
                } else {
                    console.log(
                        `Você EMPATOU, a jogada do marinha foi ${item}.`,
                    );
                }
            }
        }

        console.log(
            `\nVocê ganhou ${ganhou} rodadas, já o marinha ganhou ${perdeu} rodadas.`,
        );
        if (ganhou > perdeu) {
            console.log('\nVocê ganhou do marinha.');
        } else if (ganhou < perdeu) {
            console.log('\nVocê perdeu do marinha.');
        } else {
            console.log('\nVocê empatou com o marinha.');
        }
    }
}

console.log(status);
function perguntasimounaodormir() {
    while (true) {
        var escolha = prompt(' ----- SIM OU NÂO -> ----- ');
        console.log();
        let pergunta = escolha.toUpperCase();
        if (pergunta == 'SIM' || pergunta == 'NÃO' || pergunta == 'NAO') {
            if (pergunta == 'SIM') {
                status.HP = status.HP + 1;
                status.FORÇA = status.FORÇA + 2;
                console.log('Você entrou e descansou ate o amanhecer');
                break;
            } else {
                console.log(
                    'Você decidiu não ir e continua cansado, isso podera causar grandes consequencias futuras, e o tempo passou',
                );

                status.HP = status.HP - 3;
                break;
            }
        } else {
            console.log('Você precisa escolher entre sim ou não');
        }
    }
}

function perguntasimounaotempo() {
    while (true) {
        var escolha = prompt(' ----- SIM OU NÂO -> ----- ');
        console.log();
        let pergunta = escolha.toUpperCase();
        if (pergunta == 'SIM' || pergunta == 'NÃO' || pergunta == 'NAO') {
            if (pergunta == 'SIM') {
                console.log('Você entrou porem gastou 4 horas ');
                break;
            } else {
                console.log('Você decidiu não ir');
            }
        } else {
            console.log('Você precisa escolher entre sim ou não');
        }
    }
}

console.log('Você deseja ajudar coby?');
coby: while (true) {
    var escolha = prompt(' ----- SIM OU NÂO -> ----- ');
    console.log();
    let pergunta = escolha.toUpperCase();
    if (pergunta == 'SIM' || pergunta == 'NÃO' || pergunta == 'NAO') {
        if (pergunta == 'SIM') {
            break coby;
        } else {
            console.log('Você obrigatoriamente precisa ajudar coby');
        }
    } else {
        console.log('Você precisa escolher entre sim ou não');
    }
}

console.log(
    'Você decide ajudar coby, durante sua conversa com coby, você descobre que o navio e governado por alvida uma pirata de baixo poder, vocês decide ir a procuda de alvida',
);
Luta: while (true) {
    var escolha = prompt(
        'Você encontra alvida enquanto conversa com coby, você quer LUTAR ou FUGIR -> ',
    );
    let pergunta = escolha.toUpperCase();
    if (pergunta == 'LUTAR' || pergunta == 'FUGIR') {
        if (pergunta == 'LUTAR') {
            console.log(
                'Você lutou bravamente contra a pirata alvida e a derrotou com sucesso, é também virou um pirata procurado, ----"A marinha aparece"---- você precisa fugir!!!, você fugiu porém perdeu muito sangue e você precisa se recuperar ',
            );
            status.HP = status.HP - 80;
            console.log('Seu HP está em ' + status.HP);
            break Luta;
        } else {
            status.HP = status.HP - 80;
            ('->');
            console.log(
                'Você decidiu furgir. Você fugiu com sucesso e conseguiu levar coby porem os dois sairam gravimente ferido, seu HP está em ' +
                    status.HP,
                '  ',
            );

            break Luta;
        }
    } else {
        console.log('Você precisa escolher entre lutar e fugir');
    }
}
console.log();
console.log('Você chegou em terra firme');
console.log();
comida: while (true) {
    var escolha = prompt(
        '--------------vocês encontram um restaurante para comer, deseja entrar? DIGITE SIM OU NÃO--------------',
    );
    console.log('OBS: VOCÊ GASTARÁ 50 BERRYS(DINHEIRO)');
    let pergunta = escolha.toUpperCase();
    if (pergunta == 'SIM' || pergunta == 'NÃO' || pergunta == 'NAO') {
        if (pergunta == 'SIM') {
            status.HP = status.HP + 80;
            console.log('');
            status.DINHEIRO = status.DINHEIRO - 50;
            console.log();
            console.log('Você comeu e recuperou o HP e esta com ' + status.HP);
            console.log('Você gastou 50 berrys e ficou com ' + status.DINHEIRO);
            console.log('');
            break comida;
        } else {
            console.log();
            console.log(
                'Você decidiu não comer e continuar com a vida baixa ----"Porém novamente a marinha apareceu novamente"---- FUJA!!!!',
            );
            break comida;
        }
    }
}

var tempo = {
    HORAS: 24,
    MINUTOS: 30,
    DIA: 1,
};
console.log('----Você fugiu e chegou no meio da cidade----');

console.log(
    'ao chegar no meio da cidade você descobre quem tem um caçador de piratas preso no quartel da marinha',
);
console.log('Você decide pesquisar sobre ele');
console.log();
console.log(
    'você encontra uma livraria, e fica totalmente curioso para saber se tem algo escrito sobre o caçador',
);
console.log('Deseja entrar?');
console.log();
console.log('OBS: -------Você gastara o total de 4 horas na livraria-------');
tempo.HORAS = tempo.HORAS - 5;
perguntasimounaotempo();
console.log('Você entrou e gastou 4 horas');
console.log('---------------------');
console.log('O horario atual e');
console.log(tempo);
console.log('---------------------');
console.log(
    'Você descobriu algo sobre o caçador de piratos aparentemente o nome dele e zoro e o único espadachin a usar 3 espadas no mundo ',
);
console.log('---------------');
console.log('Você esta com sono deseja ir descansar?');
perguntasimounaodormir();
console.log('-------Você passou seu primeiro Dia-------');
console.log();
tempo.HORAS = tempo.HORAS - 9;
tempo.MINUTOS = tempo.MINUTOS - 20;
tempo.DIA = tempo.DIA + 1;
console.log(tempo);
console.log();
console.log();
console.log('Ja e de manhá, oque você quer fazer?');
console.log();
pergunta: while (true) {
    let pergunta = prompt(
        'Oque você quer fazer primeiro ? ==TOMAR CAFE, ESTUDAR MAIS SOBRE ZORO, TREINAR CONTRA A MARINHA== ',
    );
    pergunta = pergunta.toUpperCase();
    if (
        pergunta == 'TOMAR CAFE' ||
        pergunta == 'ESTUDAR MAIS SOBRE ZORO' ||
        pergunta == 'TREINAR CONTRA A MARINHA'
    ) {
        if (pergunta == 'TOMAR CAFE') {
            console.log('Você decidiu ir tomar cafe, e ganhou atributos');
            console.log();
            status.HP = status.HP + 3;
            console.log(status);
            console.log();
            console.log('Se passou 2 horas enquanto você se alimentava');
            console.log();
            tempo.HORAS = tempo.HORAS + 2;
            console.log();
            console.log(tempo);
            console.log();
            break pergunta;
        } else if (pergunta == 'ESTUDAR MAIS SOBRE ZORO') {
            console.log(
                'Você decidiu ir estudar, porem nada sobre zoro foi encontrado',
            );
            console.log();
            console.log('Se passou 2 hora desde de que você foi estudar');
            tempo.HORAS = tempo.HORAS + 2;
            console.log();
            console.log(tempo);
            break pergunta;
        } else if (pergunta == 'TREINAR CONTRA A MARINHA') {
            console.log(
                'Você decidiu ir treinar contra a marinha e iniciar uma luta',
            );
            batalha();
            console.log('Você lutou e ficou mais forte');
            console.log();
            status.FORÇA = status.FORÇA + 15;
            console.log(status.FORÇA);
            console.log();
            console.log('2 horas se passaram desde a sua luta');
            tempo.HORAS = tempo.HORAS + 2;
            console.log();
            console.log();
            break pergunta;
        }
    }
}
console.log('Um tempo se passou após você fazer suas atividades');
console.log();
atividade: while (true) {
    let atividade = prompt(
        '=========Oque você deseja fazer agora? IR ALMOCAR, IR A PROCURA DE ZORO, IR CONVERSAR COM COBY========= ',
    );
    atividade = atividade.toUpperCase();
    if (
        atividade == 'IR ALMOCAR' ||
        atividade == 'IR A PROCURA DE ZORO' ||
        atividade == 'IR CONVERSAR COM COBY'
    ) {
        if (atividade == 'IR ALMOCAR') {
            console.log();
            console.log('Você comeu e aumentou sua barra de fome');
            console.log(
                'Você escutou um boato, sobre zoro estar no QG da marinha',
            );
            console.log('Agora você possui ');
            status.FOME = status.FOME + 5;
            console.log();
            console.log(status.FOME);
            console.log();
            console.log('Se passou 20 minutos minutos');
            tempo.MINUTOS = tempo.MINUTOS + 20;
            console.log(tempo.MINUTOS);
            console.log();
            break atividade;
        } else if (atividade == 'IR A PROCURA DE ZORO') {
            console.log();
            console.log(
                'Voce procurou pela cidade, e não foi encontrado nada, porem escutou um boato de que ele esta no QG da marinha ',
            );
            console.log('Voce passou 2 horas desde de então');
            tempo.HORAS = tempo.HORAS + 2;
            console.log();
            console.log(tempo);
            console.log();
            break atividade;
        } else if (atividade == 'IR CONVERSAR COM COBY') {
            console.log();
            console.log(
                'Você decide ir atras de coby, ao encontra-lo vocês conversam, e coby comenta sobre o tal espadachin, e fala que ele esta na no QG da marinha',
            );
            console.log(
                'Por acidente você descobre que coby esta querendo entrar na marinha... porem decide continuar fingindo não saber de nada',
            );
            console.log();
            break atividade;
        }
    }
}
console.log();
console.log('Algum tempo se passou e ja esta de noite');
console.log('Você deseja ir dormir?');
tempo.HORAS = tempo.HORAS + 8;
console.log(tempo);
perguntasimounaodormir();
console.log();
console.log('A noite passou e ja esta de manha');
tempo.HORAS = tempo.HORAS - 12;
tempo.DIA = tempo.DIA + 1;
console.log(tempo);
console.log('nesta manhá você decidiu que irá atras de zoro');
console.log(
    'Você procura pela cidade e encontra o QG da marinha e pensa em uma maneira de entrar quieto',
);
console.log(
    '---Você encontra coby na entrada do QG da marinha, e ele decide te ajudar a entrar para encontrar zoro---',
);
console.log(
    'Por sorte zoro esta no patio e vocês conversam, e você pede para ele se juntar ao seu bando, porem ele se recusa, mas você não desiste e fala que vai tirar ele dali',
);
console.log(
    'Você vai a procura das espada de zoro, você vai ate o topo do QG e descobre que a espada esta no quarto do filho do comandante do QG',
);
console.log('Você entra de fininho e rouba as espada de zoro');
console.log(
    'Você leva ela ate zoro e descobre que quem comanda o QG, o nome de Morgan, você e encontra quando liberta zoro e você vai enfrenta-lo',
);
console.log(
    'Você entra em batalha com o Morgan, capitão da Marinha que está para lhe impedir de sair com o Caçador de piratas Zoro',
);
console.log(
    'Como Morgan está sendo um otário, você possui a chance de atacar primeiro',
);
let sttinimigo = {
    HP: 100,
    FORÇA: 300,
    DINHEIRO: 5000,
};
batalhafinal: while (true) {
    let ataquesinimigo = ['QUEIXADA', 'MACHADADA GIRATÓRIA', 'INVESTIDA'];
    let ataques = ['SOCO', 'CHUTE', 'TAPÃO', 'JOELHADA'];
    ataqueum: while (true) {
        var ataque1 = prompt(
            'Qual é o seu ataque? Soco, chute, tapão ou joelhada? ',
        );
        ataque1 = ataque1.toUpperCase();
        if (
            ataque1 == ataques[0] ||
            ataque1 == ataques[1] ||
            ataque1 == ataques[2] ||
            ataque1 == ataques[3]
        ) {
            if (ataque1 == ataques[0]) {
                console.log(
                    'VOCÊ ACERTOU UM SOCÃO NA BOCA DO OTÁRIO, sendo assim causou 25 de dano, a vida dele é reduzida',
                );
                console.log(
                    `HP inimigo: ${sttinimigo.HP} - 25 = ${sttinimigo.HP - 25}`,
                );
                sttinimigo.HP = sttinimigo.HP - 25;
                break ataqueum;
            } else if (ataque1 == ataques[1]) {
                console.log(
                    'VOCÊ ACERTOU UM CHUTÃO NA BOCA DO OTÁRIO, sendo assim causou 20 de dano, a vida dele é reduzida',
                );
                console.log(
                    `HP inimigo: ${sttinimigo.HP} - 20 = ${sttinimigo.HP - 20}`,
                );
                sttinimigo.HP = sttinimigo.HP - 20;
                break ataqueum;
            } else if (ataque1 == ataques[2]) {
                console.log(
                    'VOCÊ ACERTOU UM TAPÃO NA BOCA DO OTÁRIO, sendo assim causou 15 de dano, a vida dele é reduzida, porém o tapa machuca a si mesmo, então você perde 10 de hp',
                );
                console.log(`HP: ${status.HP} - 10 = ${status.HP - 10}`);
                console.log(
                    `HP inimigo: ${sttinimigo.HP} - 15 = ${sttinimigo.HP - 15}`,
                );
                status.HP = status.HP - 10;
                sttinimigo.HP = sttinimigo.HP - 15;
                break ataqueum;
            } else {
                console.log(
                    'VOCÊ ACERTOU UM JOELHADA NA BOCA DO OTÁRIO, sendo assim causou 30 de dano, a vida dele é reduzida',
                );
                console.log(
                    `HP inimigo: ${sttinimigo.HP} - 30 = ${sttinimigo.HP - 30}`,
                );
                sttinimigo.HP = sttinimigo.HP - 30;
                break ataqueum;
            }
        } else {
            console.log('Opção inválida, escolha um dos ataques');
        }
    }
    var ataqueinimigo =
        ataquesinimigo[Math.floor(Math.random() * ataquesinimigo.length)];
    console.log(
        'Após seu ataque, Morgan lhe pega desprevinido e encaixa um golpe',
    );
    if (ataqueinimigo == 'QUEIXADA') {
        console.log(
            'Morgan, com sua armadura no queixo, lhe dá uma queixada muito forte que lhe atordoa, causando 30 de dano a você, mas 10 de dano a si mesmo, pois o impacto é muito forte',
        );
        console.log(`HP: ${status.HP} - 30 = ${status.HP - 30}`);
        console.log(
            `HP inimigo: ${sttinimigo.HP} - 10 = ${sttinimigo.HP - 10}`,
        );
        status.HP = status.HP - 30;
        sttinimigo.HP = sttinimigo.HP - 10;
    } else if (ataquesinimigo == 'MACHADADA GIRATÓRIA') {
        console.log(
            'Morgan encaixa uma machadada giratória em você, causando um dano brutal e fatal, deixando você aos prantos, perdendo 70 de HP',
        );
        console.log(`HP: ${status.HP} - 70 = ${status.HP - 70}`);
        status.HP = status.HP - 70;
    } else {
        console.log(
            'Morgan encaixa uma investida, lhe causando 20 de dano, porém 5 de dano a si mesmo, já que você aproveita e dá um leve empurrão para manter distância',
        );
        console.log(`HP: ${status.HP} - 20 = ${status.HP - 20}`);
        status.HP = status.HP - 20;
        console.log(`HP inimigo: ${sttinimigo.HP} - 5 = ${sttinimigo.HP - 5}`);
        sttinimigo.HP = sttinimigo.HP - 5;
    }
    if (sttinimigo.HP <= 0) {
        console.log('O HP de Morgan chegou a 0, você ganhou a batalha');
        break batalhafinal;
    }
    if (status.HP <= 0) {
        console.log(
            'Seu HP chegou a 0, você morreu, recomece a jornada desde o começo, boa sorte',
        );
        prompt('GAME OVER -> ');
        process.exit();
    } else {
        continue;
    }
}
console.log('Você libertou zoro e terminou sua jornada');
