//! Checking whether the image is vertical or horizontal
//? get image from document
const image = document.querySelector("#test_image");

//? image width and height
const imageWidth = image.clientWidth;
const imageHeight = image.clientHeight;

//? check width and height
if (imageWidth > imageHeight) {
  console.log("2 : ", "vertical");
} else {
  console.log("2 : ", "horizontal");
}

//! end
