/* eslint-env jquery */

$(function () {

var toDos = {
  items:[]
};

// State modification functions
var addItem = function (toDos, item) {
  toDos.items.push(item);
};


//render functions
var renderToDos = function (toDos, element) {
  var itemsHTML = toDos.items.map(function (item) {
    return "<li>" +
       '<span class="shopping-item js-shopping-item">'+
       item +
       '</span>' +
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
};



// Event listeners
$("#js-shopping-list-form").submit(function (event) {
  event.preventDefault();
  addItem(toDos, $("#shopping-list-entry").val());
  renderToDos(toDos, $(".shopping-list"));
});

$(".shopping-list").on('click', '.js-shopping-item-toggle', function (event) {
    $(this)
     .parent()
     .siblings(".shopping-item")
     .toggleClass("shopping-item__checked");
  })


});
