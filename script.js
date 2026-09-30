/* =========================================
   ELEMENTOS
========================================= */

const folder =
    document.querySelector(".folder");

const openButton =
    document.querySelector("#openCase");

const navigation =
    document.querySelector(".navigation");

const nextPage =
    document.querySelector("#nextPage");

const previousPage =
    document.querySelector("#previousPage");

const pageCounter =
    document.querySelector("#pageCounter");

const investigationScreen =
    document.querySelector("#investigationScreen");

const backToFile =
    document.querySelector("#backToFile");

const clueModal =
    document.querySelector("#clueModal");

const closeClue =
    document.querySelector("#closeClue");

const confirmClue =
    document.querySelector("#confirmClue");

const clueTitle =
    document.querySelector("#clueTitle");

const clueDescription =
    document.querySelector("#clueDescription");

const clueCode =
    document.querySelector("#clueCode");

const clueCounter =
    document.querySelector("#clueCounter");

const suspectsScreen =
    document.querySelector("#suspectsScreen");

const interrogationScreen =
    document.querySelector("#interrogationScreen");

const backSuspects =
    document.querySelector("#backSuspects");

const backEvidence =
    document.querySelector("#backEvidence");

const interrogationRound =
    document.querySelector("#interrogationRound");

const profileNumber =
    document.querySelector("#profileNumber");

const profileName =
    document.querySelector("#profileName");

const profileOccupation =
    document.querySelector("#profileOccupation");

const investigatorMessage =
    document.querySelector("#investigatorMessage");

const suspectMessage =
    document.querySelector("#suspectMessage");

const suspectMessageName =
    document.querySelector("#suspectMessageName");

const choices =
    document.querySelector("#choices");

const dialogProgress =
    document.querySelector("#dialogProgress");

const systemAlert =
    document.querySelector("#systemAlert");

const alertMessage =
    document.querySelector("#alertMessage");

const closeAlert =
    document.querySelector("#closeAlert");


/* =========================================
   EVIDÊNCIAS
========================================= */

const clues = {

    knife: {

        title: "Faca encontrada",

        description:
            "Uma faca foi encontrada a poucos metros do corpo. Há pequenas marcas avermelhadas na lâmina. A arma foi recolhida para análise.",

        code:
            "EVIDÊNCIA #01"

    },

    body: {

        title: "Vítima",

        description:
            "O corpo apresenta um ferimento profundo na região abdominal. Não há documentos próximos à vítima.",

        code:
            "EVIDÊNCIA #02"

    },

    bench: {

        title: "Banco da praça",

        description:
            "Há marcas recentes no banco. Um pequeno pedaço de tecido foi encontrado preso à madeira.",

        code:
            "EVIDÊNCIA #03"

    },

    trash: {

        title: "Lixeira",

        description:
            "Dentro da lixeira há um recibo parcialmente rasgado. O horário registrado é 01:43.",

        code:
            "EVIDÊNCIA #04"

    },

    light: {

        title: "Poste de iluminação",

        description:
            "A lâmpada do poste está parcialmente quebrada. A câmera de segurança instalada próxima ao local estava apontada para outra direção.",

        code:
            "EVIDÊNCIA #05"

    }

};


/* =========================================
   ESTADO
========================================= */

const foundClues =
    new Set();

let currentClue =
    null;

let currentSuspect =
    null;

let currentRound =
    0;


/* =========================================
   SUSPEITOS
========================================= */

