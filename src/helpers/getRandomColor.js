const randomColorMap = {
  green: "#44c1b3",
  orange: "#fe914e",
  red: "#c7293b",
};

function getRandomColor() {
  const keys = Object.keys(randomColorMap);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return randomColorMap[keys[randomIndex]];
}

export default getRandomColor;
