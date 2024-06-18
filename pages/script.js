// increment and decrement button for scores
function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue  + click);
    totalClicks.innerText = sumvalue
    // avoid negative number
    if (sumvalue < 0) {
      totalClicks.innerText = 0;
    }
    //reset value
    if (click === 0) {
      totalClicks.innerText = 0;
    }
}
//FIRST ROUND
document.getElementById('initialImage').addEventListener('click', function() {
  // Create a new image element
  var newImage = document.createElement('img');
  newImage.src = "../step_2/ball.png"; // Path to the new image
  newImage.width = 300;

  // Append the new image to the container
  document.getElementById('newImageContainer').appendChild(newImage);

});

//SECOND ROUND
document.getElementById('ThirdImage').addEventListener('click', function() {
  // Create a new image element
  var ThirdImage = document.createElement('img');
  ThirdImage.src = "../step_2/ball.png"; // Path to the new image
  ThirdImage.width = 300;

  // Append the new image to the container
  document.getElementById('ThirdImageContainer').appendChild(ThirdImage);
});

//THIRD ROUND
document.getElementById('secondImage').addEventListener('click', function() {
  // Create a new image element
  var secondImage = document.createElement('img');
  secondImage.src = "../step_2/ball.png"; // Path to the new image
  secondImageImage.width = 300;

  // Append the new image to the container
  document.getElementById('secondImageContainer').appendChild(secondImage);
});