const suspects = {

    1: {

        name: "EDUARDO █████",

        occupation:
            "FUNCIONÁRIO LOCAL",

        dialogues: [

            {

                question:
                    "Onde você estava por volta das 02:00?",

                answer:
                    "Eu estava em casa. Não saí naquela noite.",

                choices: [

                    {
                        text:
                            "Alguém pode confirmar isso?",

                        response:
                            "Minha irmã estava comigo. Ela pode confirmar."
                    },

                    {
                        text:
                            "Você conhecia a vítima?",

                        response:
                            "Conhecia de vista. Ela costumava passar pela praça."
                    },

                    {
                        text:
                            "Então por que seu nome apareceu no local?",

                        response:
                            "Meu nome? Não sei do que você está falando."

                    }

                ]

            },

            {

                question:
                    "Você esteve na praça naquela noite?",

                answer:
                    "Não. Como eu disse, fiquei em casa.",

                choices: [

                    {
                        text:
                            "Encontramos uma marca que pode estar ligada a você.",

                        response:
                            "Isso não prova que eu estava lá."
                    },

                    {
                        text:
                            "Você conhece o banco da praça?",

                        response:
                            "Todo mundo que mora aqui conhece aquele banco."
                    },

                    {
                        text:
                            "A câmera estava virada para outro lado.",

                        response:
                            "Eu não tenho nada a ver com a câmera."

                    }

                ]

            },

            {

                question:
                    "Existe alguma coisa que você não está contando?",

                answer:
                    "Não. Já falei tudo que sei.",

                choices: [

                    {
                        text:
                            "Pense bem antes de responder.",

                        response:
                            "Eu já pensei. Não tenho mais nada para dizer."
                    },

                    {
                        text:
                            "A vítima tinha inimigos?",

                        response:
                            "Talvez. Ela tinha discutido com algumas pessoas recentemente."
                    },

                    {
                        text:
                            "Vamos verificar seu álibi.",

                        response:
                            "Faça o que precisar."

                    }

                ]

            }

        ]

    },


    2: {

        name: "MARCOS █████",

        occupation:
            "CONHECIDO DA VÍTIMA",

        dialogues: [

            {

                question:
                    "Qual era sua relação com a vítima?",

                answer:
                    "Nós nos conhecíamos há alguns anos.",

                choices: [

                    {
                        text:
                            "Eram amigos?",

                        response:
                            "Já fomos. As coisas mudaram nos últimos meses."
                    },

                    {
                        text:
                            "Vocês tiveram algum problema?",

                        response:
                            "Tivemos uma discussão. Nada além disso."
                    },

                    {
                        text:
                            "Você está escondendo alguma coisa?",

                        response:
                            "Não estou escondendo nada."

                    }

                ]

            },

            {

                question:
                    "Por que você esteve perto da praça?",

                answer:
                    "Eu passei por lá mais cedo.",

                choices: [

                    {
                        text:
                            "Que horas?",

                        response:
                            "Por volta de uma da manhã."
                    },

                    {
                        text:
                            "Encontramos um recibo marcado às 01:43.",

                        response:
                            "Eu não sei nada sobre esse recibo."
                    },

                    {
                        text:
                            "Alguém viu você?",

                        response:
                            "Acho que não."

                    }

                ]

            },

            {

                question:
                    "Você sabia que a vítima estaria naquela praça?",

                answer:
                    "Não. Eu não sabia.",

                choices: [

                    {
                        text:
                            "Tem certeza?",

                        response:
                            "Tenho."
                    },

                    {
                        text:
                            "Vocês discutiram naquela noite?",

                        response:
                            "Não quero falar sobre isso."
                    },

                    {
                        text:
                            "Então por que saiu de casa?",

                        response:
                            "Eu precisava resolver algumas coisas."

                    }

                ]

            }

        ]

    },


    3: {

        name: "RENATO █████",

        occupation:
            "MORADOR DA REGIÃO",

        dialogues: [

            {

                question:
                    "Você mora próximo à praça?",

                answer:
                    "Sim. Moro a duas quadras daqui.",

                choices: [

                    {
                        text:
                            "Ouviu alguma coisa naquela noite?",

                        response:
                            "Ouvi um barulho estranho."
                    },

                    {
                        text:
                            "Que horas foi isso?",

                        response:
                            "Acho que depois das duas."
                    },

                    {
                        text:
                            "Você saiu de casa?",

                        response:
                            "Não."

                    }

                ]

            },

            {

                question:
                    "Você viu alguém na praça?",

                answer:
                    "Vi uma pessoa passando de longe.",

                choices: [

                    {
                        text:
                            "Consegue descrever?",

                        response:
                            "Era difícil enxergar. Estava escuro."
                    },

                    {
                        text:
                            "Era homem ou mulher?",

                        response:
                            "Parecia ser um homem."
                    },

                    {
                        text:
                            "Você está escondendo essa pessoa?",

                        response:
                            "Não. Eu realmente não consegui ver."

                    }

                ]

            },

            {

                question:
                    "Por que você demorou para contar isso?",

                answer:
                    "Porque achei que não fosse importante.",

                choices: [

                    {
                        text:
                            "Agora parece importante.",

                        response:
                            "Eu percebi isso depois."
                    },

                    {
                        text:
                            "Você conhece essa pessoa?",

                        response:
                            "Talvez eu tenha reconhecido a roupa."
                    },

                    {
                        text:
                            "Que roupa?",

                        response:
                            "Uma jaqueta escura. Foi só isso que vi."

                    }

                ]

            }

        ]

    },


    4: {

        name: "DANIEL █████",

        occupation:
            "ÚLTIMA PESSOA VISTA",

        dialogues: [

            {

                question:
                    "Você foi a última pessoa vista com a vítima?",

                answer:
                    "Eu conversei com ela naquela noite.",

                choices: [

                    {
                        text:
                            "Sobre o que conversaram?",

                        response:
                            "Sobre um problema pessoal."
                    },

                    {
                        text:
                            "Vocês discutiram?",

                        response:
                            "A conversa ficou um pouco tensa."
                    },

                    {
                        text:
                            "Onde aconteceu?",

                        response:
                            "Perto da entrada da praça."

                    }

                ]

            },

            {

                question:
                    "Que horas você deixou a praça?",

                answer:
                    "Pouco antes das duas.",

                choices: [

                    {
                        text:
                            "Tem certeza?",

                        response:
                            "Sim. Tenho certeza."
                    },

                    {
                        text:
                            "Encontramos evidências de que alguém ficou depois desse horário.",

                        response:
                            "Então não fui eu."
                    },

                    {
                        text:
                            "Alguém pode confirmar?",

                        response:
                            "Não sei."

                    }

                ]

            },

            {

                question:
                    "Você conhecia a faca encontrada no local?",

                answer:
                    "Não. Nunca vi aquela faca.",

                choices: [

                    {
                        text:
                            "A lâmina apresenta marcas recentes.",

                        response:
                            "Isso não tem nada a ver comigo."
                    },

                    {
                        text:
                            "Você está nervoso.",

                        response:
                            "É uma situação difícil. É normal."
                    },

                    {
                        text:
                            "Essa é sua última chance de explicar.",

                        response:
                            "Eu já expliquei tudo que aconteceu."

                    }

                ]

            }

        ]

    }

};


