'use strict';

// navbar variables
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
//const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');
const readMoreBtn = document.querySelector('.read-more-btn');
const moreText = document.querySelector('.more-text');
const menuBtns = document.querySelector('.menu-btns');
const foodItems = document.querySelectorAll('.food-item');

const productsGrid = document.querySelector('.products-grid');
//const container = document.querySelector('.btn-container');

const menu = [
  {
    title: 'Samoussa (2 pièces)',
    category: 'Entrées',
    price: '6.00',
    img: './assets/images/samoussas2.png',
    desc: `De friands beignets triangulaires croustillants garnis
    d'une farce de légumes, de viande de boeuf et
    d'épices. </br> Au choix: boeuf ou légumes.`,
  },
  {
    title: 'Nems porc ou crevettes (2 pièces)',
    category: 'Entrées',
    price: '5.50',
    img: './assets/images/Nems.png',
    desc: `D'authentiques rouleaux frits constitués d'une farce
    à base de viande, crevettes ou légumes, agrémentés
    de nouilles de riz et entourée d'une galette de riz. </br>
    Choix poulet ou légumes : + 0,50 €.`,
  },
  {
    title: 'Rouleaux de printemps',
    category: 'Entrées',
    price: '5.50',
    img: './assets/images/rouleaux_printemps.png',
    desc: `Spécialités culinaires du Vietnam, choisissez nos délicieux rouleaux de printemps, se composant d'une garniture à base de poulet ou crevettes, de nouilles de riz, et de nombreux ingrédients connus pour leurs bienfaits (concombre, laitue), pour ajouter une note fraîche , légère et saine à votre repas.`,
  },
  {
    title: 'Raviolis frits (4 pièces)',
    category: 'Entrées',
    price: '5.50',
    img: './assets/images/raviolis.png',
    desc: ` De savoureux raviolis constitués d'une pâte de farine de blé enveloppant une délicieuse farce à base de viande et champignons parfumés.`,
  },
  {
    title: 'Tempura (3 pièces)',
    category: 'Entrées',
    price: '6.00',
    img: './assets/images/tempuras.png',
    desc: ` Délicieux beignets de crevette à base de farine de blé.`,
  },
  {
    title: 'Salade de vermicelles',
    category: 'Entrées',
    price: '5.50',
    img: './assets/images/salade_vermicelles.png',
    desc: `Découvrez nos salades fraîches aux vermicelles de
    riz pleines de saveurs grâce à la sauce et à ses
    parfums asiatiques. Au choix : poulet ou crevettes.`,
  },
  {
    title: 'Soupe Phnom Penh',
    category: 'Plats',
    price: '13.00',
    img: './assets/images/soupe2.png',
    desc: `Célèbre et savoureuse soupe cambodienne traditionnelle, préparée avec des nouilles de riz, bouillon de porc et poulet et ses garnitures.`,
  },
  {
    title: 'Soupe Boeuf Boulette',
    category: 'Plats',
    price: '14.00',
    img: './assets/images/soupe3.png',
    desc: `Dégustez l'authentique soupe de nouilles agrémentée de
    boulettes de boeuf, accompagnée de coriandre, soja et
    ciboulette.`,
  },
  {
    title: 'Soupe Nouille Canard',
    category: 'Plats',
    price: '12.50',
    img: './assets/images/soupe4.png',
    desc: `Savoureuse soupe de nouilles fraîches accompagnée de
    tranches de canard, coriandre et soja.`,
  },
  {
    title: 'Soupe raviolis',
    category: 'Plats',
    price: '12.50',
    img: './assets/images/soupe.png',
    desc: `Voyagez en Chine avec notre soupe de raviolis, grâce à son bouillon fait maison, et garnis d'un mélange de viande hachée de porc et de crevettes.`,
  },
  {
    title: 'Loc Lac',
    category: 'Plats',
    price: '12.50',
    img: './assets/images/loklak.png',
    desc: `De délicieux émincés de boeuf caramélisés sautés au Wok, accompagnés de son riz blanc sauté à la tomate, concombre, oignons et ciboulette.`,
  },
  {
    title: 'Bo Bun',
    category: 'Plats',
    price: '12.00',
    img: './assets/images/bol2.png',
    desc: `Véritable plat complet et gourmand, composé de nouilles de
    riz, crudités fraîches et marinées, d'herbes parfumées, garni
    d'une grillade de viande et sublimé par une sauce acidulée et
    de nems bien croustillants. </br>
    Choix entre boeuf ou poulet.`,
  },
  {
    title: 'Poke Bowl KHN',
    category: 'Plats',
    price: '13.00',
    img: './assets/images/pokebawl.png',
    desc: `Vedette de la cuisine Healthy, le "Poké" KHN vous régalera par sa fraîcheur tout en restant sain. Il se compose de nouilles de riz, avocat, crudités et de généreux morceaux de saumon frais aux parfums asiatiques.`,
  },
  {
    title: 'Banh Sung',
    category: 'Plats',
    price: '13.00',
    img: './assets/images/udon.png',
    desc: `Salade de vermicelles cambodgienne et cousine du Bo
    bun conciliant crudités, nems, le tout arrosé de lait de
    coco. Simple, rafraîchissante et gourmande!.`,
  },
  {
    title: 'Lot Tcha',
    category: 'Plats',
    price: '13.00',
    img: './assets/images/udon2.png',
    desc: `En provenance du Cambodge, de délicates petites
    nouilles de riz fraîches, sautées avec du chou, soja et
    servies avec un oeuf sur le plat. Possibilité avec Tofu.
    Supplément boeuf, poulet, crevettes (+0,50€).`,
  },
  // {
  //   title: 'Soupe',
  //   category: 'Plats',
  //   price: '6.50',
  //   img: './assets/images/ramen1.png',
  //   desc: `Célèbre et savoureuse soupe cambodienne traditionnelle, préparée avec des nouilles de riz, bouillon de porc et poulet et ses garnitures.`,
  // },
  {
    title: 'Nouilles sautées nature',
    category: 'Plats',
    price: '10.50',
    img: './assets/images/nouillessautees3.png',
    desc: `Voici nos fameuses nouilles sautées au Wok moelleuses et parfumées ! A base de boeuf, poulet, crevettes ou full légumes, une bouchée suffira à vous transporter au coeur de l'Asie ; vous aurez le choix entre plusieurs assaisonnements : Soja, Aigre douce, Saté ou Curry.
    </br>Au choix : boeuf, poulet ou crevettes (supplément : +1,50€) </br>
    végétarien (supplément : +1,00€) </br>
    canard (supplément : +3,00€)`,
  },
  {
    title: 'Pad Thai',
    category: 'Plats',
    price: '13.00',
    img: './assets/images/padthai.png',
    desc: `Savourez le fameux Pad Thai, plat traditionnel thaïlandais à la
    fois rassasiant et diététique. Composé d'une base de nouilles
    de riz, agrémentés de légumes, de tofu, de viande ou fruits
    de mer, assaisonné de sauce soja, cacahuètes concassées et
    fines herbes. </br>
    Choix entre boeuf, poulet ou crevettes.`,
  },
  {
    title: 'Mango Sticky Rice ',
    category: 'Desserts',
    price: '6.50',
    img: './assets/images/mango.jpg',
    desc: `Dessert gourmand originaire du Laos, à base de riz, de lait de coco et de mangue.`,
  },
  {
    title: 'Boule de neige coco',
    category: 'Desserts',
    price: '5.50',
    img: './assets/images/perlescoco2.png',
    desc: `Découvrez les réputées boules de coco, préparées avec de la noix de coco et de la farine de riz gluant.`,
  },
  {
    title: 'Salade de fruits',
    category: 'Desserts',
    price: '4.50',
    img: './assets/images/saladedefruits.png',
    desc: `Délicieuse salade de fruits fraîche et raffraîchissante.`,
  },
  {
    title: 'Mochi glacé',
    category: 'Desserts',
    price: '6.00',
    img: './assets/images/mochi-glace.jpeg',
    desc: `Savourez la glace autrement avec le mochi glacé, spécialité japonaise correspondant à une demi sphère en pâte de riz garnie d'un coeur glacé.`,
  },
  {
    title: 'Boule de glace',
    category: 'Desserts',
    price: '4.00',
    img: './assets/images/glace.png',
    desc: `Fameuses boules glacées (2 boules).
    Parfums : Vanille, Citron, Chocolat, Fraise, Pistache.`,
  },
];

