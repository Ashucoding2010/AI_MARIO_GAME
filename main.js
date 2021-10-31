function preload() {
	world_start = loadSound("world_start.wav");
	mario_gameover = loadSound("gameover.wav")
	mario_jump = loadSound("jump.wav")
	mario_coins = loadSound("coin.wav")
	mario_kick = loadSound("kick.wav")
	mario_die = loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");

	posenet = ml5.poseNet(video, modelloaded)
	posenet.on('pose', gotresults)


}

function modelloaded() {

	console.log("model loaded successfully")

}
//results is an array as it stores 17 body parts
function gotresults(results) {

	if (results.length > 0) {

		console.log(results)
		nose_x=results[0].pose.nose.x
        nose_y=results[0].pose.nose.y

	}   

}

function draw() {
	game()
}