/* =========================================
   ABRIR PASTA
========================================= */

openButton.addEventListener(
    "click",
    () => {

        folder.classList.add("open");

        setTimeout(
            () => {

                navigation.classList.add("visible");

            },
            1200
        );

    }
);


/* =========================================
   PRÓXIMA PÁGINA
========================================= */

nextPage.addEventListener(
    "click",
    () => {

        /*
            A página atual é o arquivo.
            A próxima é o local da ocorrência.
        */

        if (
            !investigationScreen.classList.contains("active") &&
            !suspectsScreen.classList.contains("active") &&
            !interrogationScreen.classList.contains("active")
        ) {

            openInvestigation();

            return;

        }


        /*
            Se estiver no local,
            só permite continuar quando
            todas as pistas forem encontradas.
        */

        if (
            investigationScreen.classList.contains("active")
        ) {

            if (
                foundClues.size <
                Object.keys(clues).length
            ) {

                showAlert(
                    "Todas as 5 evidências precisam ser analisadas antes de iniciar os interrogatórios."
                );

                return;

            }

            openSuspects();

        }

    }
);


/* =========================================
   PÁGINA ANTERIOR
========================================= */

previousPage.addEventListener(
    "click",
    () => {

        if (
            interrogationScreen.classList.contains("active")
        ) {

            closeInterrogation();

            openSuspects();

            return;

        }

        if (
            suspectsScreen.classList.contains("active")
        ) {

            closeSuspects();

            openInvestigation();

            return;

        }

        if (
            investigationScreen.classList.contains("active")
        ) {

            investigationScreen.classList.remove(
                "active"
            );

            pageCounter.textContent =
                "01 / 06";

        }

    }
);


