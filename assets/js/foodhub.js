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
const formuleBtn = document.querySelector('#menu-formule');
const drinksBtn = document.querySelector('#menu-boissons');
const formuleDesc = document.querySelector('#formule-desc');
const blocFormuleCard = document.querySelector('.bloc-formule-card');
const formuleCard = document.querySelector('.formule-card');
const blocFormule = document.querySelector('.bloc-formule');
const blocDrinks = document.querySelector('.bloc-drinks');
//const container = document.querySelector('.btn-container');

const homemadeLogo = `<img class="home-made" src="./assets/images/homemade_color.png" alt="Fait maison">`;

const menu = [
  {
    logo: '',
    title: `Samoussa (2 pièces)`,
    category: 'Entrées',
    price: '6.00',
    img: './assets/images/samoussas2.png',
    desc: `De friands beignets triangulaires croustillants garnis
    d'une farce de légumes, de viande de boeuf et
    d'épices. </br> Au choix: boeuf ou légumes.`,
  },
  {
    logo: '',
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
    logo: '',
    title: 'Rouleau de printemps (1 pièce)',
    category: 'Entrées',
    price: '5.50',
    img: './assets/images/rouleaux_printemps.png',
    desc: `Spécialités culinaires du Vietnam, choisissez nos délicieux rouleaux de printemps, se composant d'une garniture à base de poulet ou crevettes, de nouilles de riz, et de nombreux ingrédients connus pour leurs bienfaits (concombre, laitue), pour ajouter une note fraîche , légère et saine à votre repas.`,
  },
  {
    logo: '',
    title: 'Raviolis frits (4 pièces)',
    category: 'Entrées',
    price: '5.50',
    img: './assets/images/raviolis2.png',
    desc: ` De savoureux raviolis constitués d'une pâte de farine de blé enveloppant une délicieuse farce à base de viande et champignons parfumés.`,
  },
  {
    logo: '',
    title: 'Tempura (3 pièces)',
    category: 'Entrées',
    price: '6.00',
    img: './assets/images/tempuras2.png',
    desc: ` Délicieux beignets de crevette à base de farine de blé.`,
  },
  {
    logo: '',
    title: 'Salade de vermicelles',
    category: 'Entrées',
    price: '5.50',
    img: './assets/images/salade_vermicelles.png',
    desc: `Découvrez nos salades fraîches aux vermicelles de
    riz pleines de saveurs grâce à la sauce et à ses
    parfums asiatiques. Au choix : poulet ou crevettes.`,
  },
  {
    logo: homemadeLogo,
    title: 'Soupe Phnom Penh',
    category: 'Plats',
    price: '13.00',
    img: './assets/images/soupe2.png',
    desc: `Célèbre et savoureuse soupe cambodienne traditionnelle, préparée avec des nouilles de riz, bouillon de porc et poulet et ses garnitures.`,
  },
  {
    logo: homemadeLogo,
    title: 'Soupe Boeuf Boulette',
    category: 'Plats',
    price: '14.00',
    img: './assets/images/soupe3.png',
    desc: `Dégustez l'authentique soupe de nouilles agrémentée de
    boulettes de boeuf, accompagnée de coriandre, soja et
    ciboulette.`,
  },
  {
    logo: homemadeLogo,
    title: 'Soupe raviolis',
    category: 'Plats',
    price: '12.50',
    img: './assets/images/soupe.png',
    desc: `Voyagez en Chine avec notre soupe de raviolis, grâce à son bouillon fait maison, et garnis d'un mélange de viande hachée de porc et de crevettes.`,
  },
  {
    logo: homemadeLogo,
    title: 'Loc Lac',
    category: 'Plats',
    price: '12.50',
    img: './assets/images/loklak.png',
    desc: `De délicieux émincés de boeuf caramélisés sautés au Wok, accompagnés de son riz blanc sauté à la tomate, concombre, oignons et ciboulette.`,
  },
  {
    logo: homemadeLogo,
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
    logo: homemadeLogo,
    title: 'Poke Bowl KHN',
    category: 'Plats',
    price: '13.00',
    img: './assets/images/pokebawl.png',
    desc: `Vedette de la cuisine Healthy, le "Poké" KHN vous régalera par sa fraîcheur tout en restant sain. Il se compose de nouilles de riz, avocat, crudités et de généreux morceaux de saumon frais aux parfums asiatiques.`,
  },
  {
    logo: homemadeLogo,
    title: 'Banh Sung',
    category: 'Plats',
    price: '13.00',
    img: './assets/images/udon.png',
    desc: `Salade de vermicelles cambodgienne et cousine du Bo
    bun conciliant crudités, nems, le tout arrosé de lait de
    coco. Simple, rafraîchissante et gourmande!.`,
  },
  {
    logo: homemadeLogo,
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
    logo: homemadeLogo,
    title: 'Nouilles sautées nature',
    category: 'Plats',
    price: '10.50',
    img: './assets/images/nouilles_sautees6.png',
    desc: `Voici nos fameuses nouilles sautées au Wok moelleuses et parfumées ! A base de boeuf, poulet, crevettes ou full légumes, une bouchée suffira à vous transporter au coeur de l'Asie ; vous aurez le choix entre plusieurs assaisonnements : Soja, Aigre douce, Saté ou Curry.
    </br>Au choix : boeuf, poulet ou crevettes (supplément : +1,50€) </br>
    végétarien (supplément : +1,00€) </br>
    canard (supplément : +3,00€)`,
  },
  {
    logo: homemadeLogo,
    title: 'Pad Thai',
    category: 'Plats',
    price: '13.00',
    img: './assets/images/pad_thai5.png',
    desc: `Savourez le fameux Pad Thai, plat traditionnel thaïlandais à la
    fois rassasiant et diététique. Composé d'une base de nouilles
    de riz, agrémentés de légumes, de tofu, de viande ou fruits
    de mer, assaisonné de sauce soja, cacahuètes concassées et
    fines herbes. </br>
    Choix entre boeuf, poulet ou crevettes.`,
  },
  {
    logo: '',
    title: '',
    category: 'Tous',
    price: '',
    img: null,
    desc: null,
  },
  {
    logo: '',
    title: 'Mango Sticky Rice ',
    category: 'Desserts',
    price: '6.50',
    img: './assets/images/mango.png',
    desc: `Dessert gourmand originaire du Laos, à base de riz, de lait de coco et de mangue.`,
  },
  {
    logo: '',
    title: 'Boule de neige coco',
    category: 'Desserts',
    price: '5.50',
    img: './assets/images/perlescoco2.png',
    desc: `Découvrez les réputées boules de coco, préparées avec de la noix de coco et de la farine de riz gluant.`,
  },
  {
    logo: '',
    title: 'Salade de fruits',
    category: 'Desserts',
    price: '4.50',
    img: './assets/images/saladedefruits.png',
    desc: `Délicieuse salade de fruits fraîche et raffraîchissante.`,
  },
  {
    logo: '',
    title: 'Mochi glacé',
    category: 'Desserts',
    price: '6.00',
    img: './assets/images/mochi2.png',
    desc: `Savourez la glace autrement avec le mochi glacé, spécialité japonaise correspondant à une demi sphère en pâte de riz garnie d'un coeur glacé.`,
  },
  {
    logo: '',
    title: 'Boules de glace',
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

    if (item.img != null) {
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
              <h3 class="product-name">${item.logo}${item.title}</h3>
              <h3 class="product-name">${item.price}€</h3>
              <p class="product-desc">${item.desc}</p>
            </div>
          </div>
      </div>`;
    } else {
      return `<div class="product-item">
      </div>`;
    }
  });
  displayMenu = displayMenu.join('');

  productsGrid.innerHTML = displayMenu;
}

function displayFormuleDesc() {
  // const descText = `<p class="formule-desc-text">Retrouvez ci-dessous nos formules proposées.</p>
  // <p>Formule midi (Entrée + Plat ou Plat + Dessert) : 14,50€</p>
  // <p>Formule midi + Boisson : 16,00€ </p>
  // <p class="formule-desc-text">À choisir parmi la carte suivante : </p>`;

  const descText = `<p class="formule-desc-text">Retrouvez ci-dessous nos formules proposées.</p>`;

  formuleDesc.innerHTML = descText;
  productsGrid.innerHTML = '';
}

function displayFormule() {
  const formule = `<div class="price-row">
            
  <div class="price-col">
    <div class="title-card">
      <p class="title-text">Formule Entrée/Plat ou Plat/Dessert</p>
      <p class="title-price">17,00€</p>
      <p class="title-text">Formule Entrée/Plat/Dessert</p>
      <p class="title-price">21,50€</p>
    </div>
    <div class="card-desc">
      <p>Une entrée parmi :</p>
      <ul>

        <li>Nems au choix</li>
        
        <li>Tempura</li>
        
        <li>Samoussa</li>
        <li>Rouleau de Printemps</li>
        
       </ul>
       <p>Un plat parmi :</p>
      <ul>

        <li>Pad Thaï</li>
        <li>Lot Tcha au choix</li>
        <li>Soupe Phnom Penh</li>
        <li>Ban Sung</li>
        <li>Soupe Nouilles Canard</li>
        <li>Soupe raviolis</li>

       </ul>
       <p>Un dessert parmi :</p>
      <ul>          
        <li>Salade de fruits</li>                   
        <li>Mochi</li>                   
        <li>Banana Split</li>                                
        <li>Mango Sticky Rice</li>                                
       </ul>
    </div>
  </div>
  
  
  <div class="price-col">
    <div class="title-card">
      <p class="title-text">Formule Midi Entrée/Plat ou Plat/Dessert</p>
      <p class="title-price">14,50€</p>
      <p class="title-text">Formule Midi + Boisson</p>
      <p class="title-price">16,00€</p>
    </div>
    <div class="card-desc">
      <p>Une entrée parmi :</p>
      <ul>

        <li>Nems porc ou crevettes</li>
        
        <li>Salade vermicelles</li>
        
        <li>Rouleau de printemps</li>
        
       </ul>
       <p>Un plat parmi :</p>
      <ul>

        <li>Nouilles Sautées</li>
        
        <li>Bo Bun</li>
        
        <li>Poke Bowl</li>
        <li>Loc Lac</li>
        
       </ul>
       <p>Un dessert parmi :</p>
      <ul>          
        <li>Salade de fruits</li>                   
        <li>Boules de glace</li>                   
        <li>Boules de neige coco</li>                                
       </ul>
    </div>

  </div>

  <div class="price-col">
    <div class="title-card">
      <p class="title-text"">Menu kid</p>
      <p class="title-price">9,00€</p>
    </div>
    <div class="card-desc">
      <p>Un plat parmi :</p>
      <ul>          
        <li>Riz tomate et tempuras</li>                   
        <li>Nouilles sautées au choix</li>                   
        <li>Loc Lac</li>                                
       </ul>
       <p>Un dessert parmi :</p>
      <ul>          
        <li>Salade de fruits</li>                   
        <li>Boules de glace (2 boules)</li>                   
        <li>Banana split</li>                                
       </ul>
    </div>
  </div>`;

  productsGrid.innerHTML = '';
  blocDrinks.innerHTML = '';
  formuleCard.innerHTML = formule;
  //productsGrid.innerHTML = formule;
}

function displayDrinks() {
  const drinks = `<div class="list">
  <h2 class="list-title">Avec alcool</h2>
  <ul>
    <li class="item"><span    class="name">Ricard (2 cl)</span>
      <span class="price">3,50€</span>
    </li>
<li class="item"><span class="name">Pastis 51 (2 cl)</span>
      <span class="price">3,50€</span>
    </li>
<li class="item"><span class="name">Martini (6 cl)</span>
      <span class="price">5,00€</span>
    </li>
<li class="item"><span class="name">Kir (12 cl)</span>
      <span class="price">5,00€</span>
    </li>
       <li class="item"><span class="name">Bière Asahi (33 cl)</span>
      <span class="price">5,00€</span>
    </li>
    <li class="item"><span class="name">Bière CASS (33 cl)</span>
      <span class="price">6,00€</span>
    </li>
    <li class="item"><span class="name">Bière DESPERADOS (33 cl)</span>
      <span class="price">6,00€</span>
    </li>
    <li class="item"><span class="name">Pression 1664 (25 cl)</span>
      <span class="price">4,50€</span>
    </li>
    <li class="item"><span class="name">Pression 1664 (33 cl)</span>
      <span class="price">6,00€</span>
    </li>
    <li class="item"><span class="name">Pression ambrée THOR (25 cl)</span>
      <span class="price">5,00€</span>
    </li>
    <li class="item"><span class="name">Pression ambrée THOR (33 cl)</span>
      <span class="price">6,50€</span>
    </li>
    <li class="item"><span class="name">Alcool de riz saké Mei Kuei Lu Chiew (4cl)</span>
      <span class="price">6,00€</span>
    </li>
    <li class="item"><span class="name">Get 27 (6cl)</span>
      <span class="price">6,00€</span>
    </li>
    <li class="item"><span class="name">Rhum Havana Club (4 cl)</span>
      <span class="price">8,00€</span>
    </li>
    <li class="item"><span class="name">Whisky Jack Daniel's (4 cl)</span>
      <span class="price">8,00€</span>
    </li>
  </ul>
</div>

<div class="list">
  <h2 class="list-title">Sans alcool</h2>
  <ul>
    <li class="item"><span class="name">Coca cola (33 cl)</span>
      <span class="price">4,00€</span>
    </li>
    <li class="item"><span class="name">Orangina (25 cl)</span>
      <span class="price">4,00€</span>
    </li>
    <li class="item"><span class="name">Limonade artisanale bio (33 cl)</span>
      <span class="price">5,00€</span>
    </li>
    <li class="item"><span class="name">Jus de pomme (20 cl)</span>
      <span class="price">4,00€</span>
    </li>
    <li class="item"><span class="name">Jus de orange (20 cl)</span>
      <span class="price">4,00€</span>
    </li>
    <li class="item"><span class="name">Jus de abricot (20 cl)</span>
      <span class="price">4,00€</span>
    </li>
    <li class="item"><span class="name">Evian ou San Pellegrino (50 cl)</span>
      <span class="price">4,00€</span>
    </li>
    <li class="item"><span class="name">Evian ou San Pellegrino (1 l)</span>
      <span class="price">6,00€</span>
    </li>
    <li class="item"><span class="name">Perrier (25 cl)</span>
      <span class="price">4,00€</span>
    </li>
  </ul>
</div>

<div class="list">
  <h2 class="list-title">Café & Thé</h2>
  <ul>
    <li class="item"><span class="name">Expresso</span>
      <span class="price">2,00€</span>
    </li>
    <li class="item"><span class="name">Double Expresso</span>
      <span class="price">3,50€</span>
    </li><li class="item"><span class="name">Thé (Menthe, Verveine)</span>
      <span class="price">3,00€</span>
    </li>
    <li class="item"><span class="name">Bubble Tea</span>
      <span class="price">6,00€</span>
    </li>
  </ul>
</div>`;

  productsGrid.innerHTML = '';
  formuleCard.innerHTML = '';
  blocDrinks.innerHTML = drinks;
  //productsGrid.innerHTML = formule;
}

formuleBtn.addEventListener('click', function (e) {
  displayFormuleDesc();
  displayFormule();
});

drinksBtn.addEventListener('click', function (e) {
  displayDrinks();
});

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
      formuleDesc.innerHTML = '';
      blocFormuleCard.innerHTML = '';
      blocFormule.innerHTML = '';
      formuleCard.innerHTML = '';
      blocDrinks.innerHTML = '';
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
