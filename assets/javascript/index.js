//Appelle de tout les variables du HTML
let contenair = document.getElementsByClassName('container-fluid');
let button = document.getElementsByClassName('grid-item');
let win = document.getElementsByClassName('valiny');
let scoreMe = document.getElementById('YScore');
let scoreCPC = document.getElementById('CScore');

//Vairibles de donne pour le jeu
let id = Array.from(button);//Mettre les variables dans un tableau
const ref = [1, 2, 3, 4, 5, 6, 7, 8, 9]//Reference pour les resultats
const winOrLose = ['WIN','DEFEAT']//Texte de resultat du jeu
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
//Fonction hasard du "CPU"
function hasardCPU(){
    for(let i = 0; i < id.length; i ++){
        if(id[i].textContent === ''){
            id[i].innerHTML = 'O';
            resultCPU.push(ref[i]);
            break;
        }
    }
};
//Fonction reset
const reset = document.createElement('button');
reset.innerHTML = 'Reset';
contenair[0].appendChild(reset);
contenair[0].insertBefore(reset, contenair[0].lastChild);
/**Fonctionnement de fonction reset
 * Remet tout null les score,
 * Vide les cases de jeux,
 * Met un valeur pour l'ordinateur au centre du jeux,
 */
function changePrimary(){
    score = 0;//Remet le score a zero
    scorem = 0;//Remet le score a zero
    scoreMe.textContent = score;
    scoreCPC.textContent = score;
    for(let a = 0; a < id.length; a ++){
        id[a].textContent = '';//Remet le tableau a zero ou vide
    }
    if(result.length == resultCPU.length){
        id[4].innerHTML = 'O';
        resultCPU = [ref[4]];
        result = [];
    }
    else{
        id[4].innerHTML = '';
        resultCPU = [];
        result = [];
    }
};
reset.addEventListener('click',changePrimary);
  
/**Fonctionnement du fonction resultat ....
 * Si tout les cases ne sont pas vide et il n'y a pas des emplacement de 'X' alignes.
 * Ou 'O' est alinge => Vous perder et "Defeat" s'affiche sur l'ecran avec un boutton 'Again'
 * Sinon , il y a 3 'X' aligne => vous gagnez et "Win" s'affiche sur l'ecran avec un boutton 'Again'
 * Dans tout les cas, on ajoute un score sur 'YOU' or 'CPU' par rapport au resultat,
 * Et Bloc l'acces au jeux(On ne peut plus faire de click sur les cases),
 * Et aucun boutton du jeux n'est accessible.
 */
