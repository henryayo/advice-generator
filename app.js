const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  document.getElementById("id-number").innerHTML = `Advice #${data.slip.id}`;
  document.getElementById('text').innerHTML = `${data.slip.advice}`;
};

const diceBtn = document.getElementById('dice-button');

diceBtn.addEventListener('click', fetchAdvice);

fetchAdvice();
