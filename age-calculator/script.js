// max date today karne ke liye
const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

// to attach event listener
  .getElementById("calculate-btn")
  .addEventListener("click", calculateAge);


function calculateAge() {
  const result = document.getElementById("result");

  if (!userInput.value) {
    result.textContent = "Please select a valid date.";
    return;
  }

  const birthDate = new Date(userInput.value);
  const today = new Date();

  const ageInMilliseconds = today - birthDate;

  if (ageInMilliseconds < 0) {
    result.textContent = "Future dates are not allowed.";
    return;
  }

  const years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    months += 12;
  }

  result.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
}
