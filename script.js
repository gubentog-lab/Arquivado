const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const folder = $(".folder");

const investigation = $("#investigationScreen");
const suspectsScreen = $("#suspectsScreen");
const interrogation = $("#interrogationScreen");
const uvScreen = $("#uvScreen");
const darkScreen = $("#darkScreen");
const nextStageScreen = $("#nextStageScreen");
const compareScreen = $("#compareScreen");

const conversation = $("#conversation");

const clueModal = $("#clueModal");
const systemAlert = $("#systemAlert");

const continueToSuspects = $("#continueToSuspects");

const TOTAL_CLUES = 5;
const TOTAL_SUSPECTS = 4;
const TOTAL_ROUNDS = 3;

const clues = {

    knife: {
        title: "Faca encontrada",

        description:
            "Uma faca foi encontrada a poucos metros do corpo. Há pequenas marcas avermelhadas na lâmina. A arma foi recolhida para análise.",

        code: "EVIDÊNCIA #01"
    },

    body: {
        title: "Vítima",

        description:
            "O corpo apresenta um ferimento profundo na região abdominal. Não há documentos próximos à vítima.",

        code: "EVIDÊNCIA #02"
    },

    bench: {
        title: "Banco da praça",

        description:
            "Há marcas recentes no banco. Um pequeno pedaço de tecido foi encontrado preso à madeira.",

        code: "EVIDÊNCIA #03"
    },

    trash: {
        title: "Lixeira",

        description:
            "Entre copos e embalagens há um recibo amassado e rasgado ao meio, de uma compra de bebida. O horário impresso é 01:43. O papel está quase seco e sem sujeira por cima, o que indica que foi descartado havia pouco tempo. Falta justamente a parte que traria o nome do estabelecimento.",

        code: "EVIDÊNCIA #04"
    },

    light: {
        title: "Poste de iluminação",

        description:
            "A lâmpada do poste está estilhaçada, e os cacos no chão ainda estão limpos, sem poeira nem folhas por cima. A câmera de segurança presa ao mesmo poste está girada para o lado oposto da praça, deixando a área do banco fora do seu alcance. Não há sinais de que o suporte tenha sido forçado.",

        code: "EVIDÊNCIA #05"
    }

};

