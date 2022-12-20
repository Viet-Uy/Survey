//Spørsmål til survey
var sporsmal = ["IMI er den beste klassen", "IMI har verst snitt", "Uy er sinnsykt sexy", "Pusekatter er stygge"]

var allChecked = true;
var spm1 = 0;
var spm2 = 0;
var spm3 = 0;
var spm4 = 0;
var antallBrukere = 0;


function undersokelse(){


    var antallP = document.createElement("p");
    antallP.id = "antall";
    document.body.appendChild(antallP) 

for(i=0;i<sporsmal.length;i++){

    var header = document.createElement("h2");
    header.id = "header" + i;

    var content = document.createTextNode(sporsmal[i])
    header.appendChild(content);

    document.body.appendChild(header);

    var form = document.createElement("form")
    //Lager uenig/uenig antall avhengig av hvor mange spørsmål det er.
    for(z=0;z<sporsmal.length;z++){

        var radioFalse = document.createElement("input");
        radioFalse.type = "radio";
        radioFalse.value = "False";
        radioFalse.name = "svar"

        var radioTrue = document.createElement("input")
        radioTrue.type = "radio";
        radioTrue.value = "True";
        radioTrue.name = "svar"

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


//Lager knapper med funksjoner

var svar = document.createElement("button")
svar.innerHTML = "Svar";

var reset = document.createElement("button")
reset.innerHTML = "Reset";
reset.addEventListener("click", (e) =>{

location.reload();

})



var ele = document.querySelectorAll('input[type="radio"]');

    svar.addEventListener("click", (e) => {
      //For å telle brukere
        antallBrukere ++

        var brukere = document.querySelector("#antall")
        brukere.innerHTML = "Antall brukere som har svart: " + antallBrukere;

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







var resultat = document.createElement("button")
resultat.innerHTML = "Vis resultat"



//Lager diagram
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

document.body.appendChild(svar)
document.body.appendChild(resultat)
document.body.appendChild(reset);

}



undersokelse();




