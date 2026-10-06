const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);


/* =========================================
   ELEMENTOS PRINCIPAIS
========================================= */

const folder = $(".folder");
const navigation = $(".navigation");

const investigation = $("#investigationScreen");
const suspectsScreen = $("#suspectsScreen");
const interrogation = $("#interrogationScreen");

const clueModal = $("#clueModal");
const systemAlert = $("#systemAlert");

const continueToSuspects = $("#continueToSuspects");


/* =========================================
   EVIDÊNCIAS
========================================= */

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
            "Dentro da lixeira há um recibo parcialmente rasgado. O horário registrado é 01:43.",

        code: "EVIDÊNCIA #04"
    },

    light: {
        title: "Poste de iluminação",

        description:
            "A lâmpada do poste está parcialmente quebrada. A câmera de segurança instalada próxima ao local estava apontada para outra direção.",

        code: "EVIDÊNCIA #05"
    }

};


/* =========================================
   SUSPEITOS
========================================= */

const suspects = {

    1: {

        name: "EDUARDO █████",
        occupation: "FUNCIONÁRIO LOCAL",

        dialogues: [

            {
                question:
                    "Onde você estava por volta das 02:00?",

                answer:
                    "Eu estava em casa. Não saí naquela noite.",

                choices: [

                    [
                        "Alguém pode confirmar isso?",
                        "Minha irmã estava comigo. Ela pode confirmar."
                    ],

                    [
                        "Você conhecia a vítima?",
                        "Conhecia de vista. Ela costumava passar pela praça."
                    ],

                    [
                        "Então por que seu nome apareceu no local?",
                        "Meu nome? Não sei do que você está falando."
                    ]

                ]
            },

            {
                question:
                    "Você esteve na praça naquela noite?",

                answer:
                    "Não. Como eu disse, fiquei em casa.",

                choices: [

                    [
                        "Encontramos uma marca que pode estar ligada a você.",
                        "Isso não prova que eu estava lá."
                    ],

                    [
                        "Você conhece o banco da praça?",
                        "Todo mundo que mora aqui conhece aquele banco."
                    ],

                    [
                        "A câmera estava virada para outro lado.",
                        "Eu não tenho nada a ver com a câmera."
                    ]

                ]
            },

            {
                question:
                    "Existe alguma coisa que você não está contando?",

                answer:
                    "Não. Já falei tudo que sei.",

                choices: [

                    [
                        "Pense bem antes de responder.",
                        "Eu já pensei. Não tenho mais nada para dizer."
                    ],

                    [
                        "A vítima tinha inimigos?",
                        "Talvez. Ela tinha discutido com algumas pessoas recentemente."
                    ],

                    [
                        "Vamos verificar seu álibi.",
                        "Faça o que precisar."
                    ]

                ]
            }

        ]
    },


    2: {

        name: "MARCOS █████",
        occupation: "CONHECIDO DA VÍTIMA",

        dialogues: [

            {
                question:
                    "Qual era sua relação com a vítima?",

                answer:
                    "Nós nos conhecíamos há alguns anos.",

                choices: [

                    [
                        "Eram amigos?",
                        "Já fomos. As coisas mudaram nos últimos meses."
                    ],

                    [
                        "Vocês tiveram algum problema?",
                        "Tivemos uma discussão. Nada além disso."
                    ],

                    [
                        "Você está escondendo alguma coisa?",
                        "Não estou escondendo nada."
                    ]

                ]
            },

            {
                question:
                    "Por que você esteve perto da praça?",

                answer:
                    "Eu passei por lá mais cedo.",

                choices: [

                    [
                        "Que horas?",
                        "Por volta de uma da manhã."
                    ],

                    [
                        "Encontramos um recibo marcado às 01:43.",
                        "Eu não sei nada sobre esse recibo."
                    ],

                    [
                        "Alguém viu você?",
                        "Acho que não."
                    ]

                ]
            },

            {
                question:
                    "Você sabia que a vítima estaria naquela praça?",

                answer:
                    "Não. Eu não sabia.",

                choices: [

                    [
                        "Tem certeza?",
                        "Tenho."
                    ],

                    [
                        "Vocês discutiram naquela noite?",
                        "Não quero falar sobre isso."
                    ],

                    [
                        "Então por que saiu de casa?",
                        "Eu precisava resolver algumas coisas."
                    ]

                ]
            }

        ]
    },


    3: {

        name: "RENATO █████",
        occupation: "MORADOR DA REGIÃO",

        dialogues: [

            {
                question:
                    "Você mora próximo à praça?",

                answer:
                    "Sim. Moro a duas quadras daqui.",

                choices: [

                    [
                        "Ouviu alguma coisa naquela noite?",
                        "Ouvi um barulho estranho."
                    ],

                    [
                        "Que horas foi isso?",
                        "Acho que depois das duas."
                    ],

                    [
                        "Você saiu de casa?",
                        "Não."
                    ]

                ]
            },

            {
                question:
                    "Você viu alguém na praça?",

                answer:
                    "Vi uma pessoa passando de longe.",

                choices: [

                    [
                        "Consegue descrever?",
                        "Era difícil enxergar. Estava escuro."
                    ],

                    [
                        "Era homem ou mulher?",
                        "Parecia ser um homem."
                    ],

                    [
                        "Você está escondendo essa pessoa?",
                        "Não. Eu realmente não consegui ver."
                    ]

                ]
            },

            {
                question:
                    "Por que você demorou para contar isso?",

                answer:
                    "Porque achei que não fosse importante.",

                choices: [

                    [
                        "Agora parece importante.",
                        "Eu percebi isso depois."
                    ],

                    [
                        "Você conhece essa pessoa?",
                        "Talvez eu tenha reconhecido a roupa."
                    ],

                    [
                        "Que roupa?",
                        "Uma jaqueta escura. Foi só isso que vi."
                    ]

                ]
            }

        ]
    },


    4: {

        name: "DANIEL █████",
        occupation: "ÚLTIMA PESSOA VISTA",

        dialogues: [

            {
                question:
                    "Você foi a última pessoa vista com a vítima?",

                answer:
                    "Eu conversei com ela naquela noite.",

                choices: [

                    [
                        "Sobre o que conversaram?",
                        "Sobre um problema pessoal."
                    ],

                    [
                        "Vocês discutiram?",
                        "A conversa ficou um pouco tensa."
                    ],

                    [
                        "Onde aconteceu?",
                        "Perto da entrada da praça."
                    ]

                ]
            },

            {
                question:
                    "Que horas você deixou a praça?",

                answer:
                    "Pouco antes das duas.",

                choices: [

                    [
                        "Tem certeza?",
                        "Sim. Tenho certeza."
                    ],

                    [
                        "Encontramos evidências de que alguém ficou depois desse horário.",
                        "Então não fui eu."
                    ],

                    [
                        "Alguém pode confirmar?",
                        "Não sei."
                    ]

                ]
            },

            {
                question:
                    "Você conhecia a faca encontrada no local?",

                answer:
                    "Não. Nunca vi aquela faca.",

                choices: [

                    [
                        "A lâmina apresenta marcas recentes.",
                        "Isso não tem nada a ver comigo."
                    ],

                    [
                        "Você está nervoso.",
                        "É uma situação difícil. É normal."
                    ],

                    [
                        "Essa é sua última chance de explicar.",
                        "Eu já expliquei tudo que aconteceu."
                    ]

                ]
            }

        ]
    }

};


