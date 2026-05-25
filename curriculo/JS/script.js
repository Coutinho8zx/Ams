// const botao = document.getElementById("Tema");

//          // carregar preferencia
//          if (localStorage.getItem("Tema") === "dark") {
//             document.body.classList.add("dark")
//          }

//          //alternar tema
//          botao.addEventListener("click",() => {
//             document.body.classList.toggle("dark");

//             if (document.body.classList.contains("dark")) {
//                 localStorage.setItem("Tema", "dark");
//             } else {
//                 localStorage.setItem("Tema", "light");
//             }
//          });
         
const botao = document.getElementById("Tema");

const updateButtomIcon = () => {
    if(! botao) return;
    const darkmode = document.body.classList.contains("dark");
    botao.textContent = darkmode? "☀" : "🌙";
    botao.tittle = darkmode ? "mudar para modo claro " : "mudar para modo escuro ";
};

const temaAtual = localStorage.getItem("Tema") === "dark"?"dark" : "ligth";
    if(temaAtual=== "dark") {
        document.body.classList.add("dark");
    }

    updateButtomIcon();

    if(botao) {
        botao.addEventListener("click" , () => { document.body.classList.toggle("dark");
        
            if (document.body.classList.contains("dark")){
                localStorage.setItem("Tema" , "dark");
            } else {
             localStorage.setItem("Tema" , "light")
             }

             updateButtomIcon ();
        });
    }