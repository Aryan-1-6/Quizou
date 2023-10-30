// timer.js
const timer = document.getElementById('timer');

var currentURL = window.location.href;

var id = currentURL.split('quiz/').filter(Boolean).pop();
var z = id.split('/').filter(Boolean).pop();

console.log(z);

const timelimit = 10

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const startTime = Math.floor(Date.now() / 1000);
function updateTimer() {
  const currentTime = Math.floor(Date.now() / 1000);

  const elapsedTime = currentTime - startTime;
  const remainingTime = Math.max(timelimit - elapsedTime, 0);

  if (remainingTime <= 0) {
    timer.textContent = 'Time limit reached';
    var formData = $('#quiz-form').serialize();
    console.log(56);
      const csrftoken = getCookie('csrftoken');
      $.ajax({
      type: 'POST',
        url: "evaluate",
        data: formData,
        beforeSend: function(xhr, settings) {
          xhr.setRequestHeader("X-CSRFToken", csrftoken);
        },
        success: function(response) {
          window.location.href = "";
        },
        error: function(xhr, status, error) {
          console.log(error);
        }
    });
  }
    
  else {  
    timer.textContent = formatTime(remainingTime);
  }
  setTimeout(updateTimer, 1000);
  return remainingTime
}

function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}

const big = updateTimer();


