function doArea() {
                
    let radius=document.getElementById("r").value
    let pi =3.14
    let Area=eval(pi*radius*radius)
    document.getElementById("div1").innerHTML=Area
}
