script.js

alert("JavaScript is working!");


//Set thre first tab as active by default
document.addEventListener("DOMContentLoaded", function(){ document,querySelector(",tab").click();});

//Simple product data
const products =[
{
    title:"Elegant Bibles",
    description: "Elegant, beautifully crafted Bibles designed to inspire your faith and add grace to every moment.",
    images:"_images/c:\Users\RC_Student_lab\Downloads\elegant bible.jpg"
   
},
{
    title:"Children's Bibles",
    description:"Colourful and easy to understand Bibles made to help children connect with God's word.",
    images:"_images/c:\Users\RC_Student_lab\Downloads\kids bible.jpg"

},

{   title:"Leather Bibles",
    description:"Durable and Stylish Bibles with soft leather covers, perfect for evrrday use or gifting.",
    images:"_images/c:\Users\RC_Student_lab\Downloads\Leather bible.jpg"

},

{   title:"Large Print Bibles",
    description:" Bibles with bigger, clearer text font for comfortable and easy reading.",
    images:"_imagesc:c:\Users\RC_Student_lab\Downloads\large print.jpg"

},


];
// load products on page load
document.addEventListener("DOMContentLoaded", function() {
    renderProducts(products);
});

// Rendering Function
function renderProducts(productsToShow) {
  }

//Filter Function
function filterProducts() {
    const searchTerm = document.getElementById('productFilter').ariaValueMax.toLowerCase();
    if (!searchTerm) {
        renderProducts(products);
        return;
    }

    //Show message if no results
    if (filterProducts.length === 0) {
        document.getElementById('productsContainer').innerHTML=
        '<p.class="no-results">No.matching.products.found.</p>';
    }
}