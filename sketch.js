let points = [[-3,0],[-3,1],[-4,2],[-5,1],[-6,2],[-5,3],[-4,3],[-4,4],[-5,3],[-6,4],[-5,5],[-4,5],[-3,4],[-2,5],[-3,6],[-3,7],[-1,10],[1,10],[3,11],[4,11],[6,10],[4,9],[3,9],[1,8],[3,9],[5,8],[5,6],[4,7],[3,7],[1,5],[2,4],[2,-1],[3,-3],[3,-5],[4,-5],[5,-4],[6,-4],[7,-5],[5,-7],[4,-7],[3,-6],[3,-7],[-5,-7],[-5,-6],[-4,-5],[-3,-5],[-4,-4],[-4,-3],[-3,-2],[-2,-2],[-3,0]]//list資料

function setup() {
  createCanvas(windowWidth, windowHeight);//設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}

function draw() {
	background(255);

	let scaleAmount = map(mouseX, 0, width, 0.5, 2.0); // 計算放大縮小的比例
scale(scaleAmount); // 進行放大縮小的變換

let offsetX = map(mouseX, 0, width, -30, 50); // 計算平移的水平距離
let offsetY = map(mouseY, 0, height, -30, 50); // 計算平移的垂直距離
translate(offsetX, offsetY); // 進行平移的變換

	textSize(30)  //文字大小
	fill(0, 102, 153);  //設定顏色
	text("淡江大學教科系",300,200)  //顯示文字
	text("兔年行大運",400,250)  
	translate(width/2, height/2);
	scale(1, -1);//上下翻轉

	for (let i = 1; i <= 5; i++) {
	  push(); // 儲存當前畫布狀態
	  scale(i/5); // 設定縮放比例
	  translate(-5 + 15*i, 0); // 設定位置
	  strokeWeight(5); //框線粗細
	  for (let j = 0; j < points.length-1; j++) {
		let from = color(255,153,153);
		let to = color(102,178,255);
		stroke(lerpColor(from, to, j/points.length));
		line(points[j][0], points[j][1], points[j+1][0], points[j+1][1]);
	  }
	  let from = color(255,153,153);
	  let to = color(102,178,255);
	  stroke(lerpColor(from, to, (points.length-1)/points.length));
	  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);
	  pop(); // 恢復畫布狀態


	}
  }