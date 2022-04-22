//Appelle de tout les variables 
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


let ainasoa = Array.from(button);//Mettre les variables dans un tableau
const ref = [1, 2, 3, 4, 5, 6, 7, 8, 9]//Reference pour les resultats
const winOrLose = ['Congrulation, You win','Ooh!You lose!']//Texte de resultat de votre jeu
let result = [];//Variable pour traite le donne

//resultat possible
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];
let d = [1, 4, 7];
let e = [2, 5, 8];
let f = [3, 6, 9];
let g = [1, 5, 9];
let h = [3, 5, 7];
let score = 0;
//Fonction resultat
function viewResultat(){
    score = score + 1;
    scoreCPC.textContent = score;
    scoreMe.textContent = score;
    win[0].textContent = '';
    for(let a = 0; a < ainasoa.length; a ++){
        win[0].textContent = '';
        if((ainasoa[0].textContent !== '' && ainasoa[1].textContent !== '' && ainasoa[2].textContent !== '' && ainasoa[3].textContent !== '' && ainasoa[4].textContent !== '' && ainasoa[5].textContent !== '' && ainasoa[6].textContent !== '' && ainasoa[7].textContent !== '' && ainasoa[8].textContent !== '') && !((result.includes(h[2]) && result.includes(h[0]) && result.includes(h[1])) || (result.includes(a[2]) && result.includes(a[0]) && result.includes(a[1])) || (result.includes(b[2]) && result.includes(b[0]) && result.includes(b[1])) || (result.includes(c[2]) && result.includes(c[0]) && result.includes(c[1])) || (result.includes(d[2]) && result.includes(d[0]) && result.includes(d[1])) || (result.includes(e[2]) && result.includes(e[0]) && result.includes(e[1])) || (result.includes(f[2]) && result.includes(f[0]) && result.includes(f[1])) || (result.includes(g[2]) && result.includes(g[0]) && result.includes(g[1])))){
            const h = document.createElement ('h1');
            const reset = document.createElement('button');
            reset.textContent = 'Reset';
            h.textContent = winOrLose[1];
            win[0].appendChild(reset);
            win[0].appendChild(h);
            win[0].insertBefore(h, win[0].lastChild);
            reset.addEventListener('click', () => {//Enlever l'element de la liste
                for(let a = 0; a < ainasoa.length; a ++){
                    ainasoa[a].textContent = '';
                    result = [];
                    scoreCPC.textContent = 0;
                    scoreMe.textContent = 0;
                }
                win[0].textContent = '';
            })   
        }
    };
    if((result.includes(h[2]) && result.includes(h[0]) && result.includes(h[1])) || (result.includes(a[2]) && result.includes(a[0]) && result.includes(a[1])) || (result.includes(b[2]) && result.includes(b[0]) && result.includes(b[1])) || (result.includes(c[2]) && result.includes(c[0]) && result.includes(c[1])) || (result.includes(d[2]) && result.includes(d[0]) && result.includes(d[1])) || (result.includes(e[2]) && result.includes(e[0]) && result.includes(e[1])) || (result.includes(f[2]) && result.includes(f[0]) && result.includes(f[1])) || (result.includes(g[2]) && result.includes(g[0]) && result.includes(g[1]))){
            const h1 = document.createElement ('h1');
            const reset = document.createElement('button');
            reset.textContent = 'Reset';
            h1.textContent = winOrLose[0];
            win[0].appendChild(reset);
            win[0].appendChild(h1);
            win[0].insertBefore(h1, win[0].lastChild);
            reset.addEventListener('click', () => {//Enlever l'element de la liste
                for(let a = 0; a < ainasoa.length; a ++){
                    ainasoa[a].textContent = '';
                    result = [];
                    scoreCPC.textContent = 0;
                    scoreMe.textContent = 0;
                }
                win[0].textContent = '';
                
            }) 
    };
    return score;
};

//Fonction preliminaire
function addElement1(){
    if(ainasoa[0].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[0].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[0]);
        if(ainasoa[8].textContent !== ''){
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    break;
                }
            }
        }
        else{
            ainasoa[8].innerHTML = 'O';
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
        if(ainasoa[2].textContent !== ''){
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    break;
                }
            }
        }
        else{
            ainasoa[2].innerHTML = 'O';
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
        if(ainasoa[6].textContent !== ''){
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    break
                }
            }
        }
        else{
            ainasoa[6].innerHTML = 'O';
        }
    }
    viewResultat();
    return result; 
};
function addElement4(){
    if(ainasoa[3].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[3].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[3]);
        if(ainasoa[5].textContent !== ''){
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    break
                }
            }
        }
        else{
            ainasoa[5].innerHTML = 'O';
        }  
    }
   
    viewResultat();
    return result; 
};
function addElement5(){
    if(ainasoa[4].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[4].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[4]);
        if(ainasoa[1].textContent !== ''){
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    break
                }
            }
        }
        else{
            ainasoa[1].innerHTML = 'O';
        }   
    }        
    viewResultat();
    return result; 
};
function addElement6(){
    if(ainasoa[5].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[5].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[5]);
        if(ainasoa[3].textContent !== ''){
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    break
                }
            }
        }
        else{
            ainasoa[3].innerHTML = 'O';
        }
    }
    viewResultat();
    return result; 
};
function addElement7(){
    if(ainasoa[6].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[6].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[6]);
        if(ainasoa[8].textContent !== ''){
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    break
                }
            }
        }
        else{
            ainasoa[8].innerHTML = 'O';
        }
    }
    viewResultat();
    return result; 
};
function addElement8(){
    if(ainasoa[7].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[7].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[7]);
        if(ainasoa[1].textContent !== ''){
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    break
                }
            }
        }
        else{
            ainasoa[1].innerHTML = 'O';
        }
    }
    viewResultat();
    return result; 
};
function addElement9(){
    if(ainasoa[8].textContent !== ''){
        alert('Mba matotra hoa fa aza mananihany!!!!');
    }
    else{
        ainasoa[8].innerHTML = 'X'; //Ajouter le 'X' sur la cage
        result.push(ref[8]);
        if(ainasoa[2].textContent !== ''){
            for(let i = 0; i < ainasoa.length; i ++){
                if(ainasoa[i].textContent === ''){
                    ainasoa[i].innerHTML = 'O';
                    break
                }
            }
        }
        else{
            ainasoa[2].innerHTML = 'O';
        }
    }
    viewResultat();
    return result; 
};

//Add evenement
item1.addEventListener('click',addElement1);
item2.addEventListener('click',addElement2);
item3.addEventListener('click',addElement3);
item4.addEventListener('click',addElement4);
item5.addEventListener('click',addElement5);
item6.addEventListener('click',addElement6);
item7.addEventListener('click',addElement7);
item8.addEventListener('click',addElement8);
item9.addEventListener('click',addElement9);
