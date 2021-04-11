var SolutionArray = [
"Mexico",
"China",
"India",
"Peru",
"China",
"Yemen",
"Greece",
"Germany",
"China",
"Pakistan",
"China",
"United States of America",
"China",
"Guatemala",
"India",
"Netherlands",
"United Kingdom",
"United States of America",
"France",
"Pakistan",
"Hungary",
"Egypt",
"United Kingdom",
"United States of America",
"Egypt",
"Iraq",
"India",
"Lebanon",
"India",
"Germany",
"United Kingdom",
"France",
"Japan",
"United Kingdom",
"United States of America",
"Russia",
"Russia",
"Italy",
"Italy",
"Greece",
"Germany"
];

var QuestionArray = [
  "Where did the Chili Pepper originate?",
  "Where was Pasta invented?",
  "Where were Chickens first domesticated?",
  "Where did Potatoes originate?",
  "Where was Salt first cultivated?",
  "Where were Coffee beans first used to make Coffee?",
  "Where were Magnets first discovered?",
  "Where was Protestantism Founded?",
  "Where were Candles invented?",
  "Where were Buttons invented?",
  "Where was Paper invented?",
  "Where were Headphones invented?",
  "Where was the Toothbrush invented?",
  "Where was the Syringe invented?",
  "Where was Chess invented?",
  "Where was the first-known Telescope invented?",
  "Where was the Fire-Extinguisher patented?",
  "Where was the first Stop-Sign created?",
  "Where was the Screwdriver invented?",
  "Where was the Cow domesticated?",
  "Where was the Rubik's Cube invented?",
  "Where were Umbrellas invented?",
  "Where did Baseball originate?",
  "Where was Basketball invented?",
  "Where were Scissors invented?",
  "Which country created the first Saddle?",
  "Where was steel first produced?",
  "Where were Coins first used?",
  "Which civilization first conceptualized the Numerical Zero? (0)",
  "Where was the First Newspaper printed?",
  "Where was the sewing Machine invented?",
  "Where did the Canning process first originate?",
  "Which country created the first Pocket Calculator?",
  "Where was the Lawnmower first invented?",
  "Which country created the first Atomic Bomb?",
  "Where was Powdered Milk invented?",
  "Which country invented the Space Toilet?",
  "Where was the Arduino Microcontroller created?",
  "Where was the Piano invented?",
  "Where were the first Olympic Games held?",
  "Where was the Printing Press invented?"
];

var funFacts = [
  "All variety of Peppers originated in South America",
  "Marco Polo brough pasta back to Italy from china. The the proccess was industriallized and made world famous.",
  "All chickens are descendants of the Red Jungle Fowl.",
  "I swear its Idaho.",
  "The salt was harvested off of Lake Yungcheng in 6000 BC",
  "All coffee beans originated in Ethiopia, but a trader from Yemen was the first to drink them.",
  "A sheep herder noticed that the nails from his shoes stuck to the ground beneath him.",
  "Freedom of conscience had its limits.",
  "The first candles were made of whale fat.",
  "Buttons weren't designed to fasten clothes, but rather as a status symbol.",
  "Chinese invented paper from hemp. They later began to use tree bark, bamboo, and other plant fibers.",
  "Utah in 1910",
  "Life before 1400 must have smelled.",
  "The first syringe was made from a hollow bird bone.",
  "The horses were originally elephants.",
  "The first telescopes were used by sea merchants and the military",
  "The fire extinguisher was made from copper, held 3 gallons of extinguishing agent potassium carbonate solution (dry chemical), and contained compressed air.",
  "The original design for the stop-sign was black and white.",
  "They Were Invented During the Middle Ages.",
  "All cows are descendants from the now extinct 'Auroch'.",
  "The world record for solving a Rubik's Cube is 4.22 seconds.",
  "The word umbrella comes from the Latin word 'umbros' which means shade or shadow.",
  "Baseball fans eat enough hotdogs that can stretch from Dodger Stadium to Wrigley Field.",
  "The YMCA was the birthplace of Basketball.",
  "Most scissors are actually made to work best for people who are right-handed. Special reversed scissors for left-handed users are available.",
  "The first saddle is believed to have been invented in 365 AD by the Sarmations.",
  "Steel was first produced around 400 BC",
  "According to Herdotous (I, 94), coins were first minted by the Lydians, while Aristotle claims that the first coins were minted by Demodike of Kyrme, the wife of King Midas of Phrygia.",
  "The Myans also developed a concept for zero independantly of India in 3 BC",
  "The first paper was printed in 1690",
  "Sewing machines were an invention of the industrial revolution that made it possible to sew faster than people could sew by hand.",
  "Canned fruits and vegetables have the same nutrients as fresh and frozen options.",
  "abicus 2.0",
  "Beard Budding got the original idea from watching a cutting cylinder at a local cloth mill.",
  "Project Manhattan was considered the very first application of Project Managment.",
  "Powdered milk has the same nutrition as fresh milk.",
  "The astronauts fasten themselves to the toilet, so that, their body won't float away.",
  "Arduino is an open-source electronics platform based on easy-to-use hardware and software.",
  "The word piano is the shortened version of the word pianoforte, which means soft (piano) and loud (forte).",
  "he first Olympic Games took place in the 8th century B.C. in Olympia, Greece.",
  "The printing press was invented by German inventor Johannes Gutenberg around 1439."
];

var strikes = 0;
var score = 0;
var randomNumber = Math.floor(Math.random() * QuestionArray.length);
document.getElementById("currQuest").innerHTML = QuestionArray[randomNumber];


var right = document.getElementById("right");
var wrong = document.getElementById("wrong");

right.volume = 0.2;
wrong.volume = 0.2;

document.getElementById("displayGuess").addEventListener("click", function ()
{
  document.getElementById("correct").innerHTML = "";
  var previousQuestion = randomNumber;
  randomNumber = Math.floor(Math.random() * QuestionArray.length);
  
  document.getElementById("currQuest").innerHTML = QuestionArray[randomNumber];

  var guess = document.getElementById("info").innerHTML;
  if (guess == SolutionArray[previousQuestion])
  {
    right.play();
    score = score + 1;
    document.getElementById("correct").innerHTML = "That is Correct!";
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("correct").style.color = "black";
    document.getElementById("funfact").innerHTML = funFacts[previousQuestion];
  }
  else
  {
    wrong.play();
    strikes = strikes + 1
    document.getElementById("strike").innerHTML = "Strikes: " + strikes + "/3";
    document.getElementById("correct").innerHTML = "Sorry, the correct answer is " + SolutionArray[previousQuestion];
    document.getElementById("correct").style.color = "red";
    document.getElementById("funfact").innerHTML = " ";
  }

  
  if (strikes >= 3)
  {
    score = 0;
    strikes = 0;
    document.getElementById("score").innerHTML = "Score: 0";
    document.getElementById("strike").innerHTML = "Strike: 0/3";
    document.getElementById("correct").innerHTML = "Better luck next time";
  }

});
