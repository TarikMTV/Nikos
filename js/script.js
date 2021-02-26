//--------------------------------
let headerNav = document.getElementsByClassName('header-nav');
			headerNav[0].addEventListener('click', openNav);

			function openNav(event) {
			   var x = document.getElementById("header-nav-list");
			   console.log(x);
			   if (x.style.display === "block") {
			       x.style.display = "none";
			   } else {
			       x.style.display = "block";
			   }
			}
//----------------------add to cart----------
let products = [];
let addToCartButtons = document.getElementsByClassName('js-addToCart');

for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener('click', addToCart);

}

function addToCart(event){
	let count = document.getElementById('count');

	if(!isNaN(Number(count.innerHTML))){
		++count.innerHTML;
	} else {
		alert('Error!');
	}

	let id = event.target.parentNode.id;
	let name = event.target.parentNode.getElementsByTagName('h3')[0].innerHTML;
	let price = event.target.parentNode.getElementsByTagName('p')[0].innerHTML;
	price = price.match(/\d+/)[0];

	if(products.find(item => item.id === Number(id))){
		console.log('we have one');
		products.find(item => item.id === Number(id)).amount++;
	} else{
	console.log('no product');
		let product = {
			id: Number(id),
			name: name,
			price: price,
			amount: 1
		}
		products.push(product);
	}
	console.log(products);
}

//----------------------clear to cart----------

let clearCartButton = document.getElementById('clearCart');
clearCartButton.addEventListener('click', clearCart);

function clearCart(event){
	let count = document.getElementById('count');

	count.innerHTML = 0;
		products = [];
		console.log(products);
}
//--------------show cart----------
let cartButton = document.getElementById('cart');

cartButton.addEventListener('click', showCart);

function showCart(event) {
	let rows = '';
	for (let i = 0; i < products.length; i++) {
		rows += '<tr>' +
			'<td>' + products[i].name + '</td>' +
			'<td>' + products[i].price + '</td>' +
			'<td><input id="'+ products[i].id
			+'" class="js-product-amount" type="number" min="0" value="'
			+ products[i].amount + '"/>' + '</td>' +
			'<td>= &#36; <span>'
			+ products[i].price * products[i].amount + 
			'</span></td>' + 
		'</tr>';
		console.log( products[i].price * products[i].amount );
	}


let basket = document.getElementById('basket');
basket.innerHTML = rows;

let productsAmount = document.getElementsByClassName('js-product-amount');

for (let i = 0; i < productsAmount.length; i++) {
	productsAmount[i].addEventListener('input', productAmount)
	}
}

totalPrice();

function productAmount(event){
	console.log(event.target);
}

function productAmount(event) {
let amount = event.target.value; //new amount - string
  let productId = event.target.id;

  // ------------update fruit amount --------------------------------------
  let product = products.find(item => item.id === Number(productId));
  if(product){
    product.amount = amount;

 //-------------find priceByFruit element ----------------------
	let productPrice = event.target.parentNode.parentNode;//input->td->tr
	productPrice.getElementsByTagName('span')[0].innerText = product.amount*product.price;
	}
	totalPrice();
}

function totalPrice() {
	let result = 0;
	for (let i = 0; i < products.length; i++) {
		result += products[i].amount*products[i].price;

	}
	let totalCart = document.getElementById('total-card');
	totalCart.innerText = result;
}
