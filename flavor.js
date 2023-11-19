function countFlavors() {
    var flavorInput = prompt("Enter a list of flavors separated by commas:");
  
    // Check if the user entered flavors
    if (flavorInput !== null) {
      // Split the input into an array of flavors
      var flavors = flavorInput.split(',');
      console.log(flavors);
      var flavorCount = {};
  
      
      for (var i = 0; i < flavors.length; i++) {
        var flavor = flavors[i].trim();
        if (flavor !== '') {
          if (flavorCount[flavor]===undefined) {
            flavorCount[flavor] = 1; 
          } else {
            flavorCount[flavor]++;
          }
        }
      }
  
      displayResult(flavorCount);
    } 
  }
  
  function displayResult(flavorCount) {
    var resultString = "Flavor Count:\n";
    for (var flavor in flavorCount) {
      resultString += flavor + ": " + flavorCount[flavor] + " times\n";
    }
    alert(resultString);
  }
  
  