$("#keyword").on("input", searchEvent);

function searchEvent() {
  const results = [];
  const inputText = $(this).val();

  if (inputText) {
    $("#list li").each((index, name) => {
      if (name.textContent.indexOf(inputText) !== -1) {
        results.push(name.textContent);
      }
    });

    $("#info").empty();

    $.each(results, (index, name) => {
      $("#info").append("<li>" + name + "</li>");
    });
  }
}