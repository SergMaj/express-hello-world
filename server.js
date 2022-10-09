const app = require('./app')

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


let url = "https://script.google.com/macros/s/AKfycbzJRLqUDb64HiJdMY9ByB2S4KbpsMktkrOlFXcLnQtrqtMW2ZjAPEcbRyi4nXdom8CG3w/exec?text=nyrequest"

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    }
};
xhttp.open("GET", url, true);
xhttp.send();
