function process(fn, success, failure, time) {
  let startTime = Date.now();
  fn();
  let endTime = Date.now();
  if (endTime - startTime <= time) {
    success();
  } else {
    failure();
  }
}

function proceed() {
  for (let i = 0; i < 1000; i++) {
    console.log("In proceed: ", i);
  } // Dummy loop to add delay
}

function success() {
  console.log("In success");
}
function failure() {
  console.log("In failure");
}

process(proceed, success, failure, 10);
