// background color change section
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
let index = 0;

document.getElementById('background-color').addEventListener('click',
    function () {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    });

// current date section
document.addEventListener("DOMContentLoaded", function(){
    const now = new Date();
    const weekday = now.toLocaleDateString("en-US", { weekday: "short" });
    const currentDate = now.toLocaleDateString("en-US", {
        month: "short",day: "numeric",year: "numeric"
      });
      document.getElementById("current-Date").innerHTML = `${weekday}<br>${currentDate}`
      
});


const historyList = document.getElementById('All-history');
document.getElementById('clear-history').addEventListener('click',
    function (event) {
        event.preventDefault();
        historyList.innerText = '';

    });
