/* =================================
   ELEMENTOS
================================= */

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

const investigationStatus =
    document.querySelector("#investigationStatus");

const continueInvestigation =
    document.querySelector("#continueInvestigation");

const investigationComplete =
    document.querySelector("#investigationComplete");

const startInterviews =
    document.querySelector("#startInterviews");


/* =================================
   EVIDÊNCIAS
================================= */

const clues = {

    knife: {

        title:
            "Faca encontrada",

        description:
            "Uma faca foi encontrada a poucos metros do corpo. Há pequenas marcas avermelhadas na lâmina. A arma foi recolhida para análise.",

        code:
            "EVIDÊNCIA #01"
    },


    body: {

        title:
            "Vítima",

        description:
            "O corpo apresenta um ferimento profundo na região abdominal. Não há documentos próximos à vítima.",

        code:
            "EVIDÊNCIA #02"
    },


    bench: {

        title:
            "Banco da praça",

        description:
            "Há marcas recentes no banco. Um pequeno pedaço de tecido foi encontrado preso à madeira.",

        code:
            "EVIDÊNCIA #03"
    },


    trash: {

        title:
            "Lixeira",

        description:
            "Dentro da lixeira há um recibo parcialmente rasgado. O horário registrado é 01:43.",

        code:
            "EVIDÊNCIA #04"
    },


    light: {

        title:
            "Poste de iluminação",

        description:
            "A lâmpada do poste está parcialmente quebrada. A câmera de segurança instalada próxima ao local estava apontada para outra direção.",

        code:
            "EVIDÊNCIA #05"
    }

};


/* =================================
   ESTADO DA INVESTIGAÇÃO
================================= */

const foundClues =
    new Set();

let currentClue =
    null;


/*
    O jogador precisa encontrar
    todas as evidências.

    O número NÃO é mostrado
    na interface.
*/

const totalClues =
    Object.keys(clues).length;


/* =================================
   ABRIR PASTA
================================= */

openButton.addEventListener(
    "click",
    () => {

        folder.classList.add("open");


        setTimeout(
            () => {

                navigation.classList.add(
                    "visible"
                );

            },
            1200
        );

    }
);


/* =================================
   PRÓXIMA PÁGINA
================================= */

nextPage.addEventListener(
    "click",
    () => {

        /*
            Só abre a investigação
            quando o jogador está
            na página inicial.
        */

        openInvestigation();

    }
);


/* =================================
   PÁGINA ANTERIOR
================================= */

previousPage.addEventListener(
    "click",
    () => {

        investigationScreen.classList.remove(
            "active"
        );

    }
);


/* =================================
   ABRIR INVESTIGAÇÃO
================================= */

function openInvestigation() {

    investigationScreen.classList.add(
        "active"
    );

}


/* =================================
   VOLTAR AO ARQUIVO
================================= */

backToFile.addEventListener(
    "click",
    () => {

        investigationScreen.classList.remove(
            "active"
        );

    }
);


/* =================================
   OBJETOS INVESTIGÁVEIS
================================= */

document
    .querySelectorAll(".scene-object")
    .forEach(
        (object) => {

            object.addEventListener(
                "click",
                () => {

                    const clueId =
                        object.dataset.clue;


                    /*
                        Se a evidência
                        já foi arquivada,
                        não abre novamente.
                    */

                    if (
                        foundClues.has(clueId)
                    ) {

                        return;

                    }


                    showClue(clueId);

                }
            );

        }
    );


/* =================================
   MOSTRAR EVIDÊNCIA
================================= */

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


    clueModal.classList.add(
        "active"
    );

}


/* =================================
   FECHAR EVIDÊNCIA
================================= */

closeClue.addEventListener(
    "click",
    () => {

        clueModal.classList.remove(
            "active"
        );

    }
);


/* =================================
   ARQUIVAR EVIDÊNCIA
================================= */

confirmClue.addEventListener(
    "click",
    () => {

        if (!currentClue) {
            return;
        }


        /*
            Adiciona a pista
            ao conjunto de encontradas.
        */

        foundClues.add(
            currentClue
        );


        /*
            Procura o objeto correspondente
            na cena.
        */

        const object =
            document.querySelector(
                `.scene-object[data-clue="${currentClue}"]`
            );


        /*
            Marca visualmente
            a evidência como encontrada.
        */

        if (object) {

            object.classList.add(
                "found"
            );

        }


        /*
            Fecha o modal.
        */

        clueModal.classList.remove(
            "active"
        );


        /*
            Verifica se todas
            as evidências foram encontradas.
        */

        checkInvestigation();

    }
);


/* =================================
   VERIFICAR INVESTIGAÇÃO
================================= */

function checkInvestigation() {

    /*
        Antes de encontrar tudo,
        mantém a mensagem normal.
    */

    if (
        foundClues.size < totalClues
    ) {

        investigationStatus.textContent =
            "INVESTIGAÇÃO EM ANDAMENTO";

        return;

    }


    /*
        Todas as evidências
        foram encontradas.
    */

    investigationStatus.textContent =
        "TODAS AS EVIDÊNCIAS ANALISADAS";


    investigationStatus.classList.add(
        "complete"
    );


    /*
        Libera o botão
        de continuar.
    */

    continueInvestigation.classList.add(
        "visible"
    );

}


/* =================================
   CONTINUAR INVESTIGAÇÃO
================================= */

continueInvestigation.addEventListener(
    "click",
    () => {

        /*
            Fecha a tela do local.
        */

        investigationScreen.classList.remove(
            "active"
        );


        /*
            Mostra a confirmação
            de investigação concluída.
        */

        setTimeout(
            () => {

                investigationComplete.classList.add(
                    "active"
                );

            },
            500
        );

    }
);


/* =================================
   INICIAR ENTREVISTAS
================================= */

startInterviews.addEventListener(
    "click",
    () => {

        investigationComplete.classList.remove(
            "active"
        );


        /*
            POR ENQUANTO:

            Aqui ficará a próxima parte
            do jogo.

            Depois podemos substituir
            isso pela tela dos quatro
            suspeitos.
        */

        alert(
            "A próxima etapa da investigação será iniciada."
        );

    }
);


/* =================================
   FECHAR MODAL CLICANDO FORA
================================= */

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


/* =================================
   ESC FECHA MODAIS
================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            clueModal.classList.remove(
                "active"
            );

            investigationComplete.classList.remove(
                "active"
            );

        }

    }
);