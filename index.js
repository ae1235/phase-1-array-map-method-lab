const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function capitalizeTitles(tutorials) {

  const titlesToStrings = tutorials.toString().split(' ');

  const transformToCaps = titlesToStrings.map(tutorial => tutorial[0].toUpperCase() + tutorial.slice(1));
  const newTitles = transformToCaps.join(' ');
  return newTitles;
};

const titleCased = () => {
  return tutorials.map(capitalizeTitles)
}

titleCased(); 