const suspects = {

    1: {
        name: "EDUARDO █████",
        occupation: "FUNCIONÁRIO LOCAL",
        dialogues: [
            {
                question: "Onde você estava por volta das 02:00?",
                answer: "Eu encerrei meu turno na praça por volta da uma e meia, tranquei o quiosque de manutenção e fui direto para casa, ainda de uniforme: calça, camisa e uma jaqueta escura da empresa. Moro a uns vinte minutos a pé daqui e não passei em nenhum outro lugar.",
                choices: [
                    ["Alguém pode confirmar que você chegou em casa?", "Minha irmã dorme cedo, então não me viu chegar. Mas o porteiro do prédio costuma ficar acordado até tarde, talvez ele se lembre de mim."],
                    ["Você tem as chaves do quiosque e dos equipamentos da praça?", "Tenho, como qualquer funcionário do turno. Mas isso não quer dizer nada: as chaves ficam penduradas num quadro que metade da equipe usa."],
                    ["Seu nome aparece na escala da praça naquela noite.", "Aparece porque eu trabalho lá. Se eu tivesse algo a esconder, não teria deixado meu nome numa escala que qualquer um pode ler."]
                ]
            },
            {
                question: "A câmera de segurança estava virada para outro lado. Você sabe por quê?",
                answer: "Soube depois. Na semana passada um técnico mexeu nela porque o ângulo pegava a janela de um prédio vizinho e houve reclamação. Ninguém voltou a ajustar. Eu mesmo avisei meu supervisor duas vezes, mas disseram que não era prioridade.",
                choices: [
                    ["Quem mais sabia que a câmera estava desalinhada?", "Quem trabalha na praça, os vigias e qualquer pessoa que passasse por ali com frequência e olhasse para cima. Não era segredo para ninguém."],
                    ["A lâmpada do poste também estava quebrada. Isso era comum?", "A lâmpada piscava havia semanas. Abri chamado, mas a prefeitura demorou. Posso mostrar o protocolo, se precisarem."],
                    ["Parece conveniente demais para quem tem acesso ao local.", "Conveniente para quem? Eu perderia o emprego se acontecesse algo ali. Isso nunca me interessou."]
                ]
            },
            {
                question: "Você conhecia a vítima?",
                answer: "De vista. Ela costumava atravessar a praça no fim do dia e às vezes parava no quiosque para pedir água. Nunca conversamos mais do que isso, mas nas últimas semanas ela parecia assustada, como se estivesse evitando alguém.",
                choices: [
                    ["Evitando quem?", "Não sei dizer. Ela olhava para trás quando passava e uma vez me perguntou se a praça tinha outra saída. Achei estranho, mas não era da minha conta."],
                    ["Você viu alguém rondando a praça naquela noite?", "Antes de sair, vi um homem de jaqueta escura perto do banco, mas ele estava de costas. Não prestei atenção, não achei que fosse importar."],
                    ["Você aceita colaborar com a perícia?", "Aceito. Podem recolher minha digital, minhas roupas, o que for preciso. Só peço que acabem logo com isso."]
                ]
            },
        ]
    },

    2: {
        name: "MARCOS █████",
        occupation: "CONHECIDO DA VÍTIMA",
        dialogues: [
            {
                question: "Qual era sua relação com a vítima?",
                answer: "Éramos amigos desde a faculdade. Nos últimos meses nos afastamos por causa de uma dívida e de umas conversas que deram errado. Eu devia dinheiro a ela e atrasei o pagamento. Não me orgulho disso, mas não é motivo para ninguém morrer.",
                choices: [
                    ["Quanto você devia?", "Uns oito mil. Eu estava juntando aos poucos. Na semana passada ela me mandou uma mensagem dizendo que queria conversar pessoalmente, e foi isso que me deixou nervoso."],
                    ["Vocês chegaram a brigar?", "Discutimos feio duas semanas atrás, por mensagem. Eu disse coisas que não devia. Pedi desculpas depois, e ela respondeu que ainda queria me ver."],
                    ["Alguém sabia dessa dívida?", "Pouca gente. Talvez o Daniel, que era amigo dos dois. Ele costumava mediar quando a gente se estressava."]
                ]
            },
            {
                question: "Encontramos um recibo na lixeira da praça marcado às 01:43. Você esteve lá?",
                answer: "Estive. Cheguei por volta da uma, sentei no banco para pensar e comprei uma água no quiosque 24 horas da esquina. O recibo pode ser meu, mas também pode ser de qualquer pessoa que passou por lá. Joguei fora o que tinha no bolso quando fui embora.",
                choices: [
                    ["Que horas você foi embora?", "Logo depois de comprar a água, uns minutos antes das duas. Peguei o ônibus noturno. Eu estava sem casaco, tremendo de frio, o motorista deve se lembrar de mim."],
                    ["Havia um pedaço de tecido preso ao banco. Era seu?", "Pode ser. O banco é velho e cheio de farpas, e minha camisa prendeu quando me levantei. Rasgou um pedacinho da manga. Mas sangue eu não vi nada, juro."],
                    ["Alguém viu você no ônibus?", "O cobrador, acho, mas ele cochilava. A câmera interna do ônibus deve ter me registrado. Peçam as imagens, por favor."]
                ]
            },
            {
                question: "Você sabia que a vítima estaria na praça naquela noite?",
                answer: "Ela tinha me escrito mais cedo dizendo que passaria por lá para pensar, como fazia quando estava ansiosa. Fui na esperança de encontrá-la e pedir desculpas pessoalmente, mas ela não apareceu enquanto eu estive lá. Fiquei esperando e acabei desistindo.",
                choices: [
                    ["Por que não disse isso antes?", "Porque sei como parece. Quem confessa que esperava a vítima no local do crime vira suspeito, e foi exatamente isso que aconteceu."],
                    ["Você viu mais alguém na praça?", "Vi um rapaz perto da entrada, de costas, falando ao telefone. Pensei que fosse um morador qualquer. Só reparei que ele parecia irritado."],
                    ["Tem como provar que ela te escreveu?", "A mensagem está no meu celular. Posso entregá-lo agora mesmo."]
                ]
            },
        ]
    },

    3: {
        name: "RENATO █████",
        occupation: "MORADOR DA REGIÃO",
        dialogues: [
            {
                question: "Você mora perto da praça. Ouviu ou viu algo naquela madrugada?",
                answer: "Moro a duas quadras. Tenho insônia e costumo ficar na janela do segundo andar, fumando. Pouco depois das duas ouvi vozes alteradas, depois um barulho seco e depois silêncio. Achei que fossem bêbados, essas coisas acontecem toda hora ali.",
                choices: [
                    ["Você saiu de casa depois disso?", "Saí, uns quinze minutos depois, com o cachorro. Não cheguei até a praça, só até a esquina. Vi movimento, não gostei e voltei."],
                    ["Consegue dizer de quem eram as vozes?", "Uma era de mulher, tenho certeza. A outra, de homem, mas não distingui palavras. Parecia uma discussão que ia crescendo."],
                    ["Por que não chamou a polícia na hora?", "Já chamei a polícia por causa de bagunça na praça outras vezes e nunca vieram. Cansei. Hoje me arrependo muito disso."]
                ]
            },
            {
                question: "Você disse que viu alguém. Pode descrever?",
                answer: "Vi uma figura atravessando a rua lateral, andando rápido, perto da esquina da farmácia. Usava jaqueta escura com o capuz levantado e as mãos nos bolsos. Não vi o rosto, e aquela rua estava sem luz por causa do poste quebrado.",
                choices: [
                    ["Era alto, baixo, magro, forte?", "Médio, nem alto nem baixo. Mas com a jaqueta é difícil afirmar. Poderia ser qualquer pessoa."],
                    ["Carregava alguma coisa?", "Uma das mãos estava dentro do bolso e a outra parecia segurar algo contra o corpo. Não consigo jurar o que era."],
                    ["Você já tinha visto essa pessoa antes?", "Talvez. O jeito de andar me lembrou alguém do bairro, mas não sei dizer quem. Prefiro não acusar ninguém sem ter certeza."]
                ]
            },
            {
                question: "Por que demorou tanto para procurar a polícia?",
                answer: "Fiquei com medo. Moro sozinho e a praça fica na minha rua. Se eu dissesse que vi alguém, essa pessoa poderia descobrir onde eu moro. Só depois de duas noites mal dormidas decidi falar.",
                choices: [
                    ["Você conhecia a vítima?", "Já a vi algumas vezes. Uma vez ela filmou uma discussão minha com um rapaz por causa de barulho na praça. Foi uma situação chata, mas nada além disso."],
                    ["Está escondendo alguma coisa?", "No máximo que sou covarde. Mas todo o resto eu já disse."],
                    ["Você tem alguma faca em casa?", "Tenho facas de cozinha como todo mundo. Se quiser levar, pode levar. Nunca tive arma nem porte."]
                ]
            },
        ]
    },

    4: {
        name: "DANIEL █████",
        occupation: "ÚLTIMA PESSOA VISTA",
        dialogues: [
            {
                question: "Você foi visto conversando com a vítima perto da entrada da praça. Sobre o que falaram?",
                answer: "Era uma conversa pessoal. Ela estava abalada e me contou que pensava em ir embora da cidade, e eu tentei convencê-la a ficar. Começamos falando baixo, mas a coisa esquentou e levantei a voz. Me arrependo disso todos os dias desde então.",
                choices: [
                    ["Ela disse por que queria ir embora?", "Disse que estava cansada de se sentir vigiada. Não quis dar nomes e eu respeitei, embora agora não saiba se devia ter insistido."],
                    ["Vocês costumavam brigar?", "Nunca. Éramos próximos, por isso aquela conversa me pegou de surpresa e perdi a paciência. Mas foi só palavra."],
                    ["Alguém ouviu a discussão?", "Talvez alguém passando, mas a praça estava quase vazia. Lembro de um sujeito sentado num banco mais longe, só de camisa, que parecia olhar para nós."]
                ]
            },
            {
                question: "A que horas você deixou a praça?",
                answer: "Pouco antes das duas, tenho quase certeza. Fui até o ponto de ônibus da avenida, desisti e voltei para casa a pé, o que explica por que ninguém me viu. Eu estava com a cabeça quente e precisava caminhar.",
                choices: [
                    ["Alguém pode confirmar que você saiu mesmo?", "Não sei. Se havia alguém na avenida, eu não reparei. Lembro de passar por uma padaria fechada, só isso."],
                    ["Há indícios de que alguém permaneceu na praça depois desse horário.", "Então foi outra pessoa. Eu já tinha ido embora. Se alguém ficou, não fui eu."],
                    ["Por que não ligou para ela depois?", "Liguei duas vezes, mas caiu na caixa postal. Achei que estivesse brava e fosse atender no dia seguinte. Nunca imaginei que..."]
                ]
            },
            {
                question: "Você reconhece a faca encontrada no local?",
                answer: "Não. Quer dizer, é uma faca comum, dessas de cozinha ou de camping, que se vê em muita casa. Mas essa em particular eu nunca tive nas mãos, se é isso que está perguntando.",
                choices: [
                    ["A lâmina apresenta marcas recentes.", "Isso é terrível. Mas não tenho como explicar algo que nunca vi."],
                    ["Você parece nervoso.", "Perdi uma amiga. É claro que estou nervoso. Se eu estivesse calmo, vocês desconfiariam ainda mais."],
                    ["Esta é a hora de nos contar tudo.", "Já contei tudo o que sei. Se lembrar de mais alguma coisa, aviso. Só quero que achem quem fez isso."]
                ]
            },
        ]
    },
};


