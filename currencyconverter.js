// currency converter app

// 1 Dolar = 19.18 TL
// 1 Euro = 20.85 TL
// 1 gram Gold = 1.221 TL

const newLine = "\r\n";

let information = "1 Dolar = 19.18TL" + newLine
+ "1 Euro = 20.85TL" + newLine
+ "1 gram Gold = 1.221TL" + newLine + newLine
+ "Press 1 to convert dollars" + newLine
+ "Press 2 to convert euro" + newLine
+ "Press 3 to convert gold";
alert(information);

let enter = Number(prompt("enter a number: "));

switch (enter) {
    case 1:
        let moneyD = Number(prompt("How many dollars do you want to buy?: "));
        moneyD = moneyD * 19.18;
        alert("The amount of TL you need to give: " + moneyD);
        break;
    
    case 2:
        let moneyE = Number(prompt("How many euro do you want to buy?: "));
        moneyE = moneyE * 20.85;
        alert("The amount of TL you need to give: " + moneyE);
        break; 
    
    case 3:
        let moneyG = Number(prompt("How many grams of gold do you want to buy?: "));
        moneyG = moneyG * 1.221;
        alert("The amount of TL you need to give: " + moneyG);
        break;
    
    default:
         alert("Please enter a valid number!..");
}