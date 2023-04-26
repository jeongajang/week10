function getTimeRemaining(endtime) {
  var total = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((total / 1000) % 60);
  var minutes = Math.floor((total / 1000 / 60) % 60);
  var hours = Math.floor((total / (1000 * 60 * 60)) % 24);

  // format hours, minutes, seconds to 00:00:00
  var formattedHours = hours.toString().padStart(2, '0');
  var formattedMinutes = minutes.toString().padStart(2, '0');
  var formattedSeconds = seconds.toString().padStart(2, '0');

  return {
    'total': total,
    'hours': formattedHours,
    'minutes': formattedMinutes,
    'seconds': formattedSeconds
  };
}

function initializeClock(endtime) {
  function updateClock() {
    var t = getTimeRemaining(endtime);

    // update HTML with formatted hours, minutes, seconds
    document.getElementById('hours').innerHTML = t.hours;
    document.getElementById('minutes').innerHTML = t.minutes;
    document.getElementById('seconds').innerHTML = t.seconds;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
    
    // stop countdown at 00:00:00
    if (t.total <= 0 && t.hours === '00' && t.minutes === '00' && t.seconds === '00') {
      clearInterval(timeinterval);
    }
  }

  // updateClock();
  // 만약 밑의 깜빡이는 코드가 작동되지 않는다면 위의 코드로 변경
  
  function updateClock() {
    var t = getTimeRemaining(endtime);
  
    // update HTML with formatted hours, minutes, seconds
    document.getElementById('hours').innerHTML = t.hours;
    document.getElementById('minutes').innerHTML = t.minutes;
    document.getElementById('seconds').innerHTML = t.seconds;
  
    if (t.total <= 0) {
      clearInterval(timeinterval);
      // toggle visibility of the countdown container to create blinking effect
      var countdownContainer = document.getElementById('countdown');
      countdownContainer.style.visibility = (countdownContainer.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }
  }
  
  var timeinterval = setInterval(updateClock, 1000);
}

var today = new Date();
var deadline = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
initializeClock(deadline);