/* =========================================
   ESTADO
========================================= */

const foundClues = new Set();

// suspeitos com interrogatório concluído (3 rodadas)
const interrogated = new Set();

// histórico e andamento de cada suspeito
// progress[id] = { round, finished, locked, history: [{ type, name, text }] }
const progress = {};

let currentClue = null;
let currentSuspect = null;


/* =========================================
   NAVEGAÇÃO
========================================= */

$("#openCase").onclick = () => {

    folder.classList.add("open");

};

// a nota "começar pelo local do crime" é o botão que abre a cena
$("#startCase").onclick = () => {
    openInvestigation();
};

function hideScreens() {

    [investigation, suspectsScreen, interrogation, darkScreen, uvScreen, compareScreen, nextStageScreen]
        .forEach(screen => screen.classList.remove("active"));

}

function openInvestigation() {

    hideScreens();

    investigation.classList.add("active");


}

function mug(id) { return `suspeito${id}.jpg`; }

function openSuspects() {

    hideScreens();

    suspectsScreen.classList.add("active");


    updateSuspectsScreen();

}

function closeSuspects() {

    suspectsScreen.classList.remove("active");

}

function openInterrogation(id) {

    currentSuspect = id;

    // primeira vez com esse suspeito: cria o histórico
    if (!progress[id]) {

        progress[id] = {
            round: 0,
            finished: false,
            locked: false,
            history: []
        };

        startRound(id);

    }

    hideScreens();

    interrogation.classList.add("active");


    updateInterrogation();

}

function closeInterrogation() {

    interrogation.classList.remove("active");

}

function openUV() {

    hideScreens();

    uvScreen.classList.add("active");


}

function openCompare() {

    hideScreens();

    compareScreen.classList.add("active");

    showPrint(currentPrint);

}

function openNextStage() {

    hideScreens();

    nextStageScreen.classList.add("active");


}


/* =========================================
   EVIDÊNCIAS
========================================= */

$$(".hotspot").forEach(hotspot => {

    hotspot.onclick = () => {

        currentClue = hotspot.dataset.clue;

        const clue = clues[currentClue];

        $("#clueTitle").textContent =
            clue.title;

        $("#clueDescription").textContent =
            clue.description;

        $("#clueCode").textContent =
            clue.code;


        if (foundClues.has(currentClue)) {

            $("#confirmClue").textContent =
                "EVIDÊNCIA JÁ ARQUIVADA";

        } else {

            $("#confirmClue").textContent =
                "ARQUIVAR EVIDÊNCIA";

        }

        clueModal.classList.add("active");

    };

});

$("#confirmClue").onclick = () => {

    if (!currentClue) {
        return;
    }


    foundClues.add(currentClue);


    $("#clueCounter").textContent =
        `${foundClues.size} / ${TOTAL_CLUES}`;


    clueModal.classList.remove("active");

    if (foundClues.size === TOTAL_CLUES) {

        continueToSuspects.disabled = false;

        continueToSuspects.textContent =
            "PROSSEGUIR PARA SUSPEITOS →";

        continueToSuspects.classList.add("ready");

    }

};

$("#closeClue").onclick = () => {

    clueModal.classList.remove("active");

};

clueModal.onclick = event => {

    if (event.target === clueModal) {

        clueModal.classList.remove("active");

    }

};

continueToSuspects.onclick = () => {

    if (foundClues.size < TOTAL_CLUES) {

        showAlert(
            "Analise todas as 5 evidências antes de prosseguir."
        );

        return;
    }

    openSuspects();

};

$("#backToFile").onclick = () => {

    investigation.classList.remove("active");


};


/* =========================================
   TELA DE SUSPEITOS
========================================= */

