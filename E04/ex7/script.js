class Ball {
    constructor(color) {
        this.ball = document.createElement("div");
        this.ball.classList.add("ball");
        this.ball.style.backgroundColor = color;
        
        // Random start position
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;

        // Random movement speed
        this.dx = (Math.random() - 0.5) * 4;
        this.dy = (Math.random() - 0.5) * 4;

        // Append ball to document
        document.body.appendChild(this.ball);
        this.updatePosition();
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;

        // Bounce off the edges
        if (this.x <= 0 || this.x + 30 >= window.innerWidth) {
            this.dx *= -1;
        }
        if (this.y <= 0 || this.y + 30 >= window.innerHeight) {
            this.dy *= -1;
        }

        this.updatePosition();
    }

    updatePosition() {
        this.ball.style.left = `${this.x}px`;
        this.ball.style.top = `${this.y}px`;
    }
}

// Test with one ball first
console.log("Creating one ball...");
const ball1 = new Ball("green");

// Animate one ball
function animateOneBall() {
    ball1.move();
    requestAnimationFrame(animateOneBall);
}
animateOneBall();

// Multiple balls (100)
console.log("Creating multiple balls...");
const balls = [];
const colors = ["red", "green", "blue", "purple", "pink", "gray", "black", "lime"];

for (let i = 0; i < 100; i++) {
    balls.push(new Ball(colors[Math.floor(Math.random() * colors.length)]));
}

// Animate all balls
function animateMultipleBalls() {
    balls.forEach(ball => ball.move());
    requestAnimationFrame(animateMultipleBalls);
}
animateMultipleBalls();
