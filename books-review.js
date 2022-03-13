const getRandomQuote = () => {
  const api_url = "https://api.quotable.io/random";
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    // console.log(request,request.readyState)
    if (request.readyState === 4) {
      const data = JSON.parse(request.responseText);
      document.getElementById("quote").innerHTML = data.content;
      document.getElementById("author").title = data.author;
    }
  });
  request.open("GET", api_url);
  request.send();
};

const addBook = () => {
  const bookName = document.getElementById("book-name").value;
  const bookReview = document.getElementById("book-review").value;
  event.preventDefault();

  if (bookName.trim() === "" || bookReview.trim() === "") {
    console.log("empty");
    document.getElementById("pop-up-1").classList.toggle("active");
  } else {
    let readingRate = "-";
    var radios = document.getElementsByTagName("input");
    var value;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].type === "radio" && radios[i].checked) {
        value = radios[i].value;
      }
    }
    switch (value) {
      case "5":
        readingRate = "5 stars";
        break;
      case "4":
        readingRate = "4 stars";
        break;
      case "3":
        readingRate = "3 Stars";
        break;
      case "2":
        readingRate = "2 Stars";
        break;
      case "1":
        readingRate = "1 Star";
        break;
      default:
    }

    const getTable = document.getElementById("books-table");
    getTable.innerHTML += `<tr> 
  <td>${bookName}</td>
  <td>${bookReview}</td>
  <td>${readingRate}</td>
</tr>`;
    const inputForm = document.getElementById("books-form");
    inputForm.reset();
  }
};

getRandomQuote();
