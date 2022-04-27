//Appelle de tout les variables du HTML
const contenair = document.getElementsByClassName('container-fluid');
const button = document.getElementsByClassName('grid-item');
const chose = document.getElementsByClassName('safidy');
const play = document.getElementsByClassName('play');
const win = document.getElementsByClassName('valiny');
const scoreMe = document.getElementById('YScore');
const scoreCPC = document.getElementById('CScore');
const youName = document.getElementById('name');
const cpu = document.getElementById('cpu');

//Variables de donne pour le jeu
let id = Array.from(button);//Mettre les variables dans un tableau
const ref = [1, 2, 3, 4, 5, 6, 7, 8, 9]//Reference pour les resultats
const winOrLose = ['WIN','DEFEAT','MATCH NULL']//Texte de resultat du jeu
let result = [];//Variable pour traite le donne de YOU
let resultCPU = [];//Variable pour traite de donne du CPU
let resultCas = [//Variables des resultat possible
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]
let score = 0;//Score du CPU
let scorem = 0;//Score de YOU
//Choix de joueur
chose[0].style.display = 'flex';
const choix = document.createElement('h2');
const text = document.createElement('h3')    
const X = document.createElement ('button');
const O = document.createElement ('button');
const input = document.createElement('input')
function choose() {
    text.textContent = 'Your name :'
    choix.textContent = 'Choose :'
    X.textContent = 'X';
    O.textContent = 'O';
    play[0].appendChild(text);
    play[0].appendChild(input);
    play[0].appendChild(choix);
    play[0].appendChild(X);
    play[0].appendChild(O);
    play[0].insertBefore(X, chose.firstChild);
    play[0].insertBefore(O, chose.firstChild);
}
let turn = '';//Votre choix
let turn2 = '';//L'ordinateur

//Fonction pour le choix du pion utilise
function choosePlayer1(){
    turn2 = `${O.textContent}`;
    turn = `${X.textContent}`;
    chose[0].style.display = 'none';
    youName.textContent = `${input.value} (${turn})`;
    cpu.textContent = `CPU (${turn2})`;

};
function choosePlayer2(){
    turn2 = `${X.textContent}`;
    turn = `${O.textContent}`;
    chose[0].style.display = 'none';
    youName.textContent = `${input.value} (${turn})`;
    cpu.textContent = `CPU (${turn2})`;
};
//Choix
X.addEventListener('click', choosePlayer1);
O.addEventListener('click', choosePlayer2);


//Fonction hasard du "CPU"
function hasardCPU(){
    for(let i = 0; i < id.length; i ++){
        if(id[i].textContent === ''){
            id[i].innerHTML = turn2;
            resultCPU.push(ref[i]);
            break;
        }
    }
};

//Creation du boutton 'reset'
const reset = document.createElement('button');
reset.innerHTML = 'Reset';
contenair[0].appendChild(reset);
contenair[0].insertBefore(reset, contenair[0].lastChild);

/**Fonctionnement de fonction reset
 * Remet tout null les score,
 * Vide les cases de jeux,
 * Met un valeur pour l'ordinateur au centre du jeux,
 * Retour au choix
 */
function changePrimary(){
    score = 0;//Remet le score a zero
    scorem = 0;//Remet le score a zero
    scoreMe.textContent = score;
    scoreCPC.textContent = score;
    chose[0].style.display = 'flex';
    result = [];
    resultCPU = [];
    input.value = "";
    for(let a = 0; a < id.length; a ++){
        id[a].textContent = '';
    }

    X.addEventListener('click', choosePlayer1);
    O.addEventListener('click', choosePlayer2);
    choose()
};
reset.addEventListener('click',changePrimary);
choose()
/**Fonctionnement du fonction resultat ....
 * Si tout les cases ne sont pas vide et il n'y a pas des emplacement de 'X' alignes.
 * Ou 'O' est alinge => Vous perder et "Defeat" s'affiche sur l'ecran avec un boutton 'Again'
 * Sinon , il y a 3 'X' aligne => vous gagnez et "Win" s'affiche sur l'ecran avec un boutton 'Again'
 * Dans tout les cas, on ajoute un score sur 'YOU' or 'CPU' par rapport au resultat,
 * Et Bloc l'acces au jeux(On ne peut plus faire de click sur les cases),
 * Et aucun boutton du jeux n'est accessible.
 */
