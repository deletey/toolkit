let capture;
let imgFilter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
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

    if(filter != 0) {
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
    } else {
      return capture;
    }

    return image;
}