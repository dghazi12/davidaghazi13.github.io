// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $("#addburger").on("click", function (event) {

    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {

      location.reload();

    });

  });

  $(".devour").on("click", function (event) {

    event.preventDefault();

    var id = $(this).data("id");
    var devouredBurgers = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurgers
    }).then(function () {

      location.reload();

    });

  });

  $(".delete").on("click", function (event) {

    event.preventDefault();

    var id = $(this).data("id");

    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
    }).then(function () {

      location.reload();

    });

  });

})