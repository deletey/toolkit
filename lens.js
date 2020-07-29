let capture;
let imgFilter = 0;

function setup() {
  capture = createCapture({
    video: {
        frameRate: 30,
        facingMode: "environment"
    }
  });
  capture.hide();

  document.getElementById('filter_blue').innerHTML = `${capture.width}x${capture.height}`;
  let canvas = createCanvas(capture.width, capture.height);
  canvas.style('height', 'auto')
  canvas.style('width', '100%')
}

function draw() {
  background(255);

  capture.loadPixels();

  let img = getFiltered();

  image(img, 0, 0, width, height);
}

function getFiltered() {
    let image = createImage(capture.width, capture.height);
    image.copy(capture, 0, 0, capture.width, capture.height, 0, 0, capture.width, capture.height);

    if(imgFilter != 0) {
      image.loadPixels();
      for(let i = 0; i < image.pixels.length; i++) {
        if(imgFilter == 1 && i % 4 == 0) {
             
        } else if(imgFilter == 2 && i % 4 == 1) {
          
        } else if(imgFilter == 3 && i % 4 == 2) {
          
        } else if(i % 4 != 3) {
          image.pixels[i] = 0;
        }
      }

      image.updatePixels();
      return image;
    } else {
      return capture;
    }
}