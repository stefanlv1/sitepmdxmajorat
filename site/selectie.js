var square = document.getElementById("square");
var butonas = document.getElementById("butonas");
var nume = document.getElementById("titlu2");
var informatie = document.getElementById("informatie");
var contact = document.getElementById("contact");
var selectie = 1;

butonas.onclick = function(){
butonas.textContent="urmatorul";
square.style.transition = "all 0.2s";
informatie.style.opacity = 1;
informatie.style.transition = "all 2s"
contact.style.opacity = 1;
contact.style.transition = "all 2s"
square.style.border = "4px solid #FFFFFF";
if (selectie==1){
square.style.backgroundImage = "url(img/laur.jpg)";
nume.textContent="laurentiu";
informatie.textContent="Laur este adminul grupului pmd x majorat si programatorul acestui site,este o bestie de care femeile nu se pot bucura pentru ca lui ii plac jocurile pe calculator";
contact.textContent="@stefanlv_mnk";}
 if (selectie==2){
 square.style.backgroundImage = "url(img/catalin.jpeg)";
 nume.textContent="catalin";
 informatie.textContent="catalin este un mamifer feroce usor de imblanzit din cauza laturei lui sensibile nu este baiat rau da ii mai place la caca uneori";
 contact.textContent="@catalin_mnk";}
 if (selectie==3){
 square.style.backgroundImage = "url(img/razvan.jpeg)";
 nume.textContent="razvan";
 informatie.textContent="razvan este cel mai mare pericol din vadu pasii fiind tot odata motivul pentru care multi oameni nu mai viziteaza localitatea este pur si simplu infiorator";
 contact.textContent="@razvan_mnk";}
 if (selectie==4){
    square.style.backgroundImage = "url(img/denis.png)";
    nume.textContent="denis";
    informatie.textContent="denis...poate unul dintre cele mai complexe specimene cu un trecut complicat(a fost la gradinita cu cosmin540) cu adevarat o poveste de viata";
    contact.textContent="@_denis.st";}
if (selectie==5){
    square.style.backgroundImage = "url(img/cosmin.jpeg)";
    nume.textContent="cosmin";
    informatie.textContent="pericolul din posta calnau , acest personaj e o amenintare de marimi colosale si nu trebuie lasata sa traiasca in societatea noastra (se plimba cu atv)";
    contact.textContent="@cosmin540";}
 selectie++;
 if (selectie==6)
 selectie=1;
}