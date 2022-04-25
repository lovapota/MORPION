//Appelle de tout les variables du HTML
let contenair = document.getElementsByClassName('container-fluid');
let button = document.getElementsByClassName('grid-item');
let win = document.getElementsByClassName('valiny');
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');
let item6 = document.getElementById('item6');
let item7 = document.getElementById('item7');
let item8 = document.getElementById('item8');
let item9 = document.getElementById('item9');
let scoreMe = document.getElementById('YScore');
let scoreCPC = document.getElementById('CScore');

//Vairibles de donne pour le jeu
let ainasoa = Array.from(button);//Mettre les variables dans un tableau
const ref = [1, 2, 3, 4, 5, 6, 7, 8, 9]//Reference pour les resultats
const winOrLose = ['WIN','DEFEAT']//Texte de resultat du jeu
let result = [];//Variable pour traite le donne de YOU
let resultCPU = [];//Variable pour traite de donne du CPU

//resultat possible

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];
let d = [1, 4, 7];
let e = [2, 5, 8];
let f = [3, 6, 9];
let g = [1, 5, 9];
let h = [3, 5, 7];
let score = 0;//Score du CPU
let scorem = 0;//Score de YOU

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
    for(let a = 0; a < ainasoa.length; a ++){
        ainasoa[a].textContent = '';//Remet le tableau a zero ou vide
    }
    if(result.length == resultCPU.length){
        ainasoa[4].innerHTML = 'O';
        resultCPU = [ref[4]];
        result = [];
    }
    else{
        ainasoa[4].innerHTML = '';
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
     if((result.includes(h[2]) && result.includes(h[0]) && result.includes(h[1])) || (result.includes(a[2]) && result.includes(a[0]) && result.includes(a[1])) || (result.includes(b[2]) && result.includes(b[0]) && result.includes(b[1])) || (result.includes(c[2]) && result.includes(c[0]) && result.includes(c[1])) || (result.includes(d[2]) && result.includes(d[0]) && result.includes(d[1])) || (result.includes(e[2]) && result.includes(e[0]) && result.includes(e[1])) || (result.includes(f[2]) && result.includes(f[0]) && result.includes(f[1])) || (result.includes(g[2]) && result.includes(g[0]) && result.includes(g[1]))){
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
            for(let a = 0; a < ainasoa.length; a ++){
                    ainasoa[a].textContent = '';
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
                ainasoa[4].innerHTML = 'O';
                resultCPU = [ref[4]];
                result = [];
                win[0].style.display = 'none';
            }
            win[0].textContent = '';     
        }) 
    }
    //Conditon pour voir si 'YOU' gagne??
    else if((ainasoa[0].textContent !== '' && ainasoa[1].textContent !== '' && ainasoa[2].textContent !== '' && ainasoa[3].textContent !== '' && ainasoa[4].textContent !== '' && ainasoa[5].textContent !== '' && ainasoa[6].textContent !== '' && ainasoa[7].textContent !== '' && ainasoa[8].textContent !== '') && !((result.includes(h[2]) && result.includes(h[0]) && result.includes(h[1])) || (result.includes(a[2]) && result.includes(a[0]) && result.includes(a[1])) || (result.includes(b[2]) && result.includes(b[0]) && result.includes(b[1])) || (result.includes(c[2]) && result.includes(c[0]) && result.includes(c[1])) || (result.includes(d[2]) && result.includes(d[0]) && result.includes(d[1])) || (result.includes(e[2]) && result.includes(e[0]) && result.includes(e[1])) || (result.includes(f[2]) && result.includes(f[0]) && result.includes(f[1])) || (result.includes(g[2]) && result.includes(g[0]) && result.includes(g[1]))) || (((resultCPU.includes(h[2]) && resultCPU.includes(h[0]) && resultCPU.includes(h[1])) || (resultCPU.includes(a[2]) && resultCPU.includes(a[0]) && resultCPU.includes(a[1])) || (resultCPU.includes(b[2]) && resultCPU.includes(b[0]) && resultCPU.includes(b[1])) || (resultCPU.includes(c[2]) && resultCPU.includes(c[0]) && resultCPU.includes(c[1])) || (resultCPU.includes(d[2]) && resultCPU.includes(d[0]) && resultCPU.includes(d[1])) || (resultCPU.includes(e[2]) && resultCPU.includes(e[0]) && resultCPU.includes(e[1])) || (resultCPU.includes(f[2]) && resultCPU.includes(f[0]) && resultCPU.includes(f[1])) || (resultCPU.includes(g[2]) && resultCPU.includes(g[0]) && resultCPU.includes(g[1]))))){
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
            for(let a = 0; a < ainasoa.length; a ++){
                ainasoa[a].textContent = '';//Remet le tableau a zero ou vide
            }
            if(result.length >= resultCPU.length){
                result = [];//Reinitialise le resultat de "You"
                resultCPU = [];//Reinitialise le resultat de "CPU"
                win[0].style.display = 'none';
            }
            else{
                ainasoa[4].innerHTML = 'O';
                resultCPU = [ref[4]];
                result = [];
                win[0].style.display = 'none';
            }
            win[0].textContent = '';
        }) 
    };
};

