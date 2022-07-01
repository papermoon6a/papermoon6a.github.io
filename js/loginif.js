function myFunction()
{
var a=document.getElementById("text_a").value;
if (a=="admin")
{
  window.close();
 window.open("admin.html")
}
else
{
  window.open("index.html")
}
}