/* =========================================
   INVESTIGAÇÃO
========================================= */

function openInvestigation() {

    investigationScreen.classList.add(
        "active"
    );

    suspectsScreen.classList.remove(
        "active"
    );

    interrogationScreen.classList.remove(
        "active"
    );

    pageCounter.textContent =
        "02 / 06";

}


/* =========================================
   VOLTAR PARA ARQUIVO
========================================= */

backToFile.addEventListener(
    "click",
    () => {

        investigationScreen.classList.remove(
            "active"
        );

        pageCounter.textContent =
            "01 / 06";

    }
);


/* =========================================
   OBJETOS DAS EVIDÊNCIAS
========================================= */

document
    .querySelectorAll(".hotspot")
    .forEach(
        (object) => {

            object.addEventListener(
                "click",
                () => {

                    const clueId =
                        object.dataset.clue;

                    showClue(clueId);

                }
            );

        }
    );


/* =========================================
   MOSTRAR EVIDÊNCIA
========================================= */

function showClue(clueId) {

    const clue =
        clues[clueId];

    if (!clue) {
        return;
    }

    currentClue =
        clueId;

    clueTitle.textContent =
        clue.title;

    clueDescription.textContent =
        clue.description;

    clueCode.textContent =
        clue.code;

    /*
        Se já foi encontrada,
        muda o texto do botão.
    */

    if (
        foundClues.has(clueId)
    ) {

        confirmClue.textContent =
            "EVIDÊNCIA JÁ ARQUIVADA";

    } else {

        confirmClue.textContent =
            "ARQUIVAR EVIDÊNCIA";

    }

    clueModal.classList.add(
        "active"
    );

}


/* =========================================
   FECHAR EVIDÊNCIA
========================================= */

closeClue.addEventListener(
    "click",
    () => {

        clueModal.classList.remove(
            "active"
        );

    }
);


/* =========================================
   ARQUIVAR EVIDÊNCIA
========================================= */

confirmClue.addEventListener(
    "click",
    () => {

        if (currentClue) {

            foundClues.add(
                currentClue
            );

        }

        clueCounter.textContent =
            `${foundClues.size} / ${Object.keys(clues).length}`;

        clueModal.classList.remove(
            "active"
        );

    }
);


/* =========================================
   FECHAR MODAL CLICANDO FORA
========================================= */

clueModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === clueModal
        ) {

            clueModal.classList.remove(
                "active"
            );

        }

    }
);


/* =========================================
   ABRIR SUSPEITOS
========================================= */

function openSuspects() {

    investigationScreen.classList.remove(
        "active"
    );

    suspectsScreen.classList.add(
        "active"
    );

    interrogationScreen.classList.remove(
        "active"
    );

    pageCounter.textContent =
        "03 / 06";

}


/* =========================================
   FECHAR SUSPEITOS
========================================= */

function closeSuspects() {

    suspectsScreen.classList.remove(
        "active"
    );

}


/* =========================================
   VOLTAR PARA EVIDÊNCIAS
========================================= */

backEvidence.addEventListener(
    "click",
    () => {

        closeSuspects();

        openInvestigation();

    }
);


/* =========================================
   ESCOLHER SUSPEITO
========================================= */

document
    .querySelectorAll(".suspect-card")
    .forEach(
        (card) => {

            card.addEventListener(
                "click",
                () => {

                    const suspectId =
                        card.dataset.suspect;

                    openInterrogation(
                        suspectId
                    );

                }
            );

        }
    );


/* =========================================
   ABRIR INTERROGATÓRIO
========================================= */

