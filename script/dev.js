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
// 1st active history js
const outputHeading = document.getElementById('active-text');
document.getElementById('card-btn').addEventListener('click',
    function (event) {
        event.preventDefault();
        const newTime = new Date().toLocaleTimeString();
        const cardHeading = document.getElementById('1stCardHeading').innerText;
        outputHeading.innerHTML = `
        <div class="bg-[#F4F7FF] p-4 rounded-lg mx-2"> You have Complete The Task ${cardHeading} at ${newTime}</div>
        `;
        // task count section
        const taskCount = document.getElementById('change-date').innerText;
        const convertTaskCount = parseFloat(taskCount);
        sum = convertTaskCount - 1;
        document.getElementById('change-date').innerText = sum;
        // navCount section
        const navCount = document.getElementById('change-number').innerText;
        const convertnavCount = parseFloat(navCount);
        navSum = convertnavCount + 1;
        document.getElementById('change-number').innerText = navSum;

        this.setAttribute("disabled", true);
        this.classList.add("opacity-20",);

        alert("Board Updated Succesfully");

    });