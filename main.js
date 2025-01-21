let hour = 0;
let min = 0;
let sec = 0;
let ms = 0;
let intervalId;

const timerHtml = document.getElementById('timer');

function startButton() {
  intervalId =  setInterval(function() {
    ms++;                           /* ミリ秒の更新 */
    if (ms === 10) {                /* 秒の更新 */
      sec++;
      ms = 0;
      timerHtml.textContent = `${hour} : ${min} : ${sec} : ${ms}`;
    } else if (sec === 60) {        /* 分の更新 */
      min++;
      sec = 0;
      timerHtml.textContent = `${hour} : ${min} : ${sec} : ${ms}`;
    } else if (min === 60) {        /* 時の更新 */
      hour++;
      min = 0;
      timerHtml.textContent = `${hour} : ${min} : ${sec} : ${ms}`;
    }
      timerHtml.textContent = `${hour} : ${min} : ${sec} : ${ms}`;
    }, 100);

  /* ボタン押下の不可 */
  document.getElementById('start').disabled = true;
  document.getElementById('stop').disabled = false;
  document.getElementById('reset').disabled = false;
}

function stopButton() {
  clearInterval(intervalId);
  /* ボタン押下の不可 */
  document.getElementById('start').disabled = false;
  document.getElementById('stop').disabled = true;
}

function resetButton() {
  hour = 0;
  min = 0;
  sec = 0;
  ms = 0;
  clearInterval(intervalId);
  timerHtml.textContent = `${hour} : ${min} : ${sec} : ${ms}`;
  /* ボタン押下の不可 */
  document.getElementById('start').disabled = false;
  document.getElementById('reset').disabled = true;
}