/* =========================================
   ESTADO
========================================= */

const foundClues = new Set();

let currentClue = null;
let currentSuspect = null;
let currentRound = 0;


/* =========================================
   ABRIR CASO
========================================= */

$("#openCase").onclick = () => {

    folder.classList.add("open");

    setTimeout(() => {
        navigation.classList.add("visible");
    }, 1200);

};


/* =========================================
   PRÓXIMO
========================================= */

$("#nextPage").onclick = () => {

    /*
       PRIMEIRA PÁGINA
       Vai para o local do crime.
    */

    if (
        !investigation.classList.contains("active") &&
        !suspectsScreen.classList.contains("active") &&
        !interrogation.classList.contains("active")
    ) {

        openInvestigation();

        return;
    }


    /*
       LOCAL DO CRIME
    */

    if (investigation.classList.contains("active")) {

        if (foundClues.size < 5) {

            showAlert(
                "Analise todas as 5 evidências antes de prosseguir."
            );

            return;
        }

        openSuspects();

        return;
    }


    /*
       SUSPEITOS
    */

    if (suspectsScreen.classList.contains("active")) {

        return;
    }

};


/* =========================================
   ANTERIOR
========================================= */

$("#previousPage").onclick = () => {

    if (interrogation.classList.contains("active")) {

        closeInterrogation();
        openSuspects();

        return;
    }


    if (suspectsScreen.classList.contains("active")) {

        closeSuspects();
        openInvestigation();

        return;
    }


    if (investigation.classList.contains("active")) {

        investigation.classList.remove("active");

        $("#pageCounter").textContent = "01 / 06";

        return;
    }

};


/* =========================================
   LOCAL DO CRIME
========================================= */

function openInvestigation() {

    investigation.classList.add("active");

    suspectsScreen.classList.remove("active");

    interrogation.classList.remove("active");

    $("#pageCounter").textContent = "02 / 06";

}


/* =========================================
   SUSPEITOS
========================================= */

function openSuspects() {

    investigation.classList.remove("active");

    suspectsScreen.classList.add("active");

    interrogation.classList.remove("active");

    $("#pageCounter").textContent = "03 / 06";

}


