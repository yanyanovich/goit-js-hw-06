const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = [];
const ingredientsListEl = document.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i++) {
  const option = ingredients[i];
  const ingredientsItems = document.createElement("li");
  ingredientsItems.textContent = option;
  ingredientsItems.className = "item";
  ingredientsList.push(ingredientsItems);
}
ingredientsListEl.append(...ingredientsList);
