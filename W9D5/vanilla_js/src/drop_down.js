
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(){
  let dogsArray = Object.entries(dogs);
  let completedDogs = [];
  for(let i = 0; i < dogsArray.length; i++) {
    let dog = document.createElement("a");
    dog.innerHTML = dogsArray[i][0];
    dog.href = dogsArray[i][1];

    let dogListItem = document.createElement("li");
    // dogListItem.className = "dog-link"; // Doesn't actually add the class
    dogListItem.classList = "dog-link"; // this does add the class

    dogListItem.append(dog);
    completedDogs.push(dogListItem);

  }
  
  return completedDogs;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  

  // returns an array of HTML elements with the class of "drop-down-dog-list"
  // let list = document.getElementsByClassName("drop-down-dog-list");
  // let list = document.querySelectorAll(".drop-down-dog-list");


  // elem.querySelector(css) => returns the first element for the given CSS selector.
  let list = document.querySelector(".drop-down-dog-list");
  // debugger;
  // document.getElementsByClassName("example");
  for(let i = 0; i < dogLinks.length; i++) {
    list.append(dogLinks[i]);
  }

  // .style is for css properties for the HTML element
  //list.style.display = "none";
}

attachDogLinks();

function handleEnter() {

}

function handleLeave() {
  let dogArr = document.querySelectorAll(".dog-link");
  for (let i = 0; i < dogArr.length; i++) {
    // dogArr[i].remove(".dog-link");
    dogArr[i].remove();
  }
}

let dogList = document.querySelector(".drop-down-dog-list");
dogList.style.backgroundColor="red";
//dogList.style.width="150px";
// dogList.style.position="absolute";
//dogList.style.textAlign ="center";
//dogList.style.alignItems="center";
// dogList.style.alignContent="center";
// Hide it by default
let dogArray = document.querySelectorAll(".dog-link");
for(let i =0; i<dogArray.length; i++){
  dogArray[i].style.display="none";
}

dogList.addEventListener('mouseleave', e => {
  let dogArr = document.querySelectorAll(".dog-link");
  for(let i =0; i<dogArr.length; i++){
    // if you do it the classList.remove() way, you need to add the css styling in the css file.
    //dogArr[i].classList.remove("dog-link");
    dogArr[i].style.display="none";
  }
});

// dogList.addEventListener('mouseenter', handleLeave) 
dogList.addEventListener('mouseenter', e => {
  let dogArr = document.querySelectorAll(".dog-link");
  for(let i =0; i<dogArr.length; i++){
    //dogArr[i].classList.add("dog-link");
    dogArr[i].style.display="block";
  }
});

// console.log(Object.entries(dogs));
// console.log(Object.entries(dogs) instanceof Array);
// console.log(Object.entries(dogs)[0]);