function closeSuspects() {

    suspectsScreen.classList.remove("active");

}


/* =========================================
   INTERROGATÓRIO
========================================= */

function openInterrogation(id) {

    currentSuspect = id;

    currentRound = 0;

    suspectsScreen.classList.remove("active");

    interrogation.classList.add("active");

    $("#pageCounter").textContent = "04 / 06";

    updateInterrogation();

}


function closeInterrogation() {

    interrogation.classList.remove("active");

}


/* =========================================
   HOTSPOTS
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


/* =========================================
   ARQUIVAR EVIDÊNCIA
========================================= */

$("#confirmClue").onclick = () => {

    if (!currentClue) {
        return;
    }


    foundClues.add(currentClue);


    $("#clueCounter").textContent =
        `${foundClues.size} / 5`;


    clueModal.classList.remove("active");


    /*
       QUANDO AS 5 EVIDÊNCIAS FOREM ENCONTRADAS
    */

    if (foundClues.size === 5) {

        continueToSuspects.disabled = false;

        continueToSuspects.textContent =
            "PROSSEGUIR PARA SUSPEITOS →";

        continueToSuspects.classList.add("ready");

    }

};


/* =========================================
   FECHAR EVIDÊNCIA
========================================= */

$("#closeClue").onclick = () => {

    clueModal.classList.remove("active");

};


clueModal.onclick = event => {

    if (event.target === clueModal) {

        clueModal.classList.remove("active");

    }

};


/* =========================================
   BOTÃO PROSSEGUIR PARA SUSPEITOS
========================================= */

continueToSuspects.onclick = () => {

    if (foundClues.size < 5) {

        showAlert(
            "Analise todas as 5 evidências antes de prosseguir."
        );

        return;
    }

    openSuspects();

};


/* =========================================
   SUSPEITOS
========================================= */

$$(".suspect-card").forEach(card => {

    card.onclick = () => {

        openInterrogation(
            card.dataset.suspect
        );

    };

});


/* =========================================
   VOLTAR PARA EVIDÊNCIAS
========================================= */

$("#backEvidence").onclick = () => {

    closeSuspects();

    openInvestigation();

};


/* =========================================
   ATUALIZAR INTERROGATÓRIO
========================================= */

function updateInterrogation() {

    const suspect =
        suspects[currentSuspect];

    const dialogue =
        suspect.dialogues[currentRound];


    $("#profileNumber").textContent =
        `SUSPEITO ${String(currentSuspect).padStart(2, "0")}`;


    $("#profileName").textContent =
        suspect.name;


    $("#profileOccupation").textContent =
        suspect.occupation;


    $("#interrogationRound").textContent =
        `INTERROGATÓRIO ${currentRound + 1} / 03`;


    $("#dialogProgress").textContent =
        `RODADA ${currentRound + 1} / 3`;


    $("#investigatorMessage").textContent =
        dialogue.question;


    $("#suspectMessage").textContent =
        dialogue.answer;


    $("#suspectMessageName").textContent =
        suspect.name;


    const choices =
        $("#choices");


    choices.innerHTML = "";


    dialogue.choices.forEach(
        ([question, response], index) => {

            const button =
                document.createElement("button");


            button.className =
                "choice-button";


            button.textContent =
                `${index + 1}. ${question}`;


            button.onclick = () => {

                $("#suspectMessage").textContent =
                    response;


                $$(".choice-button").forEach(item => {

                    item.disabled = true;

                    item.style.opacity = ".5";

                });


                setTimeout(() => {

                    currentRound++;


                    if (currentRound < 3) {

                        updateInterrogation();

                    } else {

                        finishInterrogation();

                    }

                }, 1200);

            };


            choices.appendChild(button);

        }
    );

}


/* =========================================
   FINAL DO INTERROGATÓRIO
========================================= */

function finishInterrogation() {

    $("#interrogationRound").textContent =
        "INTERROGATÓRIO CONCLUÍDO";


    $("#dialogProgress").textContent =
        "3 / 3";


    $("#choices").innerHTML = `
        <button class="choice-button" id="returnSuspects">
            ← VOLTAR À LISTA DE SUSPEITOS
        </button>
    `;


    $("#returnSuspects").onclick = () => {

        closeInterrogation();

        openSuspects();

    };

}


/* =========================================
   VOLTAR AO ARQUIVO
========================================= */

$("#backToFile").onclick = () => {

    investigation.classList.remove("active");

    $("#pageCounter").textContent =
        "01 / 06";

};


/* =========================================
   VOLTAR PARA SUSPEITOS
========================================= */

$("#backSuspects").onclick = () => {

    closeInterrogation();

    openSuspects();

};


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


/* =========================================
   ESC
========================================= */

document.onkeydown = event => {

    if (event.key === "Escape") {

        clueModal.classList.remove("active");

        systemAlert.classList.remove("active");

    }

};
