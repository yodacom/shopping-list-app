/* eslint-env jquery */

$(function(){

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
    return "<li>"
       + item +
       '<span class="shopping-item js-shopping-item"></span>' +
    '<div class="shopping-item-controls">' +
      '<button class="js-shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="js-shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>'
       '</li>';
  });

  element.html(itemsHTML);

  console.log(toDos);
};



// Event listeners
$("#js-shopping-list-form").submit(function(event){
  event.preventDefault();
  addItem(toDos, $("#shopping-list-entry").val());
  renderToDos(toDos, $(".shopping-list"));
});

$("button.shopping-item-toggle").click(function(event) {
    $(event.target).closest(".shopping-item-toggle").toggleClass( "shopping-item_checked");
  });

});
