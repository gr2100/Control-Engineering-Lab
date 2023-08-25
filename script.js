var div = document.getElementById('answ');
var display = 0;
function answeer()
{
   if(display == 1)
   {
    div.style.display = 'block';
    display =0 ;
   }
   else{
    div.style.display = 'none';
    display = 1;
   }
}
