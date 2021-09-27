

$(document).ready(function() {
	$.get('https://fakestoreapi.com/products', function (data) {
		// console.log(data[0].title);
		for (var i = 0; i < data.length; i++) {
			if (data[i].category === "men's clothing") {
				// console.log('hello');
				$('#men').append(`
                    <div class='card m-2 border-2' style='width:200px;'>
                    <img src='${data[i].image}' class='fake'>
                    <div class='card-body'>
                    <p class ='card-title' id='productTitle'> ${data[i].title} </p>
                    <p class='card-text' id='productPrice'> $${data[i].price} </p>
                    <button class="add-cart${data[i].id} bottom"> Add Cart</button>
                `);
			} else if (data[i].category === "women's clothing") {
				// console.log('hello');
				$('#women').append(`
                    <div class='card m-2 border-2' style='width:200px;'>
                    <img src='${data[i].image}' class='fake'>
                    <div class='card-body'>
                    <p class ='card-title' id='productTitle'> ${data[i].title} </p>
                    <p class='card-text' id='productPrice'> $${data[i].price} </p>
                    <button class="add-cart${data[i].id} bottom"> Add Cart</button>
                `);
			} else if (data[i].category === 'jewelery') {
				// console.log('hello');
				$('#jewelery').append(`
                    <div class='card m-2 border-2' style='width:200px;'>
                    <img src='${data[i].image}' class='fake'>
                    <div class='card-body'>
                    <p class ='card-title' id='productTitle'> ${data[i].title} </p>
                    <p class='card-text' id='productPrice'> $${data[i].price} </p>
                    <button class="add-cart${data[i].id} bottom"> Add Cart</button>
                `);
			} else if (data[i].category === 'electronics') {
				// console.log('hello');
				$('#electronic').append(`
                    <div class='card m-2 border-2' style='width:200px;'>
                    <img src='${data[i].image}' class='fake'>
                    <div class='card-body'>
                    <p class ='card-title' id='productTitle'> ${data[i].title} </p>
                    <p class='card-text' id='productPrice'> $${data[i].price} </p>
                    <button class="add-cart${data[i].id} bottom"> Add Cart</button>
                `);
			};
        let carts = document.querySelectorAll('.bottom');
        for(let i = 0; i < carts.length; i++){
            carts[i].addEventListener('click', () => {
                cartNumbers(data[i]);
            })
        }

        function onloadCartNumbers(){
            let productNumbers = localStorage.getItem('cartNumbers');
            if(productNumbers){
                document.querySelector('.cart span').textContent = productNumbers;
            }
        }
        function cartNumbers(data){
            let productNumbers = localStorage.getItem('cartNumbers', 1);

        
            productNumbers = parseInt(productNumbers);
            if(productNumbers){
                localStorage.setItem('cartNumbers', productNumbers + 1);
                document.querySelector('.cart span').textContent = productNumbers + 1;
            } else {
                localStorage.setItem('cartNumbers', 1);
                document.querySelector('.cart span').textContent = 1;
            }
            setItem(data);
        }
        function setItem(data){
            console.log('inside my setItem');
            console.log('my items are:', data);

            // data.rating = 1;
            // let cartItems= {
            //     [data.title]: data
            // }
            // localStorage.setItem("productInCart", JSON.stringify(cartItems));
        }
        onloadCartNumbers();
        };
        
    });
})