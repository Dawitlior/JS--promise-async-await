//שלד בסיסי

function getPromise() {
  return new Promise((resolve, reject) => {
    btn_1.disabled = false;
    loading.innerHTML = "<img style='width:20vw' src='giphy.webp' />";

    setTimeout(() => {
      const rnd = Math.floor(Math.random() * 4);
      if (rnd >= 3) {
        resolve("hello");
      }
      reject(rnd);
    });
  }, 3000);
}

function playFunction() {
  getPromise()
    .then((date) => {
      console.log(date);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loading.innerHTML = "";
      btn.disabled = true;
    });
}
//--------------------------------------------------------------------//

1 - 2;
function getThePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const time = new Date("12:34:20 10/10/2020");
      if (time > 11) {
        resolve((id_h1.innerText = "good morning"));
      }
      reject((id_h1.innerText = "good after none"));
    });
  }, 3000);
}
getThePromise()
  .then((positive) => {
    id_h1.innerText = "good morning";
    positive;
  })
  .catch((negative) => {
    negative;
  });



3 - 4;

let numbs = [2, 4];
function getPromiseAndArguments(numbs) {
  return new Promise((resolve, reject) => {
    numbs.forEach((item) => {
      if (numbs[1] % numbs[0]) {
        resolve("yes");
      }
      reject("no");
    });
  });
}
getPromiseAndArguments()
  .then((positive1) => {
    id_h2.innerText = "yes";
    positive1;
  })
  .catch((positive2) => {
    id_h2.innerText = "no";
    positive2;
  });



5 - 6;

let arrayNumbers = [14, 2, 66, 5, 34, 12, 4, 3];
let onlyNum = 12;
function getPromiseAndCheckIfExist(onlyNum, arrayNumbers) {
  return new Promise((resolve, reject) => {
    arrayNumbers.forEach((key) => {
      if ([key] == onlyNum) {
        resolve("yes");
      }
      reject("no");
    });
  });
}
getPromiseAndCheckIfExist()
  .then((positive3) => {
    myP.innerText = "yes";
    positive3;
  })
  .catch((negative3) => {
    myP.innerText = "no";
    negative3;
  });



async function getMovies() {
  try {
    btn.disabled = false;
    loading.innerHTML = "<img style='width:20vw' src='giphy.webp' />";
    await fetch("").then((data) => console.log(data));
  } catch (err) {
  } finally {
    loading.innerHTML = "";
    btn.disabled = false;
  }
}



async function getSomeData() {
  try {
    btn_2.disabled = true;
    loading.innerHTML = "<img style='width:20vw' src='giphy.webp' />";
    await fetch("https://moviesmern.herokuapp.com/movies/all").then((data) =>
      console.log(data)
    );
  } catch (err) {
    alert(err);
  } finally {
    loading.innerHTML = "";
    btn_2.disabled = false;
  }
}
getSomeData();



async function getAnotherData() {
  try {
    btn_3.disabled = true;
    loading.innerHTML = "<img style='width:20vw' src='giphy.webp' />";
    await fetch("https://cat-fact.herokuapp.com/facts").then((someData) =>
      console.log(someData)
    );
  } catch (someErr) {
    alert(someErr);
  } finally {
    btn_3.disabled = false;
    loading.innerHTML = "";
  }
}
