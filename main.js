var namesOfPeople = [];

function submit() 
{
    var GuestName = document.getElementById("anuncio-convidado").value;
    namesOfPeople.push(GuestName);
    console.log(GuestName);
    console.log(namesOfPeople);
    var lengthOfName = namesOfPeople.length;
    console.log(lengthOfName);
    document.getElementById("resposta-envie").innerHTML = namesOfPeople.toString();
}

function show()
{
    var i = namesOfPeople.join("<br>");
    console.log(i);
    document.getElementById("show-btn").innerHTML = i.toString();
    document.getElementById("organise-btn").style.display = "block";

}
function organise() =
{
    namesOfPeople.sort();
    i = namesOfPeople.join("<br>");
    console.log(namesOfPeople);
    document.getElementById("resposta-organise").innerHTML = i.toString();
}

function searching()
{
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<namesOfPeople.length; j++)
        {
            if(s==namesOfPeople[j]){
                found=found+1;
        }
    }
    document.getElementById("resposta-pesquisa").innerHTML=("Nome encontrado "+found+" vez(es)");
    console.log("Nome encontrado "+found+" vez(es)");