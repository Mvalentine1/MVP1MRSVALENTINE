/* JavaScript for the shopping cart */
const cartLink = document.getElementById('cart-link');
const cartBadge = document.getElementById('cart-badge');

let cartCount = 0;

cartLink.addEventListener('click', () => {
  alert('This is where the shopping cart would open!');
});

$('.add-to-cart').click(function() {
    var productId = $(this).data('product-id');
    // call function to add product to cart using productId
  });
  