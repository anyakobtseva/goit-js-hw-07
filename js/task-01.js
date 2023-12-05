const allCategories = document.querySelector('#categories').querySelectorAll('.item');
console.log('Number of Categories: ', allCategories.length);

for (const category of allCategories) {
    console.log("Category: ", category.querySelector("h2").textContent)
    console.log("Elements: ", category.querySelectorAll("li").length)
} 