function updateSuspectsScreen() {

    $$(".suspect-card").forEach(card => {

        card.classList.toggle(
            "interrogated",
            interrogated.has(card.dataset.suspect)
        );

    });

    $("#interrogatedCounter").textContent =
        `${interrogated.size} / ${TOTAL_SUSPECTS}`;

    // o botão só aparece depois dos 4 interrogatórios
    $("#continueToNext").hidden =
        interrogated.size < TOTAL_SUSPECTS;

}

$$(".suspect-card").forEach(card => {

    card.onclick = () => {

        openInterrogation(
            card.dataset.suspect
        );

    };

});

$("#backEvidence").onclick = () => {

    closeSuspects();

    openInvestigation();

};

$("#continueToNext").onclick = openDarkroom;


/* =========================================
   INTERROGATÓRIO
========================================= */

function createMessage({ type, name, text }) {

    const element = document.createElement("div");

    element.className =
        `message ${
            type === "investigator"
                ? "investigator-message"
                : "suspect-message"
        }`;

    const label = document.createElement("span");
    label.textContent = name;

    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    element.append(label, paragraph);

    return element;

}

function scrollConversation() {

    conversation.scrollTo({
        top: conversation.scrollHeight,
        behavior: "smooth"
    });

}

function isViewing(id) {

    return currentSuspect === id &&
        interrogation.classList.contains("active");

}

// guarda a mensagem no histórico e, se a tela estiver aberta, mostra na hora
function pushMessage(id, type, name, text) {

    const message = { type, name, text };

    progress[id].history.push(message);

    if (isViewing(id)) {

        conversation.appendChild(createMessage(message));

        scrollConversation();

    }

}

// adiciona a pergunta principal da rodada + a resposta do suspeito
function startRound(id) {

    const state = progress[id];

    const dialogue =
        suspects[id].dialogues[state.round];

    pushMessage(id, "investigator", "INVESTIGADOR", dialogue.question);

    pushMessage(id, "suspect", suspects[id].name, dialogue.answer);

}

function updateInterrogation() {

    const suspect = suspects[currentSuspect];
    const state = progress[currentSuspect];

    $("#profileNumber").textContent =
        `SUSPEITO ${String(currentSuspect).padStart(2, "0")}`;

    $("#profileName").textContent =
        suspect.name;

    $("#profileOccupation").textContent =
        suspect.occupation;

    $("#profileImg").src = mug(currentSuspect);

    updateInterrogationHeader();

    // redesenha todo o histórico e vai para o fim da conversa
    conversation.innerHTML = "";

    state.history.forEach(message => {
        conversation.appendChild(createMessage(message));
    });

    conversation.scrollTop = conversation.scrollHeight;

    renderChoices();

}

function updateInterrogationHeader() {

    const state = progress[currentSuspect];

    const round = Math.min(state.round + 1, TOTAL_ROUNDS);

    $("#interrogationRound").textContent = state.finished
        ? "INTERROGATÓRIO CONCLUÍDO"
        : `INTERROGATÓRIO ${String(round).padStart(2, "0")} / 03`;

    $("#dialogProgress").textContent = state.finished
        ? "3 / 3"
        : `RODADA ${round} / 3`;

}

function renderChoices() {

    const id = currentSuspect;
    const state = progress[id];
    const choices = $("#choices");

    choices.innerHTML = "";

    // aguardando a próxima rodada
    if (state.locked) {
        return;
    }

    // interrogatório terminado
    if (state.finished) {

        $("#choicesTitle").textContent =
            "INTERROGATÓRIO FINALIZADO";

        const back = document.createElement("button");

        back.className = "choice-button";
        back.textContent = "← VOLTAR À LISTA DE SUSPEITOS";
        back.onclick = openSuspects;

        choices.appendChild(back);

        // todos os 4 interrogados: aparece o botão da próxima tela
        if (interrogated.size === TOTAL_SUSPECTS) {

            const next = document.createElement("button");

            next.className = "choice-button next-choice";
            next.textContent = "PROSSEGUIR PARA A PRÓXIMA ETAPA →";
            next.onclick = openDarkroom;

            choices.appendChild(next);

        }

        return;
    }

    // rodada em andamento: mostra as perguntas
    $("#choicesTitle").textContent =
        "ESCOLHA UMA PERGUNTA";

    const dialogue =
        suspects[id].dialogues[state.round];

    dialogue.choices.forEach(
        ([question, response], index) => {

            const button = document.createElement("button");

            button.className = "choice-button";

            button.textContent =
                `${index + 1}. ${question}`;

            button.onclick = () => {

                choices.querySelectorAll(".choice-button").forEach(item => {

                    item.disabled = true;

                    item.style.opacity = ".5";

                });

                state.locked = true;
                state.round++;

                // a pergunta escolhida e a resposta entram no histórico
                pushMessage(id, "investigator", "INVESTIGADOR", question);

                pushMessage(id, "suspect", suspects[id].name, response);

                setTimeout(() => {

                    state.locked = false;

                    if (state.round < TOTAL_ROUNDS) {

                        startRound(id);

                    } else {

                        state.finished = true;

                        interrogated.add(id);

                    }

                    updateSuspectsScreen();

                    if (isViewing(id)) {

                        updateInterrogationHeader();

                        renderChoices();

                    }

                }, 1200);

            };

            choices.appendChild(button);

        }
    );

}

$("#backSuspects").onclick = openSuspects;


/* =========================================
   ALERTA
========================================= */

function showAlert(message) {

    $("#alertMessage").textContent =
        message;

    systemAlert.classList.add("active");

}


$("#closeAlert").onclick = () => {

    systemAlert.classList.remove("active");

};

document.onkeydown = event => {

    if (event.key === "Escape") {

        clueModal.classList.remove("active");

        systemAlert.classList.remove("active");

    }

};


/* =========================================
   EXAME COM LUZ UV
========================================= */

const uvStage = $("#uvStage");
const uvPrint = $("#uvPrint");
const printModal = $("#printModal");
const uvContinue = $("#uvContinue");