// load items
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<div class="product-item">
          <div class="product-card">
            <div class="img-box">
              <img
                src=${item.img}
                alt="${item.title}"
                class="product-img"
                width="337px"
                height="337px"
                loading="lazy"
              />
            </div>
            <div class="product-content">
              <h3 class="product-name">${item.title}</h3>
              <h3 class="product-name">${item.price}€</h3>
              <p class="product-desc">${item.desc}</p>
            </div>
          </div>
      </div>`;
  });
  displayMenu = displayMenu.join('');

  productsGrid.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['Tous']
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn menu-btn" type="button" data-id=${category}>
      ${category}
      </button>`;
    })
    .join('');
  menuBtns.innerHTML = categoryBtns;
  const filterBtns = menuBtns.querySelectorAll('.filter-btn');
  const tousBtn = document.querySelector('[data-id="Tous"]');
  tousBtn.classList.add('active-btn');
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === 'Tous') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
  const menuBtn = document.querySelectorAll('.menu-btn');
  menuBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      menuBtn.forEach((btnItem) => {
        btnItem.classList.remove('active-btn');
      });
      btn.classList.add('active-btn');
    });
  });
}

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
// cartToggleBtn.addEventListener('click', function () {
//   // If the navbar-nav has an `active` class, it will be removed.
//   if (nav.classList.contains('active')) navToggleFunc();

//   cartToggleFunc();
// });

// add event on all nav-link
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', navToggleFunc);
}
