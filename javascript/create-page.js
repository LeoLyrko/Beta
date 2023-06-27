document.getElementById('create-page-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire

    // ** Récupérer les valeurs saisies dans les champs **
    // ** Home Page
    const pageTitle = document.getElementById('page-title').value;
    const pageSousTitre = document.getElementById('page-sous-titre').value;
    const inputFile = document.getElementById('image-url');
    const file = inputFile.files[0];
    // ** -----------------------------
    // ** NavBar Aside
    // Aside Parent First
    const nameCategorie1 = document.getElementById('navBarAsideTitle1').value;
    // Aside sous Parent First 1
    const nameSousCategorie1 = document.getElementById('navBarAsideSousTitle1').value;
    // Aside sous Parent First 2
    const nameSousCategorie2 = document.getElementById('navBarAsideSousTitle2').value;
    // Aside sous Parent First 3
    const nameSousCategorie3 = document.getElementById('navBarAsideSousTitle3').value;
    // Aside Parent Second
    const nameCategorie2 = document.getElementById('navBarAsideTitle2').value;
    // Aside sous Parent First 4
    const nameSousCategorie4 = document.getElementById('navBarAsideSousTitle4').value;
    // Aside sous Parent First 5
    const nameSousCategorie5 = document.getElementById('navBarAsideSousTitle5').value;
    // Aside sous Parent First 6
    const nameSousCategorie6 = document.getElementById('navBarAsideSousTitle6').value;
    // ** -----------------------------
    // ** Article
    const nameTitreArticle1 = document.getElementById('titreArticle1').value;
    const nameH2 = document.getElementById('h2Article').value;
    const nameP = document.getElementById('pArticle').value;
    const nameHrefSource = document.getElementById('sourceUrlArticle').value;
    const nameTexteSource = document.getElementById('nomSourceArticle').value;
    // ** -----------------------------
    // ** page-content
    const pageContent = document.getElementById('page-content').value;

//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ** Appel les fonctions pour créer les éléments de la page **
    createNavbar();
    createMainSection(pageTitle, pageSousTitre, file);
    createNavbarAside(nameCategorie1, nameSousCategorie1, nameSousCategorie2, nameSousCategorie3, nameCategorie2, nameSousCategorie4, nameSousCategorie5, nameSousCategorie6);
    createArticle(nameTitreArticle1, nameH2, nameP, nameHrefSource, nameTexteSource);
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ** Fonction pour créer la barre de navigation **
    function createNavbar() {
        const header = document.createElement('header');
        const navBar = document.createElement('nav');
        navBar.classList.add('navbar');
        const divContainer = document.createElement('div');
        divContainer.classList.add('container-bis');

        // Logo et Titre
        const divNavbar = document.createElement('div');
        divNavbar.classList.add('navbar-header');
        const aDivNavbar = document.createElement('a');
        aDivNavbar.setAttribute('href', 'Accueil.html');
        const logoNavbar = document.createElement('img');
        logoNavbar.classList.add('navbar-img');
        logoNavbar.src = 'medias/new_logo-256x256V4.png';
        logoNavbar.alt = "Logo du site & Bouton d'accueil";
        const h2Navbar = document.createElement('h2');
        h2Navbar.classList.add('navbar-h2');
        h2Navbar.textContent = "UNI'VERT";

        // Catégories
        const divNavbarCategorie = document.createElement('div');
        divNavbarCategorie.classList.add('navbar-categorie');
        const ulDivNavbarCategorie = document.createElement('ul');
        ulDivNavbarCategorie.classList.add('navbar-ul');

        // First part
        const liNavbar1 = document.createElement('li');
        const aLiNavbar1 = document.createElement('a');
        aLiNavbar1.classList.add('link_nav');
        aLiNavbar1.setAttribute('href', '#first_part');
        aLiNavbar1.textContent = "Exploitation minière";

        // Second Part
        const liNavbar2 = document.createElement('li');
        const aLiNavbar2 = document.createElement('a');
        aLiNavbar2.classList.add('link_nav');
        aLiNavbar2.setAttribute('href', '#second_part');
        aLiNavbar2.textContent = "Fabrication";

        // Third Part
        const liNavbar3 = document.createElement('li');
        const aLiNavbar3 = document.createElement('a');
        aLiNavbar3.classList.add('link_nav');
        aLiNavbar3.setAttribute('href', '#third_part');
        aLiNavbar3.textContent = "Logistique";

        // Fourth Part
        const liNavbar4 = document.createElement('li');
        const aLiNavbar4 = document.createElement('a');
        aLiNavbar4.classList.add('link_nav');
        aLiNavbar4.setAttribute('href', 'Coûts-de-fabrication.html');
        aLiNavbar4.textContent = "Coûts de fabrication";

        // Ajoute les éléments à la structure DOM
        header.appendChild(navBar);
        navBar.appendChild(divContainer);
        divContainer.appendChild(divNavbar);
        divContainer.appendChild(divNavbarCategorie);
        divNavbar.appendChild(aDivNavbar);
        aDivNavbar.appendChild(logoNavbar);
        aDivNavbar.appendChild(h2Navbar);
        divNavbarCategorie.appendChild(ulDivNavbarCategorie);
        ulDivNavbarCategorie.appendChild(liNavbar1);
        ulDivNavbarCategorie.appendChild(liNavbar2);
        ulDivNavbarCategorie.appendChild(liNavbar3);
        ulDivNavbarCategorie.appendChild(liNavbar4);
        liNavbar1.appendChild(aLiNavbar1);
        liNavbar2.appendChild(aLiNavbar2);
        liNavbar3.appendChild(aLiNavbar3);
        liNavbar4.appendChild(aLiNavbar4);

        // Insérer la barre de navigation avant la balise <script>
        document.body.insertBefore(header, document.querySelector('script'));
    }
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ** Fonction pour créer la section principale / Home et la balise <main>
    function createMainSection(pageTitle, pageSubtitle, backgroundImageFile) {
        const main = document.createElement('main');
        const sectionImgBanner = document.createElement('section');
        sectionImgBanner.classList.add('img-banner');
        const gradientValues = "linear-gradient(to bottom, rgba(255, 255, 255, 0) 70%, #1f1f1f 100%)";
        sectionImgBanner.style.background = `${gradientValues}, url(${URL.createObjectURL(backgroundImageFile)})`;
        sectionImgBanner.style.backgroundSize = "cover";

        const divSection = document.createElement('div');
        divSection.classList.add('div-title-categorie');

        const h1DivSection = document.createElement('h1');
        h1DivSection.classList.add('titre-categorie');
        h1DivSection.textContent = pageTitle;

        const pDivSection = document.createElement('p');
        pDivSection.classList.add('p-categorie');
        pDivSection.textContent = pageSubtitle;

        const aFleche = document.createElement('a');
        aFleche.id = 'clic_arrow';
        aFleche.setAttribute('href', '#link_arrow');
        aFleche.title = 'Bouton scroll pour accèder à la seconde partie du site';

        const imgFleche = document.createElement('img');
        imgFleche.id = 'arrow';
        imgFleche.src = 'medias/down-arrows-white.png';
        imgFleche.alt = 'Bouton Scroll';

        // Ajoute les éléments à la structure DOM
        sectionImgBanner.appendChild(divSection);
        divSection.appendChild(h1DivSection);
        divSection.appendChild(pDivSection);
        sectionImgBanner.appendChild(aFleche);
        aFleche.appendChild(imgFleche);
        main.appendChild(sectionImgBanner);

        // Insérer la section principale avant la balise <script>
        document.body.insertBefore(main, document.querySelector('script'));
    }
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ** Fonction pour créer la NavBar Aside
    function createNavbarAside (nameCategorie1, nameSousCategorie1, nameSousCategorie2, nameSousCategorie3, nameCategorie2, nameSousCategorie4, nameSousCategorie5, nameSousCategorie6) {

        const main = document.querySelector('main');

        const divContainerAside = document.createElement('div');
        divContainerAside.classList.add('container-aside-article');

        const aside = document.createElement('aside');
        aside.classList.add('vertical-nav');

        const ulAside = document.createElement('ul');
        ulAside.classList.add('navbar-aside-ul');

        // ** Aside Parent First
        const liAside1 = document.createElement('li');
        const aLiAside1 = document.createElement('a');
        aLiAside1.classList.add('nav-aside-parent')
        aLiAside1.id = "active";
        aLiAside1.setAttribute('href', '#link_arrow');
        aLiAside1.textContent = nameCategorie1;
        // Aside Sous Parent First 1
        const sousParentLiAside1 = document.createElement('li');
        const sousParentALiAside1 = document.createElement('a');
        sousParentALiAside1.classList.add('nav-aside-child')
        sousParentALiAside1.setAttribute('href', '#section1');
        sousParentALiAside1.textContent = "❯ \u00A0" + nameSousCategorie1;
        // Aside Sous Parent First 2
        const sousParentLiAside2 = document.createElement('li');
        const sousParentALiAside2 = document.createElement('a');
        sousParentALiAside2.classList.add('nav-aside-child')
        sousParentALiAside2.setAttribute('href', '#section2');
        sousParentALiAside2.textContent = "❯ \u00A0" + nameSousCategorie2;
        // Aside Sous Parent First 3
        const sousParentLiAside3 = document.createElement('li');
        const sousParentALiAside3 = document.createElement('a');
        sousParentALiAside3.classList.add('nav-aside-child')
        sousParentALiAside3.setAttribute('href', '#section3');
        sousParentALiAside3.textContent = "❯ \u00A0" + nameSousCategorie3;

        // ** Aside Parent Second
        const liAside2 = document.createElement('li');
        const aLiAside2 = document.createElement('a');
        aLiAside2.classList.add('nav-aside-parent')
        aLiAside2.setAttribute('href', '#titre-part-2');
        aLiAside2.textContent = nameCategorie2;
        // Aside Sous Parent First 4
        const sousParentLiAside4 = document.createElement('li');
        const sousParentALiAside4 = document.createElement('a');
        sousParentALiAside4.classList.add('nav-aside-child')
        sousParentALiAside4.setAttribute('href', '#section4');
        sousParentALiAside4.textContent = "❯ \u00A0" + nameSousCategorie4;
        // Aside Sous Parent First 5
        const sousParentLiAside5 = document.createElement('li');
        const sousParentALiAside5 = document.createElement('a');
        sousParentALiAside5.classList.add('nav-aside-child')
        sousParentALiAside5.setAttribute('href', '#section5');
        sousParentALiAside5.textContent = "❯ \u00A0" + nameSousCategorie5;
        // Aside Sous Parent First 6
        const sousParentLiAside6 = document.createElement('li');
        const sousParentALiAside6 = document.createElement('a');
        sousParentALiAside6.classList.add('nav-aside-child')
        sousParentALiAside6.setAttribute('href', '#section6');
        sousParentALiAside6.textContent = "❯ \u00A0" + nameSousCategorie6;

        // Ajoute les éléments à la structure DOM
        // Ajoute Div / Aside et Ul
        main.appendChild(divContainerAside);
        divContainerAside.appendChild(aside);
        aside.appendChild(ulAside);
        // Ajoute Parent First
        ulAside.appendChild(liAside1);
        liAside1.appendChild(aLiAside1);
        // Ajoute Sous Parent First 1
        ulAside.appendChild(sousParentLiAside1);
        sousParentLiAside1.appendChild(sousParentALiAside1);
        // Ajoute Sous Parent First 2
        ulAside.appendChild(sousParentLiAside2);
        sousParentLiAside2.appendChild(sousParentALiAside2);
        // Ajoute Sous Parent First 3
        ulAside.appendChild(sousParentLiAside3);
        sousParentLiAside3.appendChild(sousParentALiAside3);

        // Ajoute Parent First
        ulAside.appendChild(liAside2);
        liAside2.appendChild(aLiAside2);
        // Ajoute Sous Parent First 4
        ulAside.appendChild(sousParentLiAside4);
        sousParentLiAside4.appendChild(sousParentALiAside4);
        // Ajoute Sous Parent First 5
        ulAside.appendChild(sousParentLiAside5);
        sousParentLiAside5.appendChild(sousParentALiAside5);
        // Ajoute Sous Parent First 6
        ulAside.appendChild(sousParentLiAside6);
        sousParentLiAside6.appendChild(sousParentALiAside6);

        // Insérer la section principale avant la balise <script>
        document.body.insertBefore(main, document.querySelector('script'));
    }
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // ** Fonction pour créer un Article
    function createArticle (nameTitreArticle1, nameH2, nameP, nameHrefSource, nameTexteSource) {
        // Déclaration du parent
        const divContainerAside = document.querySelector('.container-aside-article')
        // Création de l'article
        const article = document.createElement('article');
        // Création d'une div avec X class et X ID
        const  divTitleArticle1 = document.createElement('div');
        divTitleArticle1.classList.add('div-title-article', 'title-marg');
        divTitleArticle1.id = ('link_arrow');
        // Titre Article 1
        const creaTitreArticle1 = document.createElement('h2');
        creaTitreArticle1.classList.add('title-categorie');
        creaTitreArticle1.textContent = nameTitreArticle1;
        // Section Article 1
        const section = document.createElement('section');
        section.id = ('section1');
        section.classList.add('section');
        // h2
        const h2 = document.createElement('h2');
        h2.classList.add('title-article');
        h2.textContent = nameH2;
        // Div Container Article
        const divContainerArticle = document.createElement('div');
        divContainerArticle.classList.add('container-article');
        // p Article
        const pArticle = document.createElement('p');
        pArticle.classList.add('p-article');
        pArticle.textContent = nameP;
        // br
        const br = document.createElement('br');
        // Source
        const aSource = document.createElement('a');
        aSource.classList.add('cite');
        aSource.href = nameHrefSource;
        aSource.textContent = nameTexteSource;
        aSource.setAttribute('target', '_blank');





        // Ajoute les éléments à la structure DOM
        // Ajoute Article / Section et le contenu
        divContainerAside.appendChild(article);
        article.appendChild(divTitleArticle1);
        divTitleArticle1.appendChild(creaTitreArticle1);
        article.appendChild(section);
        section.appendChild(h2);
        section.appendChild(divContainerArticle);
        divContainerArticle.appendChild(pArticle);
        divContainerArticle.appendChild(br);
        pArticle.appendChild(aSource);

    }
// ** |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ** |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ** |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||































  // Créer le paragraphe de contenu de la page
  const newPageContent = document.createElement('p');
  newPageContent.textContent = pageContent;








// ** -------------------------------------------------------------------------------
// Supprimer la balise <form>
document.getElementById('create-page-form').remove();
});