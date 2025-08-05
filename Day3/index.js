const image = document.getElementById("image");
const para = document.getElementById("para");
const userName = document.querySelector(".username");

const arrayOfObjects = [
  {
    image1: "./assets/image1.avif",
    para1:
      "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels",
    userName1: "Venkatesh",
  },
  {
    image1: "./assets/image2.avif",
    para1:
      "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    userName1: "Raina",
  },
  {
    image1: "./assets/image3.avif",
    para1:
      " This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
    userName1: "chandu",
  },
  {
    image1: "./assets/image4.avif",
    para1:
      "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    userName1: "Raju",
  },
];

let currentEle = 0;

function display() {
  const { image1, para1, userName1 } = arrayOfObjects[currentEle];
  image.src = image1;
  para.innerText = para1;
  userName.innerText = userName1;
  currentEle++;
  if (currentEle >= arrayOfObjects.length) {
    currentEle = 0;
  }
  setTimeout(display, 2000);
}
display();
