// rPlay.js:

// getting a random number between 0-3:
const getRandNumMusic = () => Math.floor(Math.random() * (4 - 0) + 0);
// getting a random number between 0-255:
// const getRandNumBgCol = () => {
// 	let rgba1 = [Math.floor(Math.random() * (255 - 0) + 0), Math.floor(Math.random() * (255 - 0) + 0), 
// 	Math.floor(Math.random() * (255 - 0) + 0), Math.random()];
// 	let rgba2 = [Math.floor(Math.random() * (255 - 0) + 0), Math.floor(Math.random() * (255 - 0) + 0), 
// 	Math.floor(Math.random() * (255 - 0) + 0), Math.random()];
// 	return [rgba1, rgba2]
// };
// console.log(getRandNumBgCol());
// // The background color visualizer:
// const body = document.querySelector('body');
// const bgVisualizer = isPlay => {
// 	while(isPlay){
// 		let bgNums = getRandNumBgCol();
// 		body.style.background = `linear-gradient(to right, rgba(${bgNums[0][0]}, ${bgNums[0][1]}, ${bgNums[0][2]}, ${bgNums[0][3]}), 
// 		rgba(${bgNums[1][0]}, ${bgNums[1][1]}, ${bgNums[1][2]}, ${bgNums[1][3]}))`;
// 	}
// };

// getting the audio elements:
const body = document.querySelector('body');
const audios = document.querySelectorAll('audio');
// getting the button and making the random playing element:
let clickCounter = 1;
const button = document.querySelector('button');
let musicNum = getRandNumMusic();
button.addEventListener('click', event => {
	// debugger;
	let rgba1 = [Math.floor(Math.random() * (255 - 0) + 0), Math.floor(Math.random() * (255 - 0) + 0), 
	Math.floor(Math.random() * (255 - 0) + 0), Math.random()];
	let rgba2 = [Math.floor(Math.random() * (255 - 0) + 0), Math.floor(Math.random() * (255 - 0) + 0), 
	Math.floor(Math.random() * (255 - 0) + 0), Math.random()];
	let color = [rgba1, rgba2];
	clickCounter++;
	if (clickCounter % 2 === 0) {
		audios[musicNum].play();
		console.log('played music');
		// let bgNums = getRandNumBgCol();
		body.style.background = `linear-gradient(to right, rgba(${color[0][0]}, ${color[0][1]}, ${color[0][2]}, ${color[0][3]}), 
		rgba(${color[1][0]}, ${color[1][1]}, ${color[1][2]}, ${color[1][3]}))`;
	} else if(clickCounter % 2 === 1){
		audios[musicNum].pause();
		// bgVisualizer(false);
		audios[musicNum].load();
		musicNum = getRandNumMusic();
	}
});