let printFound = false;
let printCollected = false;


// posiciona a luz e calcula o brilho da digital conforme a distância
function updateBeam(event) {

    const rect = uvStage.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const beam = Math.max(110, rect.width * 0.15);

    uvStage.style.setProperty("--x", `${x}px`);
    uvStage.style.setProperty("--y", `${y}px`);
    uvStage.style.setProperty("--beam", `${beam}px`);

    const box = uvPrint.getBoundingClientRect();

    const centerX = box.left + box.width / 2 - rect.left;
    const centerY = box.top + box.height / 2 - rect.top;

    const distance = Math.hypot(x - centerX, y - centerY);

    const inner = beam * 0.35;
    const outer = beam * 0.85;

    const glow = Math.min(1, Math.max(0, (outer - distance) / (outer - inner)));

    if (!printFound) {
        uvStage.style.setProperty("--glow", glow.toFixed(2));
    }

    const over = distance <= Math.max(box.width, box.height) / 2 + 14;

    uvStage.classList.toggle("over-print", over && !printFound);

    return over;

}

uvStage.addEventListener("pointermove", event => {

    uvStage.classList.add("lit", "touched");

    updateBeam(event);

});

uvStage.addEventListener("pointerdown", event => {

    uvStage.classList.add("lit", "touched");

    updateBeam(event);

});

uvStage.addEventListener("pointerleave", () => {

    uvStage.classList.remove("lit", "over-print");

    uvStage.style.setProperty("--x", "-999px");
    uvStage.style.setProperty("--y", "-999px");

    if (!printFound) {
        uvStage.style.setProperty("--glow", "0");
    }

});

uvStage.addEventListener("click", event => {

    if (printFound || event.target.closest(".scene-controls")) {
        return;
    }

    if (updateBeam(event)) {
        foundPrint();
    }

});

function foundPrint() {

    printFound = true;

    uvStage.classList.remove("over-print");
    uvStage.classList.add("found");
    uvStage.style.setProperty("--glow", "1");

    $("#printStatus").textContent = "DIGITAL ENCONTRADA";

    setTimeout(() => {
        printModal.classList.add("active");
    }, 800);

}

$("#collectPrint").onclick = () => {

    printCollected = true;

    printModal.classList.remove("active");

    $("#printStatus").textContent = "DIGITAL COLETADA";

    uvContinue.disabled = false;
    uvContinue.textContent = "PROSSEGUIR →";
    uvContinue.classList.add("ready");

};

uvContinue.onclick = () => {

    if (!printCollected) {

        showAlert(
            "Encontre e colete a digital antes de prosseguir."
        );

        return;
    }

    openCompare();

};

$("#uvBack").onclick = openSuspects;


/* =========================================
   BANCO DE DIGITAIS
========================================= */

const compareTrack = $("#compareTrack");
const compareDots = $("#compareDots");
const comparePrev = $("#comparePrev");
const compareNext = $("#compareNext");

const printIds = Object.keys(suspects);
const viewedPrints = new Set();

let currentPrint = 0;

// monta os registros do banco (um por suspeito)
function buildCompare() {

    printIds.forEach((id, index) => {

        const slide = document.createElement("div");
        slide.className = "compare-slide";

        const image = document.createElement("img");
        image.src = `digital-s${id}.png`;
        image.alt = `Digital do suspeito ${id}`;
        image.draggable = false;

        slide.appendChild(image);
        compareTrack.appendChild(slide);

        const dot = document.createElement("button");
        dot.className = "compare-dot";
        dot.setAttribute("aria-label", `Registro ${index + 1}`);
        dot.onclick = () => showPrint(index);

        compareDots.appendChild(dot);

    });

}

buildCompare();

function showPrint(index) {

    currentPrint = Math.min(Math.max(index, 0), printIds.length - 1);

    const id = printIds[currentPrint];
    const suspect = suspects[id];

    viewedPrints.add(currentPrint);

    compareTrack.style.transform =
        `translateX(-${currentPrint * 100}%)`;

    $("#dbImg").src = mug(id);

    $("#dbCode").textContent =
        `REG. 017-${String(id).padStart(2, "0")}`;

    $("#dbName").textContent =
        `SUSPEITO ${String(id).padStart(2, "0")} — ${suspect.name}`;

    $("#dbOccupation").textContent =
        suspect.occupation;

    comparePrev.disabled = currentPrint === 0;
    compareNext.disabled = currentPrint === printIds.length - 1;

    compareDots.querySelectorAll(".compare-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentPrint);
        dot.classList.toggle("viewed", viewedPrints.has(i));
    });

    $("#compareCounter").textContent =
        `${viewedPrints.size} / ${printIds.length}`;

    // o botão só aparece depois de ver as 4 digitais
    $("#compareContinue").hidden =
        viewedPrints.size < printIds.length;

}

comparePrev.onclick = () => showPrint(currentPrint - 1);
compareNext.onclick = () => showPrint(currentPrint + 1);

$("#compareBack").onclick = openUV;
$("#compareContinue").onclick = openNextStage;

// arrastar para o lado (mouse ou dedo)
let swipeStart = null;

const carousel = $("#compareCarousel");

carousel.addEventListener("pointerdown", event => {
    swipeStart = event.clientX;
});

carousel.addEventListener("pointerup", event => {

    if (swipeStart === null) {
        return;
    }

    const delta = event.clientX - swipeStart;

    swipeStart = null;

    if (Math.abs(delta) > 40) {
        showPrint(currentPrint + (delta < 0 ? 1 : -1));
    }

});

carousel.addEventListener("pointercancel", () => {
    swipeStart = null;
});

// setas do teclado
document.addEventListener("keydown", event => {

    if (!compareScreen.classList.contains("active")) {
        return;
    }

    if (event.key === "ArrowRight") {
        showPrint(currentPrint + 1);
    }

    if (event.key === "ArrowLeft") {
        showPrint(currentPrint - 1);
    }

});


