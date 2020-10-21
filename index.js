function randomFood(){

    var firstFood = ["Bratwurst", "Flan", "Birthday cake", "Bolognese", "Cabonara", "Hotdog", "Pizza", "Coleslaw", "Chocolate bar", "Cereal", "Ice cream", "Pasta", "Salad", "Coffee", "Milk", "French fries", "Polenta", "Lasagna", "Pigs toes", "Veal", "Big Mac"];
    var secondFood = ["Ketchup", "Mustard", "Chocolate sauce", "Breast milk", "Cockroaches", "Salt", "Jalapeños", "Cheese", "Coffee", "Oatmeal", "Corn", "Urine", "Dill", "Vinegar", "Pickles", "Salted Caramel", "Lox", "Ground coffee", "Pastry cream"];
    var thirdFood = ["Bacon", "Tofu", "Wine", "Gravy", "Pumpkin", "Cinnamon", "Surstromming", "Whipped cream", "Chips", "Pickles", "Liquorice", "Energy drink", "Hummus", "Shrimp", "Fish sauce", "Vodka", "Strawberries", "Brownies", "Surf n Turf"];

    var colorArray = ["\x1b[31m", "\x1b[33m", "\x1b[32m", "\x1b[34m", "\x1b[36m", "\x1b[35m"];
    var colorReset = "\x1b[0m";
    
    function randomize(e) {
        return e[Math.floor(Math.random()*e.length)];
    }

    for (var i = 0; i < 1; i++) {
        console.log(randomize(colorArray) + randomize(firstFood) + colorReset + " with " + randomize(colorArray) + randomize(secondFood) + colorReset + " and " + randomize(colorArray) + randomize(thirdFood) + colorReset);
    }

}

module.exports = randomFood();