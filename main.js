//FLOYD'S TRIANGLE
let num=1
for(let row = 1; row <= 8; row++) 
{ 
    for(let col =1; col < row; col++)
    {
     document.write(num);
     num++;
     document.write(" ")
    }
    document.write("</br>")
}
