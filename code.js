var number = document.getElementById("lineSize");
var s = 3;
number.addEventListener("change", cambioTamaño)
var d = document.getElementById("area_de_dibujo");
var lienzo = d.getContext("2d");
document.addEventListener("mousedown", comienzaDibujo);
document.addEventListener("mouseup", terminaDibujo);
document.addEventListener("mousemove", focusEnLienzo);
var cd = document.getElementById("colorPicker");
var c = "black";
var dibujando = 1;
cd.addEventListener("change", cambioDeColor);

function cambioTamaño ()
{
    s = parseInt(lineSize.value);

}

function comienzaDibujo(evento)
{
    if(evento.target == d){
        console.log(evento);
    }
    
dibujando++;
console.log(dibujando);
}

function terminaDibujo()
{
dibujando--;
console.log(dibujando);
}

function cambioDeColor()
{
  c = cd.value;
  console.log(c);
}


function focusEnLienzo(focus)
{
if(focus.target == d)
{
  if (dibujando == 2)
  {
      dibujarLinea(c, parseInt(focus.layerX)-(s/2)+0.5, parseInt(focus.layerY)-(s/2)+0.5, parseInt(focus.layerX)+(s/2)-0.5, parseInt(focus.layerY)+(s/2)-0.5, s);
  }
}
}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, curSize)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = curSize;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

var sub = document.getElementById("submit");
sub.addEventListener("click", enviarMail)

function enviarMail() {
    var formail =  document.getElementById("email").value;
    var formname = document.getElementById("name").value;
    var link = "mailto:rosasandovaldr@gmail.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + encodeURIComponent(formname)
             + "&body=" + encodeURIComponent(document.getElementById('mensaje').value + "Enviado por:" + formail);
    
    window.location.href = link;
}