// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgImage = new Image();
bgImage.src = "images/background.png";

// Hero image
var heroImage = new Image();
heroImage.src = "images/hero.png";

// Monster image
var monsterImage = new Image();
monsterImage.src = "images/monster.png";

// Game objects
var hero = {
	speed: 10 // movement in pixels per second
};
var monster = {};
var tower = {
	shootingSpeed: 256 // movement in pixels per second
};

var monstersCaught = 0;

// Handle keyboard controls
var keysDown = {};

// Reset the game when the player catches a monster
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};
var keyListener = function(e){
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed;
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed;
	}

	// Are they touching?
	if (hero.x <= (monster.x + 32) && monster.x <= (hero.x + 32) && hero.y <= (monster.y + 32) && monster.y <= (hero.y + 32)){
		++monstersCaught;
		reset();
	}
	render();
}

// Draw everything
var render = function () {
	ctx.drawImage(bgImage, 0, 0);
	ctx.drawImage(heroImage, hero.x, hero.y);
	ctx.drawImage(monsterImage, monster.x, monster.y);
	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);
};

addEventListener("keydown", function(e){
	keysDown[e.keyCode] = true;
	keyListener()
});

addEventListener("keyup", function(e){
	delete keysDown[e.keyCode];
	keyListener();
});
render();
reset();


