/**
 * Object deconstructing questions
 * 1.
 * 8, 1846
 * 
 * 2.
 * [1846, 1659]
 * 
 * 3.
 * Alejandro, Purple
 * Melissa, Green
 * Undefined, Green
 * 
 * 
 * Array deconstructing
 * 1.
 * Maya, Marisa, Chi
 * 
 * 2.
 * console.log(raindrops); // ? "Raindrops on roses",
console.log(whiskers); // ? "whiskers on kittens",
console.log(aFewOfMyFavoriteThings); // ?"Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"

  3.
  [10, 30,20]
 */

  var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers;

  var arr = [1,2];
   [arr[0], arr[1]] = [arr[1], arr[0]];

   const raceResults = ([first, second, third, ...rest]) => ({first, second, third,rest}) 