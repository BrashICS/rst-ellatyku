document.getElementById('initialImage').addEventListener('click', function() {
  // Create a new image element
  var newImage = document.createElement('img');
  newImage.src = "../step_2/ball.png"; // Path to the new image
  newImage.width = 300;

  // Append the new image to the container
  document.getElementById('newImageContainer').appendChild(newImage);
});

var myVariable = 0
function Clearbutton(){
  myVariable= 0;
  document.getElementById('display').textContent = "Variable Value " + myVariable;
  document.getElementById('myButton').addEventListener('click' , Clearbutton)
}

document.getElementById('ThirdImage').addEventListener('click', function() {
  // Create a new image element
  var ThirdImage = document.createElement('img');
  ThirdImage.src = "../step_2/ball.png"; // Path to the new image
  ThirdImage.width = 300;

  // Append the new image to the container
  document.getElementById('ThirdImageContainer').appendChild(ThirdImage);
});
