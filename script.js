//Spørsmål til survey
var sporsmal = ["IMI er den beste klassen", "IMI har verst snitt", "Uy er sinnsykt sexy", "Pusekatter er stygge"]

//Settes som true sånn at vi kan sjekke om spørsmålene er svart eller ikke
var allChecked = true;
var spm1 = 0;
var spm2 = 0;
var spm3 = 0;
var spm4 = 0;
var antallBrukere = 0;





function undersokelse(){

    //Antall brukere
    var antallP = document.createElement("p");
    antallP.id = "antall";
    document.body.appendChild(antallP) 

    //For loop for spørsmål, den går utifra spørsmål som er skrevet i for-loopen
for(i=0;i<sporsmal.length;i++){

    var header = document.createElement("h2");
    header.id = "header" + i;

    var content = document.createTextNode(sporsmal[i])
    header.appendChild(content);

    document.body.appendChild(header);
    //----------------------------------------------------------------------------

   




    //Lager uenig/uenig antall avhengig av hvor mange spørsmål det er.
    var form = document.createElement("form")
    for(z=0;z<sporsmal.length;z++){

        //Selve knappen for false og true
        var radioFalse = document.createElement("input");
        radioFalse.type = "radio";
        radioFalse.value = "False";
        radioFalse.name = "svar"

        var radioTrue = document.createElement("input")
        radioTrue.type = "radio";
        radioTrue.value = "True";
        radioTrue.name = "svar"

        //Tekst der det står false og true
        var labelFalse = document.createElement("label")
        labelFalse.htmlFor = "False"
        labelFalse.innerHTML = "Uenig";

        var labelTrue = document.createElement("label")
        labelTrue.htmlFor = "True"
        labelTrue.innerHTML = "Enig"
    }
    labelTrue.appendChild(radioTrue);
    labelFalse.appendChild(radioFalse);
    form.appendChild(labelFalse)
    form.appendChild(labelTrue)
    header.appendChild(form);
    document.body.appendChild(form)
}
//---------------------------------------------------------------------------------------



//Div for å kunne plassere ulike ting hvor enn jeg vil, denne divven brukes til grafen av undersøkelsen
var divSvar = document.createElement("div");

//Lager knapper med funksjoner

var svar = document.createElement("button")
svar.innerHTML = "Svar";
divSvar.appendChild(svar)

//Lager en reset knapp som at alt kan resettes.
var reset = document.createElement("button")
reset.innerHTML = "Reset";
divSvar.appendChild(reset);
reset.addEventListener("click", (e) =>{

location.reload();

})
//-----------------------------------------------------------------------------------------------------


//Henter inn alle radio elementer sånn at jeg kan hente inn verdi eller sjekke om de er huket av eller ikke
var ele = document.querySelectorAll('input[type="radio"]');

  
    //Teller antall brukere som svarte hva, om 2 personer svarer forskjellig så viser den statistikk på hvem som mente hva
    svar.addEventListener("click", (e) => {
      //For å telle brukere
        antallBrukere ++

        //Teller hvor mange brukere som svarte
        var brukere = document.querySelector("#antall")
        brukere.innerHTML = "Antall brukere som har svart: " + antallBrukere;
        //------------------------------------------------------------------


        // For å sjekke om enig blir tatt, om den blir tatt så plusser den til verdien.
        if(allChecked){
            

                    if(ele[1].checked){
                        spm1 ++ ;
                    }
                    if(ele[3].checked){
                        spm2++
                        
                    }
                    if(ele[5].checked){
                        spm3 ++;
                    }
                    if(ele[7].checked){
                        spm4 ++;
                    }
        }
    })

        //--------------------------------------------------------------------------------

// Lager knapp som du kan addEventListener til rett under
var resultat = document.createElement("button")
resultat.innerHTML = "Vis resultat"
divSvar.appendChild(resultat);
//-------------------------------------------------------



//Her lages det diagrammet med farger osv.
resultat.addEventListener("click", (e) => {

    var canvas = document.createElement("canvas");
    canvas.id = "myChart";
    canvas.style.cssText = "width: 100%; max-width: 700px";
    document.body.appendChild(canvas)

    //Spørsmålene som står der
  var xValues = ["IMI er den beste klassen", "IMI har verst snitt", "Uy er sinnsyk sexy", "Pusekatter er stygge"];

  //Verdiene printes i prosent
  var yValues = [(spm1/antallBrukere)*100, (spm2/antallBrukere)*100, (spm3/antallBrukere)*100, (spm4/antallBrukere)*100];

  //Farger på diagramet
  var barColors = ["red", "green","blue","orange","brown"];

 
//Lager en chart på canvas som er lagd ovenfor
  new Chart("myChart", {
    //Hva slags type
    type: "bar",

    data: {

      labels: xValues,

      datasets: [{

        backgroundColor: barColors,

        data: yValues

      }]

    },

    options: {

      legend: {display: false},

      title: {

        display: true,

        text: "Hvor mange som var enig med spørsmålene"

      },

      scales: {
//Hvordan infoet displayes i Y aksen.
        yAxes:[{

          ticks:{

            beginAtZero: true,

            max: 100

          }

        }]

      }

    }

  });

});

document.body.appendChild(divSvar);

}
//-----------------------------------------------------------------------------------------------------------------------


