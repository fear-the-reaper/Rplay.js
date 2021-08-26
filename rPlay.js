// rPlay.js
// getting the audio elements:
const body = document.querySelector('body');
const audios = document.querySelectorAll('audio');
// getting a random number between 0-3:
const getRandNumMusic = () => Math.floor(Math.random() * audios.length );
console.log(audios);
// getting the button and making the random playing element:
let clickCounter = 1;
const button = document.querySelector('button');
let musicNum = getRandNumMusic();
button.addEventListener('click', event => {
	clickCounter++;
	if (clickCounter % 2 === 0) {
		audios[musicNum].play();
		console.log('played music');
	} else if(clickCounter % 2 === 1){
		audios[musicNum].pause();
		audios[musicNum].load();
		musicNum = getRandNumMusic();
	} 
	setInterval(() => {
		if(audios[musicNum].ended){
			console.log("The current song has ended....playing new song!");
			audios[musicNum].load();
			musicNum = getRandNumMusic();
			console.log(musicNum);
			audios[musicNum].play();
		}	
		if (clickCounter % 2 === 0 && !(audios[musicNum].ended)) {
			let rgba1 = [Math.floor(Math.random() * (255 - 0) + 0), Math.floor(Math.random() * (255 - 0) + 0), 
			Math.floor(Math.random() * (255 - 0) + 0), Math.random()];
			let rgba2 = [Math.floor(Math.random() * (255 - 0) + 0), Math.floor(Math.random() * (255 - 0) + 0), 
			Math.floor(Math.random() * (255 - 0) + 0), Math.random()];
			let color = [rgba1, rgba2];
			body.style.background = `linear-gradient(to right, rgba(${color[0][0]}, ${color[0][1]}, ${color[0][2]}, ${color[0][3]}), 
			rgba(${color[1][0]}, ${color[1][1]}, ${color[1][2]}, ${color[1][3]}))`;
		}	
	}, 1000);
});