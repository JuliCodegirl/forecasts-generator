/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const button = document.querySelector(".forecast-btn");
const container = document.querySelector('.container');
const currentPrediction = document.querySelector('.current-forecast');
const predictionText = document.querySelector('.current-forecast h1');
const predictionProbabilite = document.querySelector('.current-forecast p');

const prediction1 = "Вас ждет немало происшествий и интересных путешествий.";
const prediction2 = "Очень скоро от друзей жди прекрасных новостей.";
const prediction3 = "В огороде клад найдешь, на Канарах отдохнешь.";
const prediction4 = "Будет у тебя всегда в доме вкусная еда.";
const prediction5 = "Здоровье ваше крепче станет, вторая молодость настанет.";
const prediction6 = "Любовь украсит ваши дни, и станут яркими они.";
const prediction7 = "Будешь бить весь год баклуши, есть икру с фруктовым пуншем.";

function getRandomPrediction() {
  return Math.floor((Math.random() * (8 - 1))) + 1;
}

function writeRandomPrediction(prediction, probability) {
  switch(getRandomPrediction()) {
    case 1:
      prediction = prediction1;
      break;
    case 2:
      prediction = prediction2;
      break;
    case 3:
      prediction = prediction3;
      break;
    case 4:
      prediction = prediction4;
      break;
    case 5:
      prediction = prediction5;
      break;
    case 6:
      prediction = prediction6;
      break;
    case 7:
      prediction = prediction7;
      break;  
  }
  predictionText.textContent = prediction;

  let probability = Math.floor(Math.random() * 100);
  predictionProbabilite.textContent = `${probability}%`;

  currentPrediction.append(predictionText, predictionProbabilite);

  return currentPrediction;
}


button.addEventListener('click', writeRandomPrediction ,{

});

const predictionTemplate = document.getElementById('forecast-item');

function makePredictionByTemplate(prediction, probability) {
  const nextPrediction = predictionTemplate.content.cloneNode(true);

  nextPrediction.querySelector('h3').textContent = prediction;
  nextPrediction.querySelector('p').textContent = probability;

  return nextPrediction;
}

const newPrediction = makePredictionByTemplate(prediction, probability);
container.append(newPrediction);