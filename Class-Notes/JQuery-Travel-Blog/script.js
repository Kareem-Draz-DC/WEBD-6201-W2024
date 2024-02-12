$(document).ready(function () {
  console.log("jQuery is running!");
  // Injecting an H1 header into the header HTML element with an id of "header"
  $("#header").html("<h1>Wlecome to our Travel Blog!</h1>");

  // Create Navigation Bar
  const categories = ["Beaches", "Mountains", "Cities", "Forests", "Deserts"];
  let navContent = "<ul>";
  $.each(categories, function (index, category) {
    // console.log(index);
    // console.log(category);
    navContent += `<li onclick="loadCategoryContent('${category}')">${category}</li>`;
  });
  navContent += "</ul>";
  $("#navbar").html(navContent);
});

window.loadCategoryContent = function (category) {
  console.log("loadCategoryContent function ran!");
  console.log(category);
  let content = `<h2>${category}</h2>`;
  content += `<div class="carousel" id="${category.toLowerCase()}-carousel"></div>`;
  $("#content").html(content);

  // Create a function to populate our Carousel
  // Create a function to populate our image gallery
};
