var newPizza = [{pizzaName: "The Main Event",description: "A delightful combination of organic onions, peppers and tomatoes mixed with grass-fed 100% wagyu beef makes this pizza, dare we say.....Dynamic!", price: 39.99},{pizzaName: "My Subways",description: "Paying homage to our favorite sandwich shop Subways, we create your favorite sub as a pizza! Don't you dare miss this train!",price: 21.99},{pizzaName: "Panda Express",description: "East definitely meets West in this terrific union. Enjoy your favorite Panda Express flavors of Orange Chicken, Broccoli Beef, Kung Pao Chicken or Honey Walnut Shrimp in a different way.",price: 16.88},
{pizzaName: "Tex Mex",description: "Build pizzas not walls is the theme for this mex. We draw inspiration from your local cantina to create this masterpiece.",price: 21.21}];

console.log(newPizza.length);
console.log(newPizza[0])

//an array with objects in it
//for loop, append child 

var content = document.getElementsByClassName('content');
console.log(content);
console.log(content.length);
//div.content[2]


for (var i = 0; i < newPizza.length; i++){
    var insertName = document.createElement("p");
    insertName.className = "pizzaName";
    insertName.innerHTML = newPizza[i].pizzaName;
    content[2].appendChild(insertName);

    var insertDescription = document.createElement('p');
    insertDescription.className = 'description';
    insertDescription.innerHTML = newPizza[i].description;
    content[2].appendChild(insertDescription);

    var insertPrice = document.createElement('p');
    insertPrice.className = 'price';
    insertPrice.innerHTML = newPizza[i].price;
    content[2].appendChild(insertPrice);

}

// var insertPizza = document.createElement("div");
// insertPizza.className = "pizzaName";
// insertPizza.innerHTML = newPizza[0].price;

// content[2].appendChild(insertPizza);
// console.log(insertPizza); (the formula)


// content[2].appendChild(newPizza[1].pizzaName);