function viewResultat(){
    //Conditon pour voir si 'YOU' gagne
    for (let i = 0 ; i < resultCas.length; i ++) {
        if(result.includes(resultCas[i][0]) && result.includes(resultCas[i][1]) && result.includes(resultCas[i][2])){
            win[0].style.display = 'flex';    
            const h1 = document.createElement ('h1');
            const reset = document.createElement('button');
            reset.textContent = 'Again';
            h1.textContent = `${winOrLose[0]}`;
            win[0].appendChild(reset);
            win[0].appendChild(h1);
            win[0].insertBefore(h1, win[0].lastChild);
            scorem = scorem + 1;
            scoreMe.textContent = scorem;
            reset.addEventListener('click', () => {//Enlever l'element de la liste
                for(let a = 0; a < id.length; a ++){
                    id[a].textContent = '';
                    result = [];
                    resultCPU = [];
                    win[0].style.display = 'none';
                }
            win[0].textContent = '';     
            })
        break
        }
    //Conditon pour voir si l'ordinateur gagne??
        else if(resultCPU.includes(resultCas[i][0]) && resultCPU.includes(resultCas[i][1]) && resultCPU.includes(resultCas[i][2])){
            win[0].style.display = 'flex';
            const h = document.createElement ('h1');
            const reset = document.createElement('button');
            reset.textContent = 'Again ';
            h.textContent = `${winOrLose[1]}`;
            win[0].appendChild(reset);
            win[0].appendChild(h);
            win[0].insertBefore(h, win[0].lastChild);
            score = score + 1;
            scoreCPC.innerHTML = score;
            reset.addEventListener('click', () => {//Enlever l'element de la liste
                for(let a = 0; a < id.length; a ++){
                id[a].textContent = '';//Remet le tableau a zero ou vide
                }
            result = [];//Reinitialise le resultat de "You"
            resultCPU = [];
            win[0].textContent = '';
            win[0].style.display = 'none';
            }) 
        break
        }
    //Conditon pour voir si il y match nul??
        else if((id[0].textContent !== '' && id[1].textContent !== '' && id[2].textContent !== '' && id[3].textContent !== '' && id[4].textContent !== '' && id[5].textContent !== '' && id[6].textContent !== '' && id[7].textContent !== '' && id[8].textContent !== '')){
            win[0].style.display = 'flex';
            const h = document.createElement ('h1');
            const reset = document.createElement('button');
            reset.textContent = 'Again ';
            h.textContent = `${winOrLose[2]}`;
            win[0].appendChild(reset);
            win[0].appendChild(h);
            win[0].insertBefore(h, win[0].lastChild);
            reset.addEventListener('click', () => {//Enlever l'element de la liste
                for(let a = 0; a < id.length; a ++){
                id[a].textContent = '';//Remet le tableau a zero ou vide
                }
                result = [];//Reinitialise le resultat de "You"
                resultCPU = [];//Reinitialise le resultat de "CPU"
                win[0].style.display = 'none';
            win[0].textContent = '';
            }) 
            break
        };
    }
};

/**Fonctionnement du fonction ajout des "X"(YOU) et "O"(CPU) ....
 * 'YOU' choisi un case par hasard => On ajout l'index correspondant a cette case dans un tableau pour 'YOU'
 * 'CPU' aticipe le jeux on choisi un case par rapport au case deja choisi au jeux => On ajout l'index correspondant a cette case dans un tableau pour 'CPU'
 */
