window.onload = function() {
    const obrazy = ["lays1.jpg", "lays2.jpg", "lays3.jpg", "lays4.jpg", "lays5.jpg", "lays6.jpg", "lays7.jpg"];
    
    const imgElement = document.getElementById("layszdjecia");
    const btn = document.getElementById("zmienBtn");

    btn.onclick = function() {
        let randomIndex = Math.floor(Math.random() * obrazy.length);
        imgElement.src = obrazy[randomIndex];
        
        console.log("Wylosowano: " + obrazy[randomIndex]);
    };
};