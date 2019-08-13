// // rVisual
// // getting a random number between 0-255:
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
// let clickCounter2 = 1;
// const button1 = document.querySelector('button');
// button1.addEventListener('click', event => {
// 	debugger;
// 	clickCounter2++;
// 	if (clickCounter2 % 2 === 0) {
// 		// audios[musicNum].play();
// 		bgVisualizer(true);
// 	} else if(clickCounter2 % 2 === 1){
// 		// audios[musicNum].pause();
// 		bgVisualizer(false);
// 		// audios[musicNum].load();
// 		// musicNum = getRandNumMusic();
// 	}
// });