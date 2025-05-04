class Clock {
  constructor({template}) {
    this.template = template
    this.timer = null
    this.isStarted = false
  }

  stop() {
    clearInterval(this.timer)
    this.timer = null
    this.isStarted = false
    document.querySelector('.clock').textContent = 'Press Start!'
    document.querySelector('.clock').classList.add('initial-text')
  }

  start() {
    if (!this.isStarted) {
      this.isStarted = true
      document.querySelector('.clock').classList.remove('initial-text')
      this.tick()
    }
  }

  tick() {
    this.render();
    let now = new Date()
    let delay = 1000 - now.getMilliseconds()
    this.timer = setTimeout(() => this.tick(), delay)
  }
  
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;

    let output = this.template
      .replace('h', hours)
      .replace('m', minutes)
      .replace('s', seconds);

    document.querySelector('.clock').textContent = output;
  }
}

const clock = new Clock({ template: 'h:m:s' });

document.querySelector('.clock').textContent = 'Press Start!';
document.querySelector('.clock').classList.add('initial-text');

document.getElementById('startBtn').addEventListener('click', () => {
  clock.start();
})

document.getElementById('stopBtn').addEventListener('click', () => {
  clock.stop();
})