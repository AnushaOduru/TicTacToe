let Xrole = 'X'
let Orole = 'O'
let count = 1
let whoWon = ''
let forbiden = []
const check1 = ["t1 t2 t3","m1 m2 m3","b1 b2 b3","t1 m1 b1","t2 m2 b2","t3 m3 b3","t1 m2 b3","t3 m2 b1"]
function Play(clicked_id){
    if(count<=9 && !forbiden.includes(clicked_id))
    {
    count%2? document.querySelector(`#${clicked_id}`).innerHTML = Orole : document.querySelector(`#${clicked_id}`).innerHTML = Xrole
    forbiden.push(clicked_id)
    count ++
    }
    if(count>5 && count<=10)
    CheckWin()   
}
const allEqual = arr => arr.every(val => val !="&nbsp;" && val === arr[0])
function CheckWin()
{    
    let MyArray = check1.map(x => (x.split(" ")).map( x => document.querySelector( `#${x.split()}` ).innerHTML.toString() )) 
    MyArray.forEach(element => {
        allEqual(element)?whoWon = element[0]:null;
        if(whoWon != '')
        {           document.querySelector("#res").innerHTML = `Result : ${whoWon} win`
            count = 10
            return
        }
        if(whoWon == '' && count>=10)
        {
            document.querySelector("#res").innerHTML = `Result : Draw`
            return
        }                    
    });
}
//button
const reloadtButton = document.querySelector("#reload");

function reload() {
    reload = location.reload();
}

reloadButton.addEventListener("click", reload, false);