//Nedenfor her er kode for å lage navn, endre farge og forskjellige elementer. Alt det nedefor er for utvikling oppdraget.


//Her lages hele funksjonnen for hvordan man skriver inn navn til hvordan navnet displayes ----------------------------------------
var divInfo = document.createElement("div");
var navn = document.createElement("h2");
navn.innerHTML = "Navn: "
divInfo.appendChild(navn);
//Skriv navn inputbox
var navnBoks = document.createElement("input");
navnBoks.placeholder = "Skriv navn her";
divInfo.appendChild(navnBoks);
//Trykk på enter for å bytte navn
var enterInput = document.createElement("button");
enterInput.innerHTML = "Enter";
enterInput.style.margin = "0px";
enterInput.style.width = "60px";
enterInput.addEventListener("click",(e) =>{
  navn.innerHTML = "Navn: " + navnBoks.value;
  })

//--------------------------------------------------------------------------------------------------------

//Append button i divInfo
divInfo.appendChild(enterInput);
document.body.appendChild(divInfo);


//Lager hele fargeseksjonen, div, button, inputbox. Her lages funksjonen og elementene for å endre farge til body-------------
var divFarge = document.createElement("div");
var forandreFarge = document.createElement("button");
forandreFarge.innerHTML = "Endre farge"
var inputBoks = document.createElement("input");
inputBoks.placeholder = "Skriv farge her";
var headerFarge = document.createElement("h3")
headerFarge.innerHTML = "Skriv en farge bakgrunnsfargen din skal endres til"
divFarge.appendChild(headerFarge);
divFarge.appendChild(inputBoks);
divFarge.appendChild(forandreFarge);
var count = 1;

//Forandrer farge på body
forandreFarge.addEventListener("click", (e) =>{
  count++
  if(inputBoks != null){
    document.body.style.backgroundColor = inputBoks.value.toLowerCase(); 
  }else{
    alert("Fargen finnes ikke!");
  }
})
//---------------------------------------------------------------------------------------------------------------------------


//Her lages det nye elementen du vil lage, her blir det appendet, funksjonen blir lagd og andre elementer som knapper og options
var optionvalues = ["h1", "h2", "h3"]
var select = document.createElement("select");
select.setAttribute("id", "select1")
var divSelect = document.createElement("div");
//For loop for selve elementet
for(i=0;i<optionvalues.length;i++){
  var optSelect = document.createElement("option")
  select.appendChild(optSelect)
  optSelect.innerHTML = optionvalues[i]
}

//Lager ny div for det nye elementet du valgt
var divLag = document.createElement("div");


var lagElement = document.createElement("button");
lagElement.innerHTML = "Enter"
var lagElementInput = document.createElement("input");

//Henter inn id til select og lager elementet du vil lage
lagElement.addEventListener("click", (e) =>{
  selectElement = document.querySelector('#select1');
  var nyLagd = document.createElement(selectElement.value)
  nyLagd.innerHTML = lagElementInput.value;
  divInfo.appendChild(nyLagd);

})

//Appender alt til divLag
divLag.appendChild(select);
divLag.appendChild(lagElementInput);
divLag.appendChild(lagElement);

//----------------------------------------------------------------------------------------------------------------------------

//Appender de siste divene til dokumentet så den vises.
document.body.appendChild(divFarge);
document.body.appendChild(divLag);


//Kjører undersøkelse funksjon for graf osv.
undersokelse();