/**Fonctionnement du fonction ajout des "X"(YOU) et "O"(CPU) ....
 * 'YOU' choisi un case par hasard => On ajout l'index correspondant a cette case dans un tableau pour 'YOU'
 * 'CPU' aticipe le jeux on choisi un case par rapport au case deja choisi au jeux => On ajout l'index correspondant a cette case dans un tableau pour 'CPU'
 */
function addElement1(){
    if(ainasoa[0].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[0].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[0]);
        if(ainasoa[1].textContent === 'X' && ainasoa[2].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[2].innerHTML = 'O';
            resultCPU.push(ref[2]);
        }
        else if(ainasoa[2].textContent === 'X' && ainasoa[1].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[1].innerHTML = 'O';
            resultCPU.push(ref[1]);
        }
        else if(ainasoa[3].textContent === 'X' && ainasoa[6].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[6].innerHTML = 'O';
            resultCPU.push(ref[6]);
        }
        else if(ainasoa[4].textContent === 'X' && ainasoa[8].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[8].innerHTML = 'O';
            resultCPU.push(ref[8]);
        }
        else if(ainasoa[6].textContent === 'X' && ainasoa[3].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[3].innerHTML = 'O';
            resultCPU.push(ref[3]);
        }
        else if(ainasoa[8].textContent === 'X' && ainasoa[4].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(ainasoa[4].textContent === ''){
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    resultCPU.push(ref[i]);
                    break;
                }
            }
        }
    }
    viewResultat();
};
function addElement2(){
    if(ainasoa[1].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[1].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[1]);
        if(ainasoa[0].textContent === 'X' && ainasoa[2].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[2].innerHTML = 'O';
            resultCPU.push(ref[2]);
        }
        else if(ainasoa[2].textContent === 'X' && ainasoa[1].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[0].innerHTML = 'O';
            resultCPU.push(ref[0]);
        }
        else if(ainasoa[4].textContent === 'X' && ainasoa[7].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[7].innerHTML = 'O';
            resultCPU.push(ref[7]);
        }
        else if(ainasoa[4].textContent === ''){//anticipe le jeux de YOU
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(ainasoa[4].textContent === ''){
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    resultCPU.push(ref[i]);
                    break;
                }
            }
        }
    }
    viewResultat();
};
function addElement3(){
    if(ainasoa[2].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[2].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[2]);
        if(ainasoa[0].textContent === 'X' && ainasoa[1].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[1].innerHTML = 'O';
            resultCPU.push(ref[1]);
        }
        else if(ainasoa[1].textContent === 'X' && ainasoa[0].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[0].innerHTML = 'O';
            resultCPU.push(ref[0]);
        }
        else if(ainasoa[4].textContent === 'X' && ainasoa[6].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[6].innerHTML = 'O';
            resultCPU.push(ref[6]);
        }
        else if(ainasoa[5].textContent === 'X' && ainasoa[8].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[8].innerHTML = 'O';
            resultCPU.push(ref[8]);
        }
        else if(ainasoa[6].textContent === 'X' && ainasoa[4].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(ainasoa[8].textContent === 'X' && ainasoa[5].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[5].innerHTML = 'O';
            resultCPU.push(ref[5]);
        }
        else if(ainasoa[4].textContent === ''){
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    resultCPU.push(ref[i]);
                    break;
                }
            }
        }
    }
    viewResultat();
};
function addElement4(){
    if(ainasoa[3].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[3].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[3]);
        if(ainasoa[0].textContent === 'X' && ainasoa[6].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[6].innerHTML = 'O';
            resultCPU.push(ref[6]);
        }
        else if(ainasoa[4].textContent === 'X' && ainasoa[5].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[5].innerHTML = 'O';
            resultCPU.push(ref[5]);
        }
        else if(ainasoa[5].textContent === 'X' && ainasoa[4].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(ainasoa[6].textContent === 'X' && ainasoa[0].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[0].innerHTML = 'O';
            resultCPU.push(ref[0]);
        }
        else if(ainasoa[4].textContent === ''){
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    resultCPU.push(ref[i]);
                    break;
                }
            }
        }
    }
   
    viewResultat();
};
function addElement5(){
    if(ainasoa[4].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[4].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[4]);
        if(ainasoa[0].textContent === 'X' && ainasoa[8].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[8].innerHTML = 'O';
            resultCPU.push(ref[8]);
        }
        else if(ainasoa[1].textContent === 'X' && ainasoa[7].textContent === ''){//anticipe le jeux de YOU
            ainasoa[7].innerHTML = 'O';
            resultCPU.push(ref[7]);
        }
        else if(ainasoa[2].textContent === 'X' && ainasoa[6].textContent === ''){//anticipe le jeux de YOU
            ainasoa[6].innerHTML = 'O';
            resultCPU.push(ref[6]);
        }
        else if(ainasoa[2].textContent === 'X' && ainasoa[6].textContent !== '' && ainasoa[8].textContent === ''){//anticipe le jeux de YOU
            ainasoa[8].innerHTML = 'O';
            resultCPU.push(ref[8]);
        }
        else if(ainasoa[3].textContent === 'X' && ainasoa[5].textContent === ''){//anticipe le jeux de YOU
            ainasoa[5].innerHTML = 'O';
            resultCPU.push(ref[5]);
        }
        else if(ainasoa[5].textContent === 'X' && ainasoa[3].textContent === ''){//anticipe le jeux de YOU
            ainasoa[3].innerHTML = 'O';
            resultCPU.push(ref[3]);
        }
        else if(ainasoa[6].textContent === 'X' && ainasoa[2].textContent === ''){//anticipe le jeux de YOU
            ainasoa[2].innerHTML = 'O';
            resultCPU.push(ref[2]);
        }
        else if(ainasoa[7].textContent === 'X' && ainasoa[1].textContent === ''){//anticipe le jeux de YOU
            ainasoa[1].innerHTML = 'O';
            resultCPU.push(ref[1]);
        }
        else if(ainasoa[8].textContent === 'X' && ainasoa[0].textContent === ''){//anticipe le jeux de YOU
            ainasoa[0].innerHTML = 'O';
            resultCPU.push(ref[0]);
        }
        else if(ainasoa[8].textContent === 'X' && ainasoa[0].textContent === 'O' && ainasoa[2].textContent === ''){//anticipe le jeux de YOU
            ainasoa[2].innerHTML = 'O';
            resultCPU.push(ref[2]);
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    resultCPU.push(ref[i]);
                    break;
                }
            }
        }
    }      
    viewResultat();
};
function addElement6(){
    if(ainasoa[5].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[5].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[5]);
        if(ainasoa[0].textContent === 'O' && ainasoa[6].textContent === 'O' && ainasoa[3].textContent === ''){//anticipe le jeux de YOU
            ainasoa[3].innerHTML = 'O';
            resultCPU.push(ref[3]);
        }
        else if(ainasoa[2].textContent === 'X' && ainasoa[8].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[8].innerHTML = 'O';
            resultCPU.push(ref[8]);
        }
        else if(ainasoa[3].textContent === 'X' && ainasoa[4].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(ainasoa[4].textContent === 'X' && ainasoa[3].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[3].innerHTML = 'O';
            resultCPU.push(ref[3]);
        }
        else if(ainasoa[8].textContent === 'X' && ainasoa[2].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[2].innerHTML = 'O';
            resultCPU.push(ref[2]);
        }
        else if(ainasoa[4].textContent === ''){
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    resultCPU.push(ref[i]);
                    break;
                }
            }
        }
    }
    viewResultat(); 
};
function addElement7(){
    if(ainasoa[6].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[6].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[6]);
        if(ainasoa[0].textContent === 'X' && ainasoa[3].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[3].innerHTML = 'O';
            resultCPU.push(ref[3]);
        }
        else if(ainasoa[2].textContent === 'X' && ainasoa[4].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(ainasoa[3].textContent === 'X' && ainasoa[0].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[0].innerHTML = 'O';
            resultCPU.push(ref[0]);
        }
        else if(ainasoa[4].textContent === 'X' && ainasoa[2].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[2].innerHTML = 'O';
            resultCPU.push(ref[2]);
        }
        else if(ainasoa[7].textContent === 'X' && ainasoa[8].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[8].innerHTML = 'O';
            resultCPU.push(ref[8]);
        }
        else if(ainasoa[8].textContent === 'X' && ainasoa[7].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[7].innerHTML = 'O';
            resultCPU.push(ref[7]);
        }
        else if(ainasoa[2].textContent === ''){
            ainasoa[2].innerHTML = 'O';
            resultCPU.push(ref[2])
        }
        else if(ainasoa[4].textContent === ''){
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    resultCPU.push(ref[i]);
                    break;
                }
            }
        }
    }
    viewResultat(); 
};
function addElement8(){
    if(ainasoa[7].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[7].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[7]);
        if(ainasoa[1].textContent === 'X' && ainasoa[4].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(ainasoa[4].textContent === 'X' && ainasoa[1].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[1].innerHTML = 'O';
            resultCPU.push(ref[1]);
        }
        else if(ainasoa[6].textContent === 'X' && ainasoa[8].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[8].innerHTML = 'O';
            resultCPU.push(ref[8]);
        }
        else if(ainasoa[8].textContent === 'X' && ainasoa[6].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[6].innerHTML = 'O';
            resultCPU.push(ref[6]);
        }
        else if(ainasoa[4].textContent === 'X' && ainasoa[1].textContent !== '' && ainasoa[3].textContent === ''){//anticipe le jeux de YOU
            ainasoa[3].innerHTML = 'O';
            resultCPU.push(ref[3]);
        }
        else if(ainasoa[4].textContent === ''){
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    resultCPU.push(ref[i]);
                    break;
                }
            }
        }
    }
    viewResultat(); 
};
function addElement9(){
    if(ainasoa[8].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[8].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[8]);
        if(ainasoa[0].textContent === 'X' && ainasoa[4].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4]);
        }
        else if(ainasoa[2].textContent === 'X' && ainasoa[5].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[5].innerHTML = 'O';
            resultCPU.push(ref[5]);
        }
        else if(ainasoa[4].textContent === 'X' && ainasoa[0].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[0].innerHTML = 'O';
            resultCPU.push(ref[0]);
        }
        else if(ainasoa[5].textContent === 'X' && ainasoa[2].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[2].innerHTML = 'O';
            resultCPU.push(ref[2]);
        }
        else if(ainasoa[6].textContent === 'X' && ainasoa[7].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[7].innerHTML = 'O';
            resultCPU.push(ref[7]);
        }
        else if(ainasoa[7].textContent === 'X' && ainasoa[6].innerHTML === ''){//anticipe le jeux de YOU
            ainasoa[6].innerHTML = 'O';
            resultCPU.push(ref[6]);
        }
        else if(ainasoa[4].textContent === ''){
            ainasoa[4].innerHTML = 'O';
            resultCPU.push(ref[4])
        }
        else{//CPU choisi au hasard un case car CPU ne connait pas le jeux de 'YOU'
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    resultCPU.push(ref[i]);
                    break;
                }
            }
        }
    }
    viewResultat(); 
};

//Add un evenement pour au'on puisse ultiliser les fonctions 
item1.addEventListener('click',addElement1);
item2.addEventListener('click',addElement2);
item3.addEventListener('click',addElement3);
item4.addEventListener('click',addElement4);
item5.addEventListener('click',addElement5);
item6.addEventListener('click',addElement6);
item7.addEventListener('click',addElement7);
item8.addEventListener('click',addElement8);
item9.addEventListener('click',addElement9);