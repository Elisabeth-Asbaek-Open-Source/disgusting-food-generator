function randomFood(){

    var firstFood = ["Bratwurst", "Flan", "Birthday cake", "Bolognese", "Cabonara", "Hotdog", "Pizza", "Coleslaw", "Chocolate bar", "Cereal", "Ice cream", "Pasta", "Salad", "Coffee", "Milk", "French fries", "Polenta", "Lasagna", "Pigs toes", "Veal", "Big Mac"];
    var secondFood = ["Ketchup", "Mustard", "Chocolate sauce", "Breast milk", "Cockroaches", "Salt", "Jalapeños", "Cheese", "Coffee", "Oatmeal", "Corn", "Urine", "Dill", "Vinegar", "Pickles", "Salted Caramel", "Lox", "Ground coffee", "Pastry cream"];
    var thirdFood = ["Bacon", "Tofu", "Wine", "Gravy", "Pumpkin", "Cinnamon", "Surstromming", "Whipped cream", "Chips", "Pickles", "Liquorice", "Energy drink", "Hummus", "Shrimp", "Fish sauce", "Vodka", "Strawberries", "Brownies", "Surf n Turf"];

    function randomize(e) {
        return e[Math.floor(Math.random()*e.length)];
    }

    for (var i = 0; i < 1; i++) {
        console.log(randomize(firstFood) + " with " + randomize(secondFood) + " and " + randomize(thirdFood));
    }
    
}

module.exports = randomFood();