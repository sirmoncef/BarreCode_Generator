

let btn = document.getElementById("generer");
let text = document.getElementById("name");
let img = document.getElementById("img");
let d = document.getElementById("download");

btn.onclick = function() {

    if (text.value.length > 0 ) {
    if (text.value.length < 20) {
        
     img.innerHTML ="<svg id='barcode'></svg>";
     JsBarcode("#barcode", text.value);
     d.innerHTML = "<button class='do' onclick = 'topdf()' >DOWNLOAD THE BARECODE</button>";
     d.style.display ="flex";

    } else {
        img.innerHTML = "<p class = 'error'>Enter a valid name </p>";
        d.style.display ="none";
    }
}
else{
    img.innerHTML = "<p class = 'error'>Enter the name </p>";
    d.style.display ="none";

  
}

}

function topdf() {

    var opt = {
      margin:       1,
      filename:     `${text.value}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a6', orientation: 'l' }
    };
    
    
    html2pdf().set(opt).from(img).save();
    
   
    html2pdf(img, opt);
}




