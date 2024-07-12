let arr = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
}