function addElement1(){
    if(id[0].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[0].innerHTML = `${turn}`; //Ajouter le 'X' sur la cage
        result.push(ref[0]);
        viewResultat();
        if(id[1].textContent === `${turn}` && id[2].textContent === ''){//anticipe le jeux de YOU
            id[2].innerHTML = `${turn2}`;
            resultCPU.push(ref[2]);
        }
        else if(id[2].textContent === `${turn}` && id[1].textContent === ''){//anticipe le jeux de YOU
            id[1].innerHTML = `${turn2}`;
            resultCPU.push(ref[1]);
        }
        else if(id[3].textContent === `${turn}` && id[6].innerHTML === ''){//anticipe le jeux de YOU
            id[6].innerHTML = `${turn2}`;
            resultCPU.push(ref[6]);
        }
        else if(id[4].textContent === `${turn}` && id[8].textContent === ''){//anticipe le jeux de YOU
            id[8].innerHTML = `${turn2}`;
            resultCPU.push(ref[8]);
        }
        else if(id[6].textContent === `${turn}` && id[3].textContent === ''){//anticipe le jeux de YOU
            id[3].innerHTML = `${turn2}`;
            resultCPU.push(ref[3]);
        }
        else if(id[8].textContent === `${turn}` && id[4].te === ''){//anticipe le jeux de YOU
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4]);
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
            }
        }
};
function addElement2(){
    if(id[1].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[1].innerHTML = `${turn}`; //Ajouter le `${turn}` sur la cage
        result.push(ref[1]);
        viewResultat();
        if(id[0].textContent === `${turn}` && id[2].innerHTML === ''){//anticipe le jeux de YOU
            id[2].innerHTML = `${turn2}`;
            resultCPU.push(ref[2]);
        }
        else if(id[2].textContent === `${turn}` && id[1].innerHTML === ''){//anticipe le jeux de YOU
            id[0].innerHTML = `${turn2}`;
            resultCPU.push(ref[0]);
        }
        else if(id[4].textContent === `${turn}` && id[7].innerHTML === ''){//anticipe le jeux de YOU
            id[7].innerHTML = `${turn2}`;
            resultCPU.push(ref[7]);
        }
        else if(id[4].textContent === ''){//anticipe le jeux de YOU
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4]);
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
            }
        }
    
};
function addElement3(){
    if(id[2].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[2].innerHTML = `${turn}`; //Ajouter le `${turn}` sur la cage
        result.push(ref[2]);
        viewResultat();
        if(id[0].textContent === `${turn}` && id[1].innerHTML === ''){//anticipe le jeux de YOU
            id[1].innerHTML = `${turn2}`;
            resultCPU.push(ref[1]);
        }
        else if(id[1].textContent === `${turn}` && id[0].innerHTML === ''){//anticipe le jeux de YOU
            id[0].innerHTML = `${turn2}`;
            resultCPU.push(ref[0]);
        }
        else if(id[4].textContent === `${turn}` && id[6].innerHTML === ''){//anticipe le jeux de YOU
            id[6].innerHTML = `${turn2}`;
            resultCPU.push(ref[6]);
        }
        else if(id[5].textContent === `${turn}` && id[8].innerHTML === ''){//anticipe le jeux de YOU
            id[8].innerHTML = `${turn2}`;
            resultCPU.push(ref[8]);
        }
        else if(id[6].textContent === `${turn}` && id[4].innerHTML === ''){//anticipe le jeux de YOU
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4]);
        }
        else if(id[8].textContent === `${turn}` && id[5].innerHTML === ''){//anticipe le jeux de YOU
            id[5].innerHTML = `${turn2}`;
            resultCPU.push(ref[5]);
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
        }
    }
};
function addElement4(){
    if(id[3].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[3].innerHTML = `${turn}`; //Ajouter le `${turn}` sur la cage
        result.push(ref[3]);
        viewResultat();
        if(id[0].textContent === `${turn}` && id[6].innerHTML === ''){//anticipe le jeux de YOU
            id[6].innerHTML = `${turn2}`;
            resultCPU.push(ref[6]);
        }
        else if(id[4].textContent === `${turn}` && id[5].innerHTML === ''){//anticipe le jeux de YOU
            id[5].innerHTML = `${turn2}`;
            resultCPU.push(ref[5]);
        }
        else if(id[5].textContent === `${turn}` && id[4].innerHTML === ''){//anticipe le jeux de YOU
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4]);
        }
        else if(id[6].textContent === `${turn}` && id[0].innerHTML === ''){//anticipe le jeux de YOU
            id[0].innerHTML = `${turn2}`;
            resultCPU.push(ref[0]);
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
        }
    }
};
function addElement5(){
    if(id[4].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[4].innerHTML = `${turn}`; //Ajouter le `${turn}` sur la cage
        result.push(ref[4]);
        viewResultat();
        if(id[0].textContent === `${turn}` && id[8].innerHTML === ''){//anticipe le jeux de YOU
            id[8].innerHTML = `${turn2}`;
            resultCPU.push(ref[8]);
        }
        else if(id[1].textContent === `${turn}` && id[7].textContent === ''){//anticipe le jeux de YOU
            id[7].innerHTML = `${turn2}`;
            resultCPU.push(ref[7]);
        }
        else if(id[2].textContent === `${turn}` && id[6].textContent === ''){//anticipe le jeux de YOU
            id[6].innerHTML = `${turn2}`;
            resultCPU.push(ref[6]);
        }
        else if(id[2].textContent === `${turn}` && id[6].textContent !== '' && id[8].textContent === ''){//anticipe le jeux de YOU
            id[8].innerHTML = `${turn2}`;
            resultCPU.push(ref[8]);
        }
        else if(id[3].textContent === `${turn}` && id[5].textContent === ''){//anticipe le jeux de YOU
            id[5].innerHTML = `${turn2}`;
            resultCPU.push(ref[5]);
        }
        else if(id[5].textContent === `${turn}` && id[3].textContent === ''){//anticipe le jeux de YOU
            id[3].innerHTML = `${turn2}`;
            resultCPU.push(ref[3]);
        }
        else if(id[6].textContent === `${turn}` && id[2].textContent === ''){//anticipe le jeux de YOU
            id[2].innerHTML = `${turn2}`;
            resultCPU.push(ref[2]);
        }
        else if(id[7].textContent === `${turn}` && id[1].textContent === ''){//anticipe le jeux de YOU
            id[1].innerHTML = `${turn2}`;
            resultCPU.push(ref[1]);
        }
        else if(id[8].textContent === `${turn}` && id[0].textContent === ''){//anticipe le jeux de YOU
            id[0].innerHTML = `${turn2}`;
            resultCPU.push(ref[0]);
        }
        else if(id[8].textContent === `${turn}` && id[0].textContent === `${turn2}` && id[2].textContent === ''){//anticipe le jeux de YOU
            id[2].innerHTML = `${turn2}`;
            resultCPU.push(ref[2]);
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
        }
    }      
};
function addElement6(){
    if(id[5].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[5].innerHTML = `${turn}`; //Ajouter le `${turn}` sur la cage
        result.push(ref[5]);
        viewResultat();
        if(id[0].textContent === `${turn2}` && id[6].textContent === `${turn2}` && id[3].textContent === ''){//anticipe le jeux de YOU
            id[3].innerHTML = `${turn2}`;
            resultCPU.push(ref[3]);
        }
        else if(id[2].textContent === `${turn}` && id[8].innerHTML === ''){//anticipe le jeux de YOU
            id[8].innerHTML = `${turn2}`;
            resultCPU.push(ref[8]);
        }
        else if(id[3].textContent === `${turn}` && id[4].innerHTML === ''){//anticipe le jeux de YOU
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4]);
        }
        else if(id[4].textContent === `${turn}` && id[3].innerHTML === ''){//anticipe le jeux de YOU
            id[3].innerHTML = `${turn2}`;
            resultCPU.push(ref[3]);
        }
        else if(id[8].textContent === `${turn}` && id[2].innerHTML === ''){//anticipe le jeux de YOU
            id[2].innerHTML = `${turn2}`;
            resultCPU.push(ref[2]);
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
        }
    }
};
function addElement7(){
    if(id[6].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[6].innerHTML = `${turn}`; //Ajouter le `${turn}` sur la cage
        result.push(ref[6]);
        viewResultat();
        if(id[0].textContent === `${turn}` && id[3].innerHTML === ''){//anticipe le jeux de YOU
            id[3].innerHTML = `${turn2}`;
            resultCPU.push(ref[3]);
        }
        else if(id[2].textContent === `${turn}` && id[4].innerHTML === ''){//anticipe le jeux de YOU
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4]);
        }
        else if(id[3].textContent === `${turn}` && id[0].innerHTML === ''){//anticipe le jeux de YOU
            id[0].innerHTML = `${turn2}`;
            resultCPU.push(ref[0]);
        }
        else if(id[4].textContent === `${turn}` && id[2].innerHTML === ''){//anticipe le jeux de YOU
            id[2].innerHTML = `${turn2}`;
            resultCPU.push(ref[2]);
        }
        else if(id[7].textContent === `${turn}` && id[8].innerHTML === ''){//anticipe le jeux de YOU
            id[8].innerHTML = `${turn2}`;
            resultCPU.push(ref[8]);
        }
        else if(id[8].textContent === `${turn}` && id[7].innerHTML === ''){//anticipe le jeux de YOU
            id[7].innerHTML = `${turn2}`;
            resultCPU.push(ref[7]);
        }
        else if(id[2].textContent === ''){
            id[2].innerHTML = `${turn2}`;
            resultCPU.push(ref[2])
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
        }
    } 
};
function addElement8(){
    if(id[7].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[7].innerHTML = `${turn}`; //Ajouter le `${turn}` sur la cage
        result.push(ref[7]);
        viewResultat();
        if(id[1].textContent === `${turn}` && id[4].innerHTML === ''){//anticipe le jeux de YOU
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4]);
        }
        else if(id[4].textContent === `${turn}` && id[1].innerHTML === ''){//anticipe le jeux de YOU
            id[1].innerHTML = `${turn2}`;
            resultCPU.push(ref[1]);
        }
        else if(id[6].textContent === `${turn}` && id[8].innerHTML === ''){//anticipe le jeux de YOU
            id[8].innerHTML = `${turn2}`;
            resultCPU.push(ref[8]);
        }
        else if(id[8].textContent === `${turn}` && id[6].innerHTML === ''){//anticipe le jeux de YOU
            id[6].innerHTML = `${turn2}`;
            resultCPU.push(ref[6]);
        }
        else if(id[4].textContent === `${turn}` && id[1].textContent !== '' && id[3].textContent === ''){//anticipe le jeux de YOU
            id[3].innerHTML = `${turn2}`;
            resultCPU.push(ref[3]);
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
        }
    }
};
function addElement9(){
    if(id[8].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[8].innerHTML = `${turn}`; //Ajouter le `${turn}` sur la cage
        result.push(ref[8]);
        viewResultat();
        if(id[0].textContent === `${turn}` && id[4].innerHTML === ''){//anticipe le jeux de YOU
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4]);
        }
        else if(id[2].textContent === `${turn}` && id[5].innerHTML === ''){//anticipe le jeux de YOU
            id[5].innerHTML = `${turn2}`;
            resultCPU.push(ref[5]);
        }
        else if(id[4].textContent === `${turn}` && id[0].innerHTML === ''){//anticipe le jeux de YOU
            id[0].innerHTML = `${turn2}`;
            resultCPU.push(ref[0]);
        }
        else if(id[5].textContent === `${turn}` && id[2].innerHTML === ''){//anticipe le jeux de YOU
            id[2].innerHTML = `${turn2}`;
            resultCPU.push(ref[2]);
        }
        else if(id[6].textContent === `${turn}` && id[7].innerHTML === ''){//anticipe le jeux de YOU
            id[7].innerHTML = `${turn2}`;
            resultCPU.push(ref[7]);
        }
        else if(id[7].textContent === `${turn}` && id[6].innerHTML === ''){//anticipe le jeux de YOU
            id[6].innerHTML = `${turn2}`;
            resultCPU.push(ref[6]);
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = `${turn2}`;
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
        }
    }
};
//Add un evenement pour au'on puisse ultiliser les fonctions 
id[0].addEventListener('click',addElement1);
item2.addEventListener('click',addElement2);
item3.addEventListener('click',addElement3);
item4.addEventListener('click',addElement4);
item5.addEventListener('click',addElement5);
item6.addEventListener('click',addElement6);
item7.addEventListener('click',addElement7);
item8.addEventListener('click',addElement8);
item9.addEventListener('click',addElement9);