function openInterrogation(
    suspectId
) {

    currentSuspect =
        suspectId;

    currentRound =
        0;

    const suspect =
        suspects[suspectId];

    if (!suspect) {
        return;
    }

    suspectsScreen.classList.remove(
        "active"
    );

    interrogationScreen.classList.add(
        "active"
    );

    pageCounter.textContent =
        "04 / 06";

    updateInterrogation();

}


/* =========================================
   ATUALIZAR INTERROGATÓRIO
========================================= */

function updateInterrogation() {

    const suspect =
        suspects[currentSuspect];

    const dialogue =
        suspect.dialogues[currentRound];

    if (
        !suspect ||
        !dialogue
    ) {

        return;

    }


    /* Perfil */

    profileNumber.textContent =
        `SUSPEITO ${String(currentSuspect).padStart(2,"0")}`;

    profileName.textContent =
        suspect.name;

    profileOccupation.textContent =
        suspect.occupation;


    /* Rodada */

    interrogationRound.textContent =
        `INTERROGATÓRIO ${String(currentRound + 1).padStart(2,"0")} / 03`;

    dialogProgress.textContent =
        `RODADA ${currentRound + 1} / 3`;


    /* Falas */

    investigatorMessage.textContent =
        dialogue.question;

    suspectMessage.textContent =
        dialogue.answer;

    suspectMessageName.textContent =
        suspect.name;


    /* Limpa escolhas */

    choices.innerHTML = "";


    /*
        Cria as três escolhas
    */

    dialogue.choices.forEach(
        (choice, index) => {

            const button =
                document.createElement("button");

            button.className =
                "choice-button";

            button.textContent =
                `${index + 1}. ${choice.text}`;


            button.addEventListener(
                "click",
                () => {

                    selectChoice(
                        choice
                    );

                }
            );


            choices.appendChild(
                button
            );

        }
    );

}


/* =========================================
   ESCOLHER PERGUNTA
========================================= */

function selectChoice(
    choice
) {

    /*
        A resposta escolhida aparece
        temporariamente como fala
        do suspeito.
    */

    suspectMessage.textContent =
        choice.response;


    /*
        Desativa as escolhas para evitar
        múltiplos cliques.
    */

    const buttons =
        document.querySelectorAll(
            ".choice-button"
        );

    buttons.forEach(
        button => {

            button.disabled =
                true;

            button.style.opacity =
                ".5";

        }
    );


    /*
        Espera a resposta aparecer
        antes de avançar.
    */

    setTimeout(
        () => {

            if (
                currentRound <
                suspects[currentSuspect].dialogues.length - 1
            ) {

                currentRound++;

                updateInterrogation();

            } else {

                finishInterrogation();

            }

        },
        1500
    );

}


/* =========================================
   FINAL DA CONVERSA
========================================= */

function finishInterrogation() {

    interrogationRound.textContent =
        "INTERROGATÓRIO CONCLUÍDO";

    dialogProgress.textContent =
        "3 / 3";

    choices.innerHTML = "";


    const button =
        document.createElement("button");

    button.className =
        "choice-button";

    button.textContent =
        "← VOLTAR À LISTA DE SUSPEITOS";


    button.addEventListener(
        "click",
        () => {

            closeInterrogation();

            openSuspects();

        }
    );


    choices.appendChild(
        button
    );

}


/* =========================================
   FECHAR INTERROGATÓRIO
========================================= */

function closeInterrogation() {

    interrogationScreen.classList.remove(
        "active"
    );

}


/* =========================================
   ALERTA
========================================= */

function showAlert(
    message
) {

    alertMessage.textContent =
        message;

    systemAlert.classList.add(
        "active"
    );

}

closeAlert.addEventListener(
    "click",
    () => {

        systemAlert.classList.remove(
            "active"
        );

    }
);


/* =========================================
   ESC
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            clueModal.classList.remove(
                "active"
            );

            systemAlert.classList.remove(
                "active"
            );

        }

    }
);
