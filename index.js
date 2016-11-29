/* eslint-env jquery */

var toDos = {
  items:[]
};

// State modification functions
var addItem = function(toDos, item) {
  toDos.items.push(item);
};

//render functions
var renderToDos = function(toDos, element){
  var itemsHTML = toDos.items.map(function(item){
    return "<li>" + item + "</li>";
  });
  element.html(itemsHTML)
};

console.log(toDos)


//Event listeners
$("#js-shopping-list-form").submit(function(event){
  event.preventDefault();
  addItem(toDos, $("#shopping-list-entry").val());
  renderToDos(toDos, $(".shopping-list"));
});
