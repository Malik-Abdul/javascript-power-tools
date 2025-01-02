// const credits = ((num) => {
//   const playGame = () => {
//     if (num > 0) {
//       console.log("Can play more");
//       num--;
//     } else {
//       console.log("No more Credit");
//     }
//   };
//   return playGame;
// })(3);

// credits();
// credits();
// credits();
// credits();
// credits();

const checkCredits = (credits) => {
  return function () {
    if (credits > 0) {
      console.log("Can play more..");
      credits--;
    } else {
      console.log("No more credits");
    }
  };
};
const game = checkCredits(5);
game();
game();
game();
game();
game();
game();
