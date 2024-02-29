const canvas = document.getElementById("main-canvas");
const c = canvas.getContext("2d");

var cw = (canvas.width = window.innerWidth);
var ch = (canvas.height = window.innerHeight);

var elements = [];

var gravity = 0.25;
var friction = 0.5;

class Particles {
  constructor({ x, y, r, color, velocity, comet, type = "particle" }) {
    this.x = x;
    this.ox = x;
    this.y = y;
    this.oy = y;

    this.r = r;
    this.color = color;

    this.velocity = velocity;
    this.opacity = Math.random() * 100;
    this.comet = comet;
    this.exploded = false;
    this.type = type;
  }

  draw() {
    c.save();
    c.beginPath();

    c.globalAlpha = this.opacity / 100;
    c.fillStyle = this.color;
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fill();

    c.closePath();
    c.restore();
  }

  update() {
    this.draw();

    this.x += this.velocity.x;
    this.y += this.velocity.y;
    if (this.type == "explotion") {
      this.velocity.y += gravity;
      this.opacity -= 0.5;
    } else this.opacity -= randomFloat(1, 3);

    if (this.y + this.r > ch) {
      this.velocity.y = -this.velocity.y * friction;
    }

    if (this.opacity <= 0) {
      if (this.type == "explotion")
        this.comet.explotions.splice(this.comet.explotions.indexOf(this), 1);
      else this.reset();
    }
  }

  reset() {
    this.opacity = Math.floor(randomFloat(25, 50));
    this.x = randomFloat(
      this.comet.x - this.r + this.comet.r,
      this.comet.x + this.r - this.comet.r
    );

    this.y = this.comet.y;
  }
}

class Comet {
  constructor({ x, y, r, color, velocity }) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;

    this.velocity = velocity;
    this.tails = this.generateTail();
    this.explotions = [];
  }

  generateTail() {
    const tails = [];

    for (let i = 0; i < 50; i++) {
      const radius = randomFloat(1, 3);

      tails.push(
        new Particles({
          x: randomFloat(this.x - this.r + radius, this.x + this.r - radius),
          y: randomFloat(this.y - this.r + radius, this.y + this.r - radius),
          r: radius,
          color: this.color,
          velocity: {
            x: -this.velocity.x,
            y: -this.velocity.y,
          },
          comet: this,
        })
      );
    }

    return tails;
  }

  draw() {
    c.save();
    c.beginPath();

    c.fillStyle = this.color;
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fill();

    c.closePath();
    c.restore();
  }

  update() {
    this.draw();

    this.tails.forEach((tail) => tail.update());

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.y + this.r >= ch && !this.exploded) {
      this.exploded = true;
      this.explode();
    } else {
      this.exploded = false;
    }

    this.explotions.forEach((explotion) => explotion.update());
  }

  explode() {
    const radius = randomFloat(2, 3);

    for (let i = 0; i < randomFloat(25, 35); i++) {
      this.explotions.push(
        new Particles({
          x: randomFloat(this.x - this.r + radius, this.x + this.r - radius),
          y: randomFloat(this.y - this.r + radius, this.y + this.r - radius),
          r: radius,
          color: this.color,
          velocity: {
            x: randomFloat(
              (this.velocity.y + this.velocity.x) * -1,
              this.velocity.y + this.velocity.x
            ),
            y: randomFloat((this.velocity.y + this.velocity.x) * -1, 0),
          },
          comet: this,
          type: "explotion",
        })
      );
    }

    this.x = randomFloat(0, cw);
    this.y = -this.r;
  }
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

for (let i = 0; i < 3; i++) {
  elements.push(
    new Comet({
      x: randomFloat(0, cw),
      y: randomFloat(-ch, 0),
      r: 10,
      color: `hsl(${randomFloat(0, 360)}, 50%, 50%)`,
      velocity: {
        x: randomFloat(-2, 2),
        y: randomFloat(6, 8),
      },
    })
  );
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(0,0,0,.25)";
  c.fillRect(0, 0, cw, ch);

  elements.forEach((e) => {
    e.update();
  });
}

animate();

window.addEventListener("resize", function () {
  cw = canvas.width = window.innerWidth;
  ch = canvas.height = window.innerHeight;
});
