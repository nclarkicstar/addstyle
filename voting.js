function checkVotingEligibility(age) {
    if (age >= 18) {
      return "You are eligible to vote!";
    } else {
      return "Sorry, you are not eligible to vote yet.";
    }
  }
  
  // Testing the function with different ages
  console.log(checkVotingEligibility(16)); // Output: "Sorry, you are not eligible to vote yet."
  console.log(checkVotingEligibility(18)); // Output: "You are eligible to vote!"
  console.log(checkVotingEligibility(25)); // Output: "You are eligible to vote!"
  