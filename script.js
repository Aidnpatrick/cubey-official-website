function showInput() {
  let userInput = document.getElementById('userInput').value.toLowerCase();
  let library = ["stbg", "slime fighter", "cubey offical website", "facebook simulator", "gadgets", "secret docs", "random number bubble sorting"];
  
  let word_points = Array(library.length).fill(0);
  for (let i = 0; i < library.length; i++) {
    let word = library[i];

    
    for (let j = 0; j < word.length; j++) {
      if (word[j] === userInput[j]) {
        word_points[i]++;
      }
    }
  }
  
  console.log("\nAll data of searches(Don't mind this): \n");
  for (let i = 0; i < library.length; i++) {
    console.log("[" + library[i] + " : " + word_points[i] + "]" + "\n");
  }
  
  let maxPoints = Math.max(...word_points);
  let maxIndices = [];
  for (let i = 0; i < word_points.length; i++) {
    if (word_points[i] === maxPoints) {
      maxIndices.push(i);
    }
  }
  if (maxIndices.length > 0) {
    let maxIndex = maxIndices[0];
    window.location.href = "#" + (maxIndex + 1);
    console.log(library[maxIndex]);
    console.log(maxIndex + 1);
  }

}
  
function checkEnter(event) {
  if (event.key === "Enter") {
    showInput();
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const disclaimer = document.getElementById('disclaimer');
  const closee = document.getElementById("closee");
  closee.addEventListener("click", () => {
    disclaimer.style.display = 'none';
  })
});