/* FINAL DO CASO: quadro com fios, confronto, reconstrução, jornal, fim */
const CULPRIT = "4"; // suspeito cuja digital bate com a da faca (troque aqui se quiser outro)
const seen = new Set();
let photoDone = false;   // foto revelada e arquivada na sala escura
const pos = {};          // posição de cada cartão no quadro (fração do quadro)
const links = [];        // fios vermelhos criados pelo jogador: [idA, idB]
let linkFrom = null;
const rot = i => `--r:${[-3,2,-1.5,3,-2,1][i % 6]}deg`;

function boardItems() {
  const it = [
    { id: "vit", cls: "", ph: "?", t: "VÍTIMA", d: "Identidade em apuração. Ferimento abdominal." },
    { id: "loc", cls: "", img: "local-crime-scene.jfif", t: "LOCAL", d: "Praça, 02:17." }
  ];
  foundClues.forEach(k => it.push({ id: "c" + k, cls: "", ph: "#", t: clues[k].code, d: clues[k].title }));
  interrogated.forEach(id => it.push({ id: "s" + id, cls: "sus", img: mug(id), t: suspects[id].name, d: suspects[id].occupation + " — interrogado" }));
  if (photoDone) it.push({ id: "ph", cls: "proof", img: "foto-revelada.svg", t: "EVIDÊNCIA #06", d: "Vítima sendo seguida" });
  if (printCollected) it.push({ id: "p", cls: "proof", img: "digital-found.png", t: "EVIDÊNCIA #07", d: "Digital parcial na faca" });
  if (window.compared) it.push({ id: "m", cls: "proof", img: `digital-s${CULPRIT}.png`, t: "COMPATÍVEL", d: suspects[CULPRIT].name });
  return it;
}

// ponto de um fio: centro do alfinete do cartão, relativo à caixa
function pinPoint(el, box) {
  const r = el.querySelector(".pin").getBoundingClientRect(), b = box.getBoundingClientRect();
  return { x: r.left + r.width / 2 - b.left, y: r.top + r.height / 2 - b.top };
}
function stringPath(p, q) {
  return `M${p.x} ${p.y} Q${(p.x + q.x) / 2} ${(p.y + q.y) / 2 + 36} ${q.x} ${q.y}`;
}

function drawBoardStrings() {
  const box = $("#cork"), svg = $("#boardStrings");
  svg.innerHTML = links.map(([a, b], i) => {
    const ea = box.querySelector(`[data-id="${a}"]`), eb = box.querySelector(`[data-id="${b}"]`);
    if (!ea || !eb) return "";
    const d = stringPath(pinPoint(ea, box), pinPoint(eb, box));
    return `<path class="hit" d="${d}" data-i="${i}"/><path class="str" d="${d}"/>`;
  }).join("");
  svg.querySelectorAll(".hit").forEach(h => h.onclick = () => { links.splice(+h.dataset.i, 1); drawBoardStrings(); updateBoardHint(); });
}

function updateBoardHint() {
  $("#boardSub").textContent = linkFrom
    ? "Agora clique no alfinete de outro cartão para ligar os dois."
    : `Arraste os cartões. Clique em dois alfinetes vermelhos para ligá-los com um fio (${links.length} fios). Clique num fio para removê-lo.`;
}

function slot(i) {
  const j = [[.02,.05],[.06,-.02],[-.03,.04],[.04,.02],[-.02,-.03]][i % 5];
  return { x: Math.min(.8, .03 + (i % 5) * .19 + j[0]), y: Math.min(.68, .03 + Math.floor(i / 5) * .34 + Math.abs(j[1]) + (i % 2) * .03) };
}

function renderBoard(open) {
  const items = boardItems(), cork = $("#cork");
  cork.querySelectorAll(".cd").forEach(e => e.remove());
  items.forEach((x, i) => {
    if (!pos[x.id]) pos[x.id] = slot(i);
    const el = document.createElement("div");
    el.className = `cd ${x.cls} ${seen.has(x.id) ? "" : "new"}`;
    el.dataset.id = x.id;
    el.style.cssText = `${rot(i)};left:${pos[x.id].x * 100}%;top:${Math.max(0, pos[x.id].y) * 100}%`;
    el.innerHTML = `<button class="pin ${linkFrom === x.id ? "sel" : ""}" aria-label="Ligar"></button>${x.img ? `<img src="${x.img}" alt="" draggable="false">` : `<div class="ph">${x.ph}</div>`}<strong>${x.t}</strong>${x.d}`;
    const pin = el.querySelector(".pin");
    pin.onpointerdown = e => e.stopPropagation();
    pin.onclick = () => {
      if (!linkFrom) linkFrom = x.id;
      else if (linkFrom === x.id) linkFrom = null;
      else {
        if (!links.some(l => l.includes(linkFrom) && l.includes(x.id))) links.push([linkFrom, x.id]);
        linkFrom = null;
      }
      cork.querySelectorAll(".pin").forEach(p => p.classList.toggle("sel", p.parentNode.dataset.id === linkFrom));
      drawBoardStrings(); updateBoardHint();
    };
    el.onpointerdown = e => {          // arrastar
      const r = cork.getBoundingClientRect(), c = el.getBoundingClientRect();
      const ox = e.clientX - c.left, oy = e.clientY - c.top;
      el.setPointerCapture(e.pointerId); el.classList.add("drag");
      el.onpointermove = m => {
        const px = Math.min(Math.max((m.clientX - ox - r.left) / r.width, 0), 1 - c.width / r.width);
        const py = Math.min(Math.max((m.clientY - oy - r.top) / r.height, 0), 1 - c.height / r.height);
        pos[x.id] = { x: px, y: py };
        el.style.left = px * 100 + "%"; el.style.top = py * 100 + "%";
        drawBoardStrings();
      };
      el.onpointerup = () => { el.onpointermove = null; el.classList.remove("drag"); };
    };
    cork.appendChild(el);
  });
  if (open) items.forEach(x => seen.add(x.id));
  const n = items.filter(x => !seen.has(x.id)).length;
  $("#boardNew").textContent = n; $("#boardNew").hidden = !n;
  drawBoardStrings(); updateBoardHint();
}
$("#boardBtn").onclick = () => { $("#boardZ").classList.add("on"); renderBoard(true); };
$("#boardClose").onclick = () => $("#boardZ").classList.remove("on");
document.addEventListener("click", () => setTimeout(() => {
  if (!$("#boardZ").classList.contains("on")) renderBoard(false);
}, 80));
renderBoard(false);

