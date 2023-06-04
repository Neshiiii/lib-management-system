function filterBooks() {
    // Get filter values
    var title = document.getElementById("titleFilter").value.toLowerCase();
    var author = document.getElementById("authorFilter").value.toLowerCase();
    var genre = document.getElementById("genreFilter").value.toLowerCase();
    var date = document.getElementById("dateFilter").value.toLowerCase();
  
    var table = document.getElementById("bookTable");
    var rows = table.getElementsByTagName("tr");
  
    var count = {
      title: 0,
      author: 0,
      genre: 0,
      date: 0
    };
  
}
  