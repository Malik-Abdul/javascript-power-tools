const credits = ((num) => {
  const playGame = () => {
    if (num > 0) {
      console.log("Can play more");
      num--;
    } else {
      console.log("No more Credit");
    }
  };
  return playGame;
})(3);

credits();
credits();
credits();
credits();
credits();
