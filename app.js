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

  element.html(itemsHTML);

  console.log(toDos);
};

var toggleCrossout = function (){
  $("button.shopping-item-toggle").click(function() {
    $(this ).toggleClass( "shopping-item_checked");
  });
};

// Event listeners
$("#js-shopping-list-form").submit(function(event){
  event.preventDefault();
  addItem(toDos, $("#shopping-list-entry").val());
  renderToDos(toDos, $(".shopping-list"));
});

$(".shopping-item-toggle").click(function(event){
  event.preventDefault();
  event.toggleCrossout();
})
