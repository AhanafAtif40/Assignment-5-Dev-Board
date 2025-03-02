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
// 2nd active history js
const outputHeading2 = document.getElementById('active-text2');
document.getElementById('card-btn2').addEventListener('click',
    function (event) {
        event.preventDefault();
        const newTime = new Date().toLocaleTimeString();
        const cardHeading = document.getElementById('2ndCardHeading').innerText;
        outputHeading2.innerHTML = `
        <div class="bg-[#F4F7FF] p-4 rounded-lg mx-2 mt-4">
        You have Complete The Task ${cardHeading} at ${newTime}</div>
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
// 3rd active history js
const outputHeading3 = document.getElementById('active-text3');
document.getElementById('card-btn3').addEventListener('click',
    function (event) {
        event.preventDefault();
        const newTime = new Date().toLocaleTimeString();
        const cardHeading = document.getElementById('3rdCardHeading').innerText;
        outputHeading3.innerHTML = `
        <div class="bg-[#F4F7FF] p-4 rounded-lg mx-2 mt-4">
        You have Complete The Task ${cardHeading} at ${newTime}</div>
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
// 4th active history js
const outputHeading4 = document.getElementById('active-text4');
document.getElementById('card-btn4').addEventListener('click',
    function (event) {
        event.preventDefault();
        const newTime = new Date().toLocaleTimeString();
        const cardHeading = document.getElementById('4thCardHeading').innerText;
        outputHeading4.innerHTML = `
        <div class="bg-[#F4F7FF] p-4 rounded-lg mx-2 mt-4">
        You have Complete The Task ${cardHeading} at ${newTime}</div>
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
// 5th active history js
const outputHeading5 = document.getElementById('active-text5');
document.getElementById('card-btn5').addEventListener('click',
    function (event) {
        event.preventDefault();
        const newTime = new Date().toLocaleTimeString();
        const cardHeading = document.getElementById('5thCardHeading').innerText;
        outputHeading5.innerHTML = `
        <div class="bg-[#F4F7FF] p-4 rounded-lg mx-2 mt-4">
        You have Complete The Task ${cardHeading} at ${newTime}</div>
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
// 6th active history js
const outputHeading6 = document.getElementById('active-text6');
document.getElementById('card-btn6').addEventListener('click',
    function (event) {
        event.preventDefault();
        const newTime = new Date().toLocaleTimeString();
        const cardHeading = document.getElementById('6thCardHeading').innerText;
        outputHeading6.innerHTML = `
        <div class="bg-[#F4F7FF] p-4 rounded-lg mx-2 mt-4">
        You have Complete The Task ${cardHeading} at ${newTime}</div>
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
        alert("Congrates!!! You have completed All the current task");
        });