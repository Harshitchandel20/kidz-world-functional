var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButtons = document.getElementsByClassName("button");

let totalAmount = 0
let count = 0

var items = [
    {
        name: "This was our pact",
        quantity: 0,
        dollars: 7,
        cents: 49,
      },
      {
        name: "The famous five",
        quantity: 0,
        dollars: 4,
        cents: 59,
      },
      {
        name: "Matilda",
        quantity: 0,
        dollars: 6,
        cents: 80,
      },
      {
        name: "Harry Potter",
        quantity: 0,
        dollars: 10,
        cents: 0,
      },
      {
        name: "For Young Readers",
        quantity: 0,
        dollars: 7,
        cents: 29,
      },
      {
        name: "Wimpy Kid - DIY",
        quantity: 0,
        dollars: 4,
        cents: 99,
      },
      {
        name: "Dart Board",
        quantity: 0,
        dollars: 17,
        cents: 49,
      },
      {
        name: "Connect Four",
        quantity: 0,
        dollars: 19,
        cents: 99,
      },
      {
        name: "Jenga",
        quantity: 0,
        dollars: 20,
        cents: 99,
      },
      {
        name: "Monopoly",
        quantity: 0,
        dollars: 19,
        cents: 49,
      },
      {
        name: "Bookmarks",
        quantity: 0,
        dollars: 12,
        cents: 49,
      },
      {
        name: "Birthday Card",
        quantity: 0,
        dollars: 12,
        cents: 49,
      },
      {
        name: "Stuffed toys",
        quantity: 0,
        dollars: 15,
        cents: 99,
      },
      {
        name: "Dream catcher drawing",
        quantity: 0,
        dollars: 18,
        cents: 49,
      },
];

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].onclick = function (index) {
      return function () {
        totalAmount += items[index].dollars + items[index].cents / 100;
        items[index].quantity++;
        cartValue.innerHTML = ++count;
      };
    }(i);
  }
  
  cartButton.onclick = () => {
    console.clear()

    for (let element of items) {
      if (element.quantity !== 0) {
        console.log("Item name: " + element.name + " - Quantity: " + element.quantity);
      }
    }
    console.log("The Total amount is: $" + totalAmount.toFixed(2));
  };