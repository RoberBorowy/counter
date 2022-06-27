const daysTime = document.getElementById("days");
const hoursTime = document.getElementById("hours");
const minutesTime = document.getElementById("minutes");
const secondsTime = document.getElementById("seconds");

const weedingTime = "9 Sep 2022";

const countdown = () => {
  const weeding = new Date(weedingTime);
  const counter = new Date();

  const totaSeconds = Math.floor((weeding - counter) / 1000);

  const days = Math.floor(totaSeconds / 3600 / 24);
  const hours = Math.floor(totaSeconds / 3600) % 24;
  const minutes = Math.floor(totaSeconds / 60) % 60;
  const seconds = Math.floor(totaSeconds) % 60;

  daysTime.innerText = formatTime(days);
  hoursTime.innerText = formatTime(hours);
  minutesTime.innerText = formatTime(minutes);
  secondsTime.innerText = formatTime(seconds);
};

countdown();

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
