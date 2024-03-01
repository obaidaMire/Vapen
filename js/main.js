let menu = document.querySelector(".header-menu");
let mainMenu = document.querySelector(".menu");
let visionP = document.querySelectorAll(".vision-p");
let lis = document.querySelectorAll(".menu ul li");
let links = document.querySelectorAll(".link");
let scrollbar = Scrollbar.init(document.querySelector("body"));

document.addEventListener("DOMContentLoaded", function () {
  // Sample product data
  const products = [
    {
      index: "1",
      name: "The Thor",
      colors: ["black", "green"],
      price: "$11,250.00",
      color: "Colors:",
      image: "images/thor-safe_2000x.webp",
      disc: "THE THOR The THOR provides the best available Security and Ease of Access for your weapons. The patented locking mechanism is located in the base, inaccessible even for top safe crackers to defeat.",
      images: [
        "images/thor-safe_2000x.webp",
        "images/closed_2000x.webp",
        "images/side-view_2000x.webp",
      ],
    },
    {
      index: "2",
      name: "QVRT",
      colors: ["black"],
      price: "$3,650.00",
      color: "Colors:",
      image: "images/QVRt-product-1_2000x.webp",
      disc: "The QVRt or Quiver, is specifically designed for high security, storage and fast access. Our compact design allows you to place the QVRt in almost any location and have access to your weapons in under 2 seconds.",
      images: [
        "images/QVRt-product-1_2000x.webp",
        "images/qvrt-2_2000x.webp",
        "images/qvrt-3_2000x.webp",

      ],
    },
    {
      index: "3",
      name: "QVR (QUIVER)",
      colors: ["black", "titanium", "white"],
      price: "$2,650.00",
      color: "Colors:",
      image: "images/QVR-ICON_2000x.webp",
      disc: "The QVR or Quiver, is specifically designed for high security and fast access. Our design allows you to place the QVR in almost any location and have access to your weapon in under 2 seconds.",
      images: [
        "images/QVR-ICON_2000x.webp",
        "images/QVR-product_2000x.webp",
        "images/Squareqvr_2000x.webp",
      ],
    },

    // Add more products as needed
  ];

  let currentIndex = 0;
  const totalProducts = products.length;

  function updateProductInfo(index) {
    const product = products[index];



    // Update product information
    document.querySelector(".product-name h1").innerText = product.name;
    const colorContainer = document.querySelector(".colors .color-cyrcles");
    colorContainer.innerHTML = ""; // Clear existing colors

    for (const color of product.colors) {
      const colorDiv = document.createElement("div");
      colorDiv.className = color.toLowerCase();
      colorContainer.appendChild(colorDiv);
    }
    document.querySelector(
      ".price-info p"
    ).innerText = `Price: ${product.price}`;
    document.querySelector(".product-info p").innerText = product.color;
    document.querySelector(".img-container img").src = product.image;
    document.querySelector(".disc").innerText = product.disc;
    document.querySelector(".counter .count .odometer").innerText =
      product.index;

    // Update images dynamically
    const imagesContainer = document.querySelector(".images-container");
    imagesContainer.innerHTML = ""; // Clear existing images

    for (const imageSrc of product.images) {
      const imageDiv = document.createElement("div");
      imageDiv.className = "image1";
      const imgElement = document.createElement("img");
      imgElement.src = imageSrc;
      imgElement.alt = "";
      imageDiv.appendChild(imgElement);
      imagesContainer.appendChild(imageDiv);
      imgElement.addEventListener("click", function () {
        document.querySelector(".img-container img").src = imageSrc;
      });
    }
    
  }

  function showNextProduct() {

      currentIndex = (currentIndex + 1) % totalProducts;
      updateProductInfo(currentIndex);

  }

  function showPreviousProduct() {
    currentIndex = (currentIndex - 1 + totalProducts) % totalProducts;
    updateProductInfo(currentIndex);
  }

  // Event listeners for arrow clicks
  document
    .querySelector(".arrows .left")
    .addEventListener("click", showPreviousProduct);
  document
    .querySelector(".arrows .right")
    .addEventListener("click", showNextProduct);

  // Initial product display
  updateProductInfo(currentIndex);
});


document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll('.firstname-input input');

  inputs.forEach(input => {
    input.addEventListener('focus', function () {
      const label = this.parentElement.querySelector('.first-name-label');
      label.style.display = 'none';
    });

    input.addEventListener('blur', function () {
      const label = this.parentElement.querySelector('.first-name-label');
      label.style.display = this.value === '' ? 'inline' : 'none';
    });
  });
});

menu.onclick = function () {
  mainMenu.classList.toggle("showin");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle("text-focus-in");
  }
};

let spans = [];

visionP.forEach((par) => {
  let htmlString = "";
  let pArray = par.textContent.split(" ");
  for (let i = 0; i < pArray.length; i++) {
    htmlString += `<span>${pArray[i]} </span>`;
  }

  par.innerHTML = htmlString;
});

spans = [...document.querySelectorAll(".vision-content span")];

function revealSpans() {
  for (let i = 0; i < spans.length; i++) {
    if (
      spans[i].parentElement.getBoundingClientRect().top < window.innerHeight
    ) {
      let { left, top } = spans[i].getBoundingClientRect();
      top = top - window.innerHeight * 0.7;
      let opacityValue =
        1 - (top * 0.01 + left * 0.001) < 0.1
          ? 0.1
          : 1 - (top * 0.01 + left * 0.001).toFixed(3);
      opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
      spans[i].style.opacity = opacityValue;
    }
  }
}

document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

scrollbar.addListener(handleScroll);
scrollbar.addListener(revealSpans);

function handleScroll(status) {
  var reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

for (let i = 0; i <= lis.length; i++) {
  lis[i].onmouseover = function () {
    setTimeout(function () {
      odometer.innerHTML = i + 1;
    }, 100);
  };
}
