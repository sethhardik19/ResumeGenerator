function addNewWEField(){
    // console.log('Clicked!!')

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField(){
    // console.log("clicked!");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}

// generating cv
function generateCV(){

    // console.log("working!!");
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
    let nameT2 = document.getElementById('nameT2');
    nameT2.innerHTML=nameField;

    let contactField = document.getElementById('contactField').value;
    let contactT = document.getElementById('contactT');
    contactT.innerHTML = contactField;

    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;

    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedField').value;

    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

    
    let wes = document.getElementsByClassName('weField');
    let str = "";

    for(let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML=str;

    let aqs = document.getElementsByClassName('aqField');
    str = "";

    for(let e of aqs){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=str;

    // setting image

    let file = document.getElementById('imgField').files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onloadend = function(){
        document.getElementById('imgT').src = reader.result;
    };

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';

}

function printCV(){
    window.print();
}