function viewResultat(){
    win[0].textContent = '';
    //Conditon pour voir si l'ordinateur gagne
    for (let i = 0 ; i < resultCas.length; i ++) {
        if(result.includes(resultCas[i][0]) && result.includes(resultCas[i][1]) && result.includes(resultCas[i][2])){
            win[0].style.display = 'flex';    
            const h1 = document.createElement ('h1');
            const reset = document.createElement('button');
            reset.textContent = 'Again';
            h1.textContent = winOrLose[0];
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
                if(result.length >= resultCPU.length){
                    result = [];//Reinitialise le resultat de "You"
                    resultCPU = [];//Reinitialise le resultat de "CPU"
                    win[0].style.display = 'none';
                }
                else{
                    id[4].innerHTML = 'O';
                    resultCPU = [ref[4]];
                    result = [];
                    win[0].style.display = 'none';
                }
            win[0].textContent = '';     
            })
        break
        }
    //Conditon pour voir si 'YOU' gagne??
        else if((id[0].textContent !== '' && id[1].textContent !== '' && id[2].textContent !== '' && id[3].textContent !== '' && id[4].textContent !== '' && id[5].textContent !== '' && id[6].textContent !== '' && id[7].textContent !== '' && id[8].textContent !== '') || (resultCPU.includes(resultCas[i][0]) && resultCPU.includes(resultCas[i][1]) && resultCPU.includes(resultCas[i][2]))){
            win[0].style.display = 'flex';
            const h = document.createElement ('h1');
            const reset = document.createElement('button');
            reset.textContent = 'Again ';
            h.textContent = winOrLose[1];
            win[0].appendChild(reset);
            win[0].appendChild(h);
            win[0].insertBefore(h, win[0].lastChild);
            score = score + 1;
            scoreCPC.innerHTML = score;
            reset.addEventListener('click', () => {//Enlever l'element de la liste
                for(let a = 0; a < id.length; a ++){
                id[a].textContent = '';//Remet le tableau a zero ou vide
                }
                if(result.length >= resultCPU.length){
                    result = [];//Reinitialise le resultat de "You"
                    resultCPU = [];//Reinitialise le resultat de "CPU"
                    win[0].style.display = 'none';
                }
                else{
                    id[4].innerHTML = 'O';
                    resultCPU = [ref[4]];
                    result = [];
                    win[0].style.display = 'none';
                }
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
        id[0].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[0]);
        if(id[1].textContent === 'X' && id[2].innerHTML === ''){//anticipe le jeux de YOU
            id[2].innerHTML = 'O';
            resultCPU.push(ref[2]);
        }
        else if(id[2].textContent === 'X' && id[1].innerHTML === ''){//anticipe le jeux de YOU
            id[1].innerHTML = 'O';
            resultCPU.push(ref[1]);
        }
        else if(id[3].textContent === 'X' && id[6].innerHTML === ''){//anticipe le jeux de YOU
            id[6].innerHTML = 'O';
            resultCPU.push(ref[6]);
        }
        else if(id[4].textContent === 'X' && id[8].innerHTML === ''){//anticipe le jeux de YOU
            id[8].innerHTML = 'O';
            resultCPU.push(ref[8]);
        }
        else if(id[6].textContent === 'X' && id[3].innerHTML === ''){//anticipe le jeux de YOU
            id[3].innerHTML = 'O';
            resultCPU.push(ref[3]);
        }
        else if(id[8].textContent === 'X' && id[4].innerHTML === ''){//anticipe le jeux de YOU
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
            }
        }
    viewResultat();
};
function addElement2(){
    if(id[1].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[1].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[1]);
        if(id[0].textContent === 'X' && id[2].innerHTML === ''){//anticipe le jeux de YOU
            id[2].innerHTML = 'O';
            resultCPU.push(ref[2]);
        }
        else if(id[2].textContent === 'X' && id[1].innerHTML === ''){//anticipe le jeux de YOU
            id[0].innerHTML = 'O';
            resultCPU.push(ref[0]);
        }
        else if(id[4].textContent === 'X' && id[7].innerHTML === ''){//anticipe le jeux de YOU
            id[7].innerHTML = 'O';
            resultCPU.push(ref[7]);
        }
        else if(id[4].textContent === ''){//anticipe le jeux de YOU
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
            }
        }
    viewResultat();
};
function addElement3(){
    if(id[2].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[2].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[2]);
        if(id[0].textContent === 'X' && id[1].innerHTML === ''){//anticipe le jeux de YOU
            id[1].innerHTML = 'O';
            resultCPU.push(ref[1]);
        }
        else if(id[1].textContent === 'X' && id[0].innerHTML === ''){//anticipe le jeux de YOU
            id[0].innerHTML = 'O';
            resultCPU.push(ref[0]);
        }
        else if(id[4].textContent === 'X' && id[6].innerHTML === ''){//anticipe le jeux de YOU
            id[6].innerHTML = 'O';
            resultCPU.push(ref[6]);
        }
        else if(id[5].textContent === 'X' && id[8].innerHTML === ''){//anticipe le jeux de YOU
            id[8].innerHTML = 'O';
            resultCPU.push(ref[8]);
        }
        else if(id[6].textContent === 'X' && id[4].innerHTML === ''){//anticipe le jeux de YOU
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(id[8].textContent === 'X' && id[5].innerHTML === ''){//anticipe le jeux de YOU
            id[5].innerHTML = 'O';
            resultCPU.push(ref[5]);
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
        }
    }
    viewResultat();
};
function addElement4(){
    if(id[3].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[3].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[3]);
        if(id[0].textContent === 'X' && id[6].innerHTML === ''){//anticipe le jeux de YOU
            id[6].innerHTML = 'O';
            resultCPU.push(ref[6]);
        }
        else if(id[4].textContent === 'X' && id[5].innerHTML === ''){//anticipe le jeux de YOU
            id[5].innerHTML = 'O';
            resultCPU.push(ref[5]);
        }
        else if(id[5].textContent === 'X' && id[4].innerHTML === ''){//anticipe le jeux de YOU
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(id[6].textContent === 'X' && id[0].innerHTML === ''){//anticipe le jeux de YOU
            id[0].innerHTML = 'O';
            resultCPU.push(ref[0]);
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
        }
    }
   
    viewResultat();
};
function addElement5(){
    if(id[4].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[4].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[4]);
        if(id[0].textContent === 'X' && id[8].innerHTML === ''){//anticipe le jeux de YOU
            id[8].innerHTML = 'O';
            resultCPU.push(ref[8]);
        }
        else if(id[1].textContent === 'X' && id[7].textContent === ''){//anticipe le jeux de YOU
            id[7].innerHTML = 'O';
            resultCPU.push(ref[7]);
        }
        else if(id[2].textContent === 'X' && id[6].textContent === ''){//anticipe le jeux de YOU
            id[6].innerHTML = 'O';
            resultCPU.push(ref[6]);
        }
        else if(id[2].textContent === 'X' && id[6].textContent !== '' && id[8].textContent === ''){//anticipe le jeux de YOU
            id[8].innerHTML = 'O';
            resultCPU.push(ref[8]);
        }
        else if(id[3].textContent === 'X' && id[5].textContent === ''){//anticipe le jeux de YOU
            id[5].innerHTML = 'O';
            resultCPU.push(ref[5]);
        }
        else if(id[5].textContent === 'X' && id[3].textContent === ''){//anticipe le jeux de YOU
            id[3].innerHTML = 'O';
            resultCPU.push(ref[3]);
        }
        else if(id[6].textContent === 'X' && id[2].textContent === ''){//anticipe le jeux de YOU
            id[2].innerHTML = 'O';
            resultCPU.push(ref[2]);
        }
        else if(id[7].textContent === 'X' && id[1].textContent === ''){//anticipe le jeux de YOU
            id[1].innerHTML = 'O';
            resultCPU.push(ref[1]);
        }
        else if(id[8].textContent === 'X' && id[0].textContent === ''){//anticipe le jeux de YOU
            id[0].innerHTML = 'O';
            resultCPU.push(ref[0]);
        }
        else if(id[8].textContent === 'X' && id[0].textContent === 'O' && id[2].textContent === ''){//anticipe le jeux de YOU
            id[2].innerHTML = 'O';
            resultCPU.push(ref[2]);
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
        }
    }      
    viewResultat();
};
function addElement6(){
    if(id[5].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[5].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[5]);
        if(id[0].textContent === 'O' && id[6].textContent === 'O' && id[3].textContent === ''){//anticipe le jeux de YOU
            id[3].innerHTML = 'O';
            resultCPU.push(ref[3]);
        }
        else if(id[2].textContent === 'X' && id[8].innerHTML === ''){//anticipe le jeux de YOU
            id[8].innerHTML = 'O';
            resultCPU.push(ref[8]);
        }
        else if(id[3].textContent === 'X' && id[4].innerHTML === ''){//anticipe le jeux de YOU
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(id[4].textContent === 'X' && id[3].innerHTML === ''){//anticipe le jeux de YOU
            id[3].innerHTML = 'O';
            resultCPU.push(ref[3]);
        }
        else if(id[8].textContent === 'X' && id[2].innerHTML === ''){//anticipe le jeux de YOU
            id[2].innerHTML = 'O';
            resultCPU.push(ref[2]);
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
        }
    }
    viewResultat(); 
};
function addElement7(){
    if(id[6].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[6].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[6]);
        if(id[0].textContent === 'X' && id[3].innerHTML === ''){//anticipe le jeux de YOU
            id[3].innerHTML = 'O';
            resultCPU.push(ref[3]);
        }
        else if(id[2].textContent === 'X' && id[4].innerHTML === ''){//anticipe le jeux de YOU
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(id[3].textContent === 'X' && id[0].innerHTML === ''){//anticipe le jeux de YOU
            id[0].innerHTML = 'O';
            resultCPU.push(ref[0]);
        }
        else if(id[4].textContent === 'X' && id[2].innerHTML === ''){//anticipe le jeux de YOU
            id[2].innerHTML = 'O';
            resultCPU.push(ref[2]);
        }
        else if(id[7].textContent === 'X' && id[8].innerHTML === ''){//anticipe le jeux de YOU
            id[8].innerHTML = 'O';
            resultCPU.push(ref[8]);
        }
        else if(id[8].textContent === 'X' && id[7].innerHTML === ''){//anticipe le jeux de YOU
            id[7].innerHTML = 'O';
            resultCPU.push(ref[7]);
        }
        else if(id[2].textContent === ''){
            id[2].innerHTML = 'O';
            resultCPU.push(ref[2])
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
        }
    }
    viewResultat(); 
};
function addElement8(){
    if(id[7].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[7].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[7]);
        if(id[1].textContent === 'X' && id[4].innerHTML === ''){//anticipe le jeux de YOU
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(id[4].textContent === 'X' && id[1].innerHTML === ''){//anticipe le jeux de YOU
            id[1].innerHTML = 'O';
            resultCPU.push(ref[1]);
        }
        else if(id[6].textContent === 'X' && id[8].innerHTML === ''){//anticipe le jeux de YOU
            id[8].innerHTML = 'O';
            resultCPU.push(ref[8]);
        }
        else if(id[8].textContent === 'X' && id[6].innerHTML === ''){//anticipe le jeux de YOU
            id[6].innerHTML = 'O';
            resultCPU.push(ref[6]);
        }
        else if(id[4].textContent === 'X' && id[1].textContent !== '' && id[3].textContent === ''){//anticipe le jeux de YOU
            id[3].innerHTML = 'O';
            resultCPU.push(ref[3]);
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
        }
    }
    viewResultat(); 
};
function addElement9(){
    if(id[8].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        id[8].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[8]);
        if(id[0].textContent === 'X' && id[4].innerHTML === ''){//anticipe le jeux de YOU
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(id[2].textContent === 'X' && id[5].innerHTML === ''){//anticipe le jeux de YOU
            id[5].innerHTML = 'O';
            resultCPU.push(ref[5]);
        }
        else if(id[4].textContent === 'X' && id[0].innerHTML === ''){//anticipe le jeux de YOU
            id[0].innerHTML = 'O';
            resultCPU.push(ref[0]);
        }
        else if(id[5].textContent === 'X' && id[2].innerHTML === ''){//anticipe le jeux de YOU
            id[2].innerHTML = 'O';
            resultCPU.push(ref[2]);
        }
        else if(id[6].textContent === 'X' && id[7].innerHTML === ''){//anticipe le jeux de YOU
            id[7].innerHTML = 'O';
            resultCPU.push(ref[7]);
        }
        else if(id[7].textContent === 'X' && id[6].innerHTML === ''){//anticipe le jeux de YOU
            id[6].innerHTML = 'O';
            resultCPU.push(ref[6]);
        }
        else if(id[4].textContent === ''){
            id[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            hasardCPU();
        }
    }
    viewResultat(); 
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