const show = id => { document.querySelectorAll(".fz:not(#boardZ)").forEach(e => e.classList.remove("on")); if (id) $(id).classList.add("on"); };

// 1) confronto com prova irrefutável
$("#compareContinue").onclick = () => {
  window.compared = true; renderBoard(false);
  const s = suspects[CULPRIT], nm = s.name.replace(/█+/g, "").trim();
  $("#confZ").innerHTML = `<div class="conf-room">
  <div class="conf-head"><span>CASO Nº 017</span><span>SALA DE INTERROGATÓRIO — CONFRONTO FINAL</span></div>
  <div class="conf-grid">
    <aside class="mugshot step" style="--d:.1s">
      <div class="mug-frame"><i class="tape"></i><img src="${mug(CULPRIT)}" alt=""></div>
      <div class="mug-plate"><b>017-0${CULPRIT}</b>${s.name}<small>${s.occupation}</small></div>
    </aside>
    <section class="conf-main">
      <div class="cs inv step" style="--d:.4s"><span>INVESTIGADOR</span>Você disse que deixou a praça antes das duas e que nunca teve essa faca nas mãos. Mas as provas contam outra história: o recibo das 01:43, a câmera desviada, a lâmpada estilhaçada e a foto de alguém seguindo a vítima.</div>
      <div class="lightbox step" style="--d:1.5s">
        <figure><img src="digital-found.png" alt=""><figcaption>DIGITAL NO CABO DA FACA<small>EVIDÊNCIA #07</small></figcaption></figure>
        <div class="match"><div class="match-ring">98%</div><em>COMPATÍVEL</em></div>
        <figure><img src="digital-s${CULPRIT}.png" alt=""><figcaption>DIGITAL DE ${nm}<small>REG. 017-0${CULPRIT}</small></figcaption></figure>
      </div>
      <div class="cs inv step" style="--d:2.6s"><span>INVESTIGADOR</span>Núcleo, espirais e bifurcações coincidem. Esta é a sua digital, no cabo da arma. Não há mais o que negar.</div>
      <div class="cs sus step" style="--d:3.8s"><span>${s.name}</span>...Eu só queria conversar. Perdi o controle.</div>
      <button class="fbtn arrest step" style="--d:4.8s" id="arrest">PRENDER O SUSPEITO →</button>
    </section>
  </div></div>`;
  show("#confZ");
  $("#arrest").onclick = timeline;
};

// 2) o quadro vira a reconstrução: mesmos cartões, em ordem cronológica, ligados por fios
function timeline() {
  const ev = [
    ["01:00", "Marcos chega à praça e se senta no banco. A manga da camisa prende numa farpa e rasga.", "SUSPEITO 02 · #03", mug(2)],
    ["01:30", "Eduardo encerra o turno, tranca o quiosque e deixa a praça.", "SUSPEITO 01", mug(1)],
    ["01:43", "Marcos compra uma água, joga o recibo na lixeira e vai embora.", "EVIDÊNCIA #04"],
    ["01:50", "Daniel e a vítima discutem perto da entrada da praça.", "SUSPEITO 04", mug(CULPRIT)],
    ["01:52", "A vítima caminha pela praça. Uma figura de jaqueta escura vem logo atrás.", "EVIDÊNCIA #06", "foto-revelada.svg"],
    ["02:00", "A lâmpada do poste é quebrada. A câmera já apontava para o outro lado.", "EVIDÊNCIA #05"],
    ["02:10", "Daniel alcança a vítima e a fere com a faca. O banco guarda marcas da luta.", "EVIDÊNCIAS #01 #02 #03"],
    ["02:17", "Daniel foge. A digital fica no cabo da faca.", "EVIDÊNCIA #07", "digital-found.png", "print"],
    ["02:20", "Renato ouve o barulho da janela e, depois, vê uma figura de capuz cruzar a esquina.", "SUSPEITO 03", mug(3)],
    ["24/09", "A digital é revelada e comparada. Daniel é preso.", "CASO ENCERRADO", mug(CULPRIT), "arrested"]
  ];
  $("#tlZ").innerHTML = `<h2>RECONSTRUÇÃO DO CASO</h2><p class="sub">O quadro foi reorganizado em ordem cronológica, com as evidências ligadas.</p>
  <div class="tl-scroll"><div class="tl-row" id="tlRow"><svg class="strings" id="tlStrings"></svg>${ev.map((e, i) =>
    `<div class="cd tl-card" data-t="${i}" style="${rot(i)};--i:${i};margin-top:${i % 2 ? 64 : 0}px"><button class="pin" tabindex="-1"></button>${e[3] ? `<div class="tl-pic ${e[4] || ""}"><img src="${e[3]}" alt="">${e[4] === "arrested" ? "<b>PRESO</b>" : ""}</div>` : ""}<time>${e[0]}</time><p>${e[1]}</p><strong>${e[2]}</strong></div>`).join("")}</div></div>
  <button class="fbtn" id="toNews">CONTINUAR →</button>`;
  show("#tlZ");
  setTimeout(() => {
    const row = $("#tlRow"), cards = [...row.querySelectorAll(".tl-card")];
    $("#tlStrings").innerHTML = cards.slice(1).map((c, i) => {
      const d = stringPath(pinPoint(cards[i], row), pinPoint(c, row)), t = `animation-delay:${(i + 1) * .6}s`;
      return `<path class="shade draw" pathLength="1" style="${t}" d="${d}"/><path class="str draw" pathLength="1" style="${t}" d="${d}"/>`;
    }).join("");
  }, 60);
  $("#toNews").onclick = news;
}

