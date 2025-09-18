function rollDice(){
    var randomNum1 = Math.floor(Math.random() * 6)+ 1;
    var image1Path = "iamges/dice" + randomNum1 + "png";
    console.log(image1Path);
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", image1Path);
}

rollDice();