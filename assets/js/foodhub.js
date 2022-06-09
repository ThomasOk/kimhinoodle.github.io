'use strict';

// navbar variables
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');
const readMoreBtn = document.querySelector('.read-more-btn');
const moreText = document.querySelector('.more-text');

readMoreBtn.addEventListener('click', (e) => {
  moreText.classList.toggle('more-text-open');
  if (moreText.classList.contains('more-text-open')) {
    readMoreBtn.innerHTML =
      'Notre histoire... <i class="fa-solid fa-angles-up"></i>';
  } else {
    readMoreBtn.innerHTML =
      'Notre histoire... <i class="fa-solid fa-angles-down"></i>';
  }
  // if (moreText.style.display === 'none') {
  //   moreText.style.display = 'block';
  //   readMoreBtn.innerHTML =
  //     'Notre histoire... <i class="fa-solid fa-circle-minus"></i>';
  //   //moreText.style.display = "none";
  // } else {
  //   moreText.style.display = 'none';
  //   readMoreBtn.innerHTML =
  //     'Notre histoire... <i class="fa-solid fa-circle-plus"></i>';
  //   //moreText.style.display = "inline";
  // }
});

// nav toggle function
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
};

// shopping cart toggle function
const cartToggleFunc = function () {
  shoppingCart.classList.toggle('active');
};

// add event on nav-toggle-btn
navToggleBtn.addEventListener('click', function () {
  // If the shopping-cart has an `active` class, it will be removed.
  if (shoppingCart.classList.contains('active')) cartToggleFunc();

  navToggleFunc();
});

// add event on cart-toggle-btn
cartToggleBtn.addEventListener('click', function () {
  // If the navbar-nav has an `active` class, it will be removed.
  if (nav.classList.contains('active')) navToggleFunc();

  cartToggleFunc();
});

// add event on all nav-link
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', navToggleFunc);
}