// 3) jornal antigo
function news() {
  const s = suspects[CULPRIT], raw = s.name.replace(/█+/g, "").trim(), nm = raw[0] + raw.slice(1).toLowerCase();
  $("#newsZ").innerHTML = `<div class="news"><p class="kicker">★ EDIÇÃO EXTRA ★ POLÍCIA ★ EDIÇÃO EXTRA ★</p><h1 class="mast">A GAZETA</h1>
  <div class="meta"><span>Edição de 24 / 09 / 2026</span><span>Ano CIV · Nº 017</span><span>R$ 2,00</span></div>
  <h3>Suspeito é preso pelo crime da praça</h3><p class="deck">Digital revelada sob luz ultravioleta foi a prova decisiva</p>
  <div class="cols"><figure class="npic"><img src="${mug(CULPRIT)}" alt=""><figcaption>${nm}, preso na manhã de ontem.</figcaption></figure>A polícia prendeu ontem ${nm} pelo assassinato ocorrido na madrugada do dia 14, em uma praça pública. Uma digital revelada sob luz ultravioleta no cabo da faca foi decisiva para a identificação.<br><br>Segundo os investigadores, o suspeito foi confrontado com as provas, entre elas o recibo das 01:43, a câmera desviada e uma fotografia que mostra a vítima sendo seguida minutos antes do crime. Diante da digital, ele confessou.<br><br>O Caso nº 017 está oficialmente encerrado.</div></div>
  <button class="fbtn" id="toEnd">CONTINUAR →</button>`;
  show("#newsZ");
  $("#toEnd").onclick = () => {
    show("#endZ");
    setTimeout(() => $("#endZ").classList.add("flip"), 300);
  };   // 4) verso da pasta
}
$("#again").onclick = () => location.reload();


/* =========================================
   SALA DE REVELAÇÃO
========================================= */

const drRoom = $("#drRoom");
const drPaper = $("#drPaper");
const drTray = $("#drTray");
const drLine = $("#drLine");
const photoModal = $("#photoModal");
const darkContinue = $("#darkContinue");

let drStage = 0;     // 0 na mesa · 1 revelando · 2 revelada · 3 pendurada
let drHungAt = 0;

function openDarkroom() {
    hideScreens();
    darkScreen.classList.add("active");
}

function drText(hint, status) {
    $("#drHint").textContent = hint;
    if (status) $("#drStatus").textContent = status;
}
drText("ARRASTE O PAPEL ATÉ O REVELADOR", "NÃO REVELADA");

function drPlace(left, top) {
    drPaper.style.left = left;
    drPaper.style.top = top;
}

function drInside(el) {
    const p = drPaper.getBoundingClientRect(), r = el.getBoundingClientRect();
    const x = p.left + p.width / 2, y = p.top + p.height / 2;
    return x > r.left && x < r.right && y > r.top && y < r.bottom;
}

function drDrop() {
    if (drInside(drTray)) {
        drPlace("30.5%", "67%");
        if (drStage === 0) drDevelop();
    } else if (drStage === 2 && drInside(drLine)) {
        drStage = 3;
        drHungAt = Date.now();
        drPlace("58%", "16%");
        drPaper.classList.add("hung");
        drLine.classList.remove("hot");
        drText("CLIQUE NA FOTO PARA EXAMINÁ-LA", "PENDURADA");
    } else if (drStage === 2) {
        drPlace("30.5%", "67%");
    } else {
        drPlace("5.5%", "66%");
    }
    drLine.classList.toggle("hot", drStage === 2);
}

function drDevelop() {
    drStage = 1;
    drRoom.classList.add("developing");
    drPaper.classList.add("developing", "busy");
    drText("REVELANDO... A IMAGEM APARECE NA SOLUÇÃO", "REVELANDO");
    setTimeout(() => {
        drStage = 2;
        drRoom.classList.remove("developing");
        drPaper.classList.remove("busy");
        drLine.classList.add("hot");
        drText("REVELADA! RETIRE E PENDURE NO VARAL", "REVELADA");
    }, 5200);
}

drPaper.onpointerdown = event => {
    if (drStage === 1 || drStage === 3) return;
    const room = drRoom.getBoundingClientRect(), box = drPaper.getBoundingClientRect();
    const ox = event.clientX - box.left, oy = event.clientY - box.top;
    drPaper.setPointerCapture(event.pointerId);
    drPaper.classList.add("drag");
    drPaper.onpointermove = move => drPlace(`${move.clientX - ox - room.left}px`, `${move.clientY - oy - room.top}px`);
    drPaper.onpointerup = () => {
        drPaper.onpointermove = drPaper.onpointerup = null;
        drPaper.classList.remove("drag");
        drDrop();
    };
};

drPaper.onclick = () => {
    if (drStage === 3 && Date.now() - drHungAt > 400) photoModal.classList.add("active");
};

photoModal.onclick = event => {
    if (event.target === photoModal) photoModal.classList.remove("active");
};

$("#collectPhoto").onclick = () => {
    photoDone = true;
    photoModal.classList.remove("active");
    drText("FOTO ARQUIVADA NO QUADRO DE EVIDÊNCIAS", "ARQUIVADA");
    darkContinue.disabled = false;
    darkContinue.textContent = "PROSSEGUIR →";
    darkContinue.classList.add("ready");
    renderBoard(false);
};

darkContinue.onclick = () => {
    if (!photoDone) { showAlert("Revele, pendure e examine a foto antes de prosseguir."); return; }
    openUV();
};
$("#darkBack").onclick = openSuspects;
