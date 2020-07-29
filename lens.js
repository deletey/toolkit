let capture;
let imgFilter = 0;

function setup() {
  capture = createCapture(VIDEO);
  capture.hide();

  let canvas = createCanvas(capture.width, capture.height);
  canvas.style('height', '100vh');
  canvas.style('width', '100vw');
  canvas.style('object-fit', 'cover');
}

function draw() {
  background(255);

  capture.loadPixels();

  let img = getFiltered();

  image(img, 0, 0, width, height);
}

function getFiltered() {
    let image = createImage(width, height);
    image.copy(capture, 0, 0, width, height, 0, 0, width, height);

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