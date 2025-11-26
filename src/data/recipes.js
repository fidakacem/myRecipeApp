import pancakesImg from "../assets/berry-pancakes.jpg";
import avocadoSaladImg from "../assets/avocado-salad.jpg";
import crepesImg from "../assets/crepes.jpg";
import fondantChocoImg from "../assets/fondant-chocolat.jpg";
import fondantPistacheImg from "../assets/fondant-pistache.jpg";
import pizzaImg from "../assets/pizza.jpg";
import batboutImg from "../assets/batbout.jpg";
import souffleImg from "../assets/souffle.jpg";
import muffinsImg from "../assets/muffins.jpg";
import cakeMarbreImg from "../assets/cake-marbre.jpg";
import lasagneImg from "../assets/lasagne.jpg";
import cesarSaladImg from "../assets/salade-cesar.jpg";
import pastaBlancheImg from "../assets/pasta-blanche.jpg";
import spaghettiCarbonaraImg from "../assets/spaghetti-carbonara.jpg";

import brikImg from "../assets/brik.jpg";
import tajineImg from "../assets/tajine.jpg";
import merguezImg from "../assets/merguez.jpg";
import makloubImg from "../assets/makloub.jpg";
import baguetteFarcieImg from "../assets/baguette-farcie.jpg";
import pateBeurreImg from "../assets/pate-beurre.jpg";
import baklavaImg from "../assets/baklava.jpg";
import mhalbiImg from "../assets/mhalbi.jpg";
import kaakImg from "../assets/kaak.jpg";
import gateauAmandesImg from "../assets/gateau-amandes.jpg";

import ratatouilleImg from "../assets/ratatouille.jpg";
import quicheLorraineImg from "../assets/quiche-lorraine.jpg";
import tarteCitronImg from "../assets/tarte-citron.jpg";
import tiramisuImg from "../assets/tiramisu.jpg";
import cremeBruleeImg from "../assets/creme-brulee.jpg";
import clafoutisImg from "../assets/clafoutis.jpg";

import dolmaImg from "../assets/dolma.jpg";
import kebabImg from "../assets/kebab.jpg";
import risottoImg from "../assets/risotto.jpg";
import saladeNicoiseImg from "../assets/salade-nicoise.jpg";

const recipes = [
  // Recettes existantes
  {
    id: 1,
    title: "Pancakes aux fruits rouges",
    image: pancakesImg,
    category: "Petit-déjeuner",
    description: "Des pancakes moelleux avec des fruits rouges frais",
    popular: true,
    ingredients: ["1 tasse de farine","2 c. à soupe de sucre","1 c. à café de levure chimique","1/2 c. à café de bicarbonate","1/4 c. à café de sel","3/4 tasse de lait","1 œuf","2 c. à soupe de beurre fondu","1/2 tasse de fruits rouges"],
    steps: ["Mélanger la farine, le sucre, la levure, le bicarbonate et le sel.","Dans un autre bol, fouetter le lait, l'œuf et le beurre fondu.","Combiner les ingrédients secs et humides jusqu'à obtention d'une pâte lisse.","Incorporer délicatement les fruits rouges.","Faire chauffer une poêle antiadhésive et verser la pâte pour former les pancakes.","Cuire jusqu'à ce que des bulles apparaissent, retourner et cuire l'autre côté.","Servir chaud avec des fruits supplémentaires et du sirop."]
  },
  {
    id: 2,
    title: "Salade avocat",
    image: avocadoSaladImg,
    category: "Salade",
    description: "Une salade fraîche avec avocat et légumes verts",
    popular: false,
    ingredients: ["1 avocat, tranché","2 tasses de salade mixte","1/2 tasse de tomates cerises","1/4 tasse de concombre tranché","2 c. à soupe d'huile d'olive","1 c. à soupe de jus de citron","Sel et poivre"],
    steps: ["Mélanger l'huile d'olive, le jus de citron, le sel et le poivre pour la vinaigrette.","Ajouter la salade, les tomates, le concombre et l'avocat.","Mélanger délicatement pour enrober.","Servir immédiatement."]
  },
  {
    id: 3,
    title: "Crêpes",
    image: crepesImg,
    category: "Petit-déjeuner",
    description: "Crêpes fines et moelleuses à la française",
    popular: true,
    ingredients: ["1 tasse de farine","2 œufs","1/2 tasse de lait","1/2 tasse d'eau","2 c. à soupe de beurre fondu","1/4 c. à café de sel"],
    steps: ["Mélanger tous les ingrédients jusqu'à obtenir une pâte lisse.","Chauffer une poêle légèrement huilée à feu moyen.","Verser une petite quantité de pâte et l'étaler.","Cuire 1-2 minutes de chaque côté.","Servir avec du sucre, du chocolat ou des fruits."]
  },
  {
    id: 4,
    title: "Fondant au chocolat",
    image: fondantChocoImg,
    category: "Dessert",
    description: "Fondant au chocolat riche et fondant",
    popular: true,
    ingredients: ["200g de chocolat noir","100g de beurre","3 œufs","100g de sucre","50g de farine"],
    steps: ["Préchauffer le four à 200°C.","Faire fondre le chocolat et le beurre ensemble.","Battre les œufs et le sucre jusqu'à ce que le mélange soit mousseux.","Ajouter la farine et mélanger avec le chocolat fondu.","Verser dans des ramequins et cuire 10-12 minutes.","Servir immédiatement."]
  },
  {
    id: 5,
    title: "Fondant à la pistache",
    image: fondantPistacheImg,
    category: "Dessert",
    description: "Fondant gourmand à la pistache",
    ingredients: ["200g de chocolat blanc","100g de beurre","3 œufs","100g de sucre","50g de pâte de pistache"],
    steps: ["Préchauffer le four à 180°C.","Faire fondre le chocolat blanc et le beurre.","Battre les œufs et le sucre.","Ajouter la pâte de pistache et la farine.","Cuire dans des ramequins 12-15 minutes.","Servir chaud."]
  },
  {
    id: 6,
    title: "Pizza Margherita",
    image: pizzaImg,
    category: "Déjeuner",
    description: "Pizza classique italienne avec tomate et mozzarella",
    popular: true,
    ingredients: ["Pâte à pizza","Sauce tomate","Mozzarella","Basilic frais","Huile d'olive","Sel"],
    steps: ["Préchauffer le four à 220°C.","Étaler la pâte à pizza.","Étaler la sauce tomate et ajouter la mozzarella.","Cuire 12-15 minutes.","Garnir de basilic et d'huile d'olive."]
  },
  {
    id: 7,
    title: "Batbout",
    image: batboutImg,
    category: "Pain",
    description: "Pain marocain moelleux",
    ingredients: ["500g de farine","1 c. à café de sel","1 c. à café de sucre","1 c. à soupe de levure","300ml d'eau tiède"],
    steps: ["Mélanger tous les ingrédients et pétrir la pâte.","Laisser reposer 1 heure.","Diviser et étaler en petits disques.","Cuire sur une poêle chaude 2-3 minutes par côté.","Servir chaud."]
  },
  {
    id: 8,
    title: "Soufflé au fromage",
    image: souffleImg,
    category: "Déjeuner",
    description: "Soufflé léger et aérien au fromage",
    ingredients: ["3 œufs","200ml de lait","50g de farine","50g de beurre","100g de fromage râpé","Sel et poivre"],
    steps: ["Préchauffer le four à 180°C.","Préparer une béchamel avec le beurre, la farine et le lait.","Séparer les blancs et les jaunes d'œufs.","Incorporer les jaunes avec le fromage à la béchamel.","Monter les blancs en neige et incorporer délicatement.","Verser dans des ramequins et cuire 20-25 minutes."]
  },
  {
    id: 9,
    title: "Muffins aux myrtilles",
    image: muffinsImg,
    category: "Dessert",
    description: "Muffins moelleux aux myrtilles",
    ingredients: ["250g de farine","150g de sucre","1 c. à café de levure","1/2 c. à café de bicarbonate","1/2 c. à café de sel","120ml de lait","1 œuf","80g de beurre","100g de myrtilles"],
    steps: ["Préchauffer le four à 180°C.","Mélanger les ingrédients secs.","Ajouter les ingrédients humides et incorporer les myrtilles.","Verser dans des moules à muffins.","Cuire 20-25 minutes."]
  },
  {
    id: 10,
    title: "Cake marbré",
    image: cakeMarbreImg,
    category: "Dessert",
    description: "Cake classique avec chocolat et vanille",
    popular: true,
    ingredients: ["200g de farine","200g de sucre","200g de beurre","4 œufs","2 c. à soupe de cacao","1 c. à café de levure"],
    steps: ["Préchauffer le four à 180°C.","Mélanger beurre, sucre, œufs et farine.","Diviser la pâte et ajouter le cacao à une moitié.","Alterner les pâtes dans le moule et marbrer.","Cuire 40-45 minutes."]
  },
  {
    id: 11,
    title: "Lasagnes",
    image: lasagneImg,
    category: "Déjeuner",
    description: "Lasagnes italiennes à la viande et au fromage",
    ingredients: ["Feuilles de lasagne","500g de viande hachée","500ml de sauce tomate","250g de ricotta","150g de mozzarella","1 oignon haché","2 gousses d'ail"],
    steps: ["Préchauffer le four à 180°C.","Cuire la viande avec l'oignon et l'ail, ajouter la sauce tomate.","Alterner feuilles de lasagne, sauce viande, ricotta et mozzarella.","Terminer par la mozzarella.","Cuire 35-40 minutes."]
  },
  {
    id: 12,
    title: "Salade César",
    image: cesarSaladImg,
    category: "Salade",
    description: "Salade César classique avec poulet et croûtons",
    popular: true,
    ingredients: ["Salade romaine","Poulet grillé","Croûtons","Parmesan râpé","Sauce César"],
    steps: ["Couper la salade et mélanger avec la sauce.","Ajouter le poulet, les croûtons et le parmesan.","Mélanger doucement et servir."]
  },
  {
    id: 13,
    title: "Pâtes à la sauce blanche",
    image: pastaBlancheImg,
    category: "Déjeuner",
    description: "Pâtes crémeuses à la sauce blanche",
    ingredients: ["200g de pâtes","200ml de crème","50g de beurre","50g de parmesan","Sel et poivre"],
    steps: ["Cuire les pâtes al dente.","Faire fondre le beurre et la crème dans une poêle.","Ajouter le parmesan et assaisonner.","Mélanger les pâtes avec la sauce et servir."]
  },

  
  {
    id: 14,
    title: "Brik à l'œuf",
    image: brikImg,
    category: "Tunisienne",
    description: "Feuille de brick croustillante garnie d'œuf et thon",
    popular: true,
    ingredients: ["Feuille de brick","1 œuf","Thon","Persil","Sel, poivre"],
    steps: ["Garnir la feuille de brick avec œuf, thon et persil.","Plier et fermer.","Cuire dans l'huile chaude jusqu'à doré.","Servir immédiatement."]
  },
  {
    id: 15,
    title: "Tajine tunisien",
    image: tajineImg,
    category: "Tunisienne",
    description: "Omelette aux légumes et viande hachée au four",
    ingredients: ["4 œufs","150g de viande hachée","1 oignon","1 poivron","Épices tunisiennes"],
    steps: ["Faire revenir la viande et les légumes.","Battre les œufs et ajouter à la préparation.","Cuire au four 20-25 minutes.","Servir chaud."]
  },
  {
    id: 16,
    title: "Merguez grillées",
    image: merguezImg,
    category: "Tunisienne",
    description: "Saucisses épicées grillées au barbecue",
    ingredients: ["8 merguez","Huile d'olive","Épices"],
    steps: ["Préchauffer le grill ou barbecue.","Badigeonner les merguez d'huile et cuire 10 minutes.","Servir chaud avec pain ou salade."]
  },
  {
    id: 17,
    title: "Makloub",
    image: makloubImg,
    category: "Tunisienne",
    description: "Sandwich tunisien garni de viande, légumes et sauces",
    popular: true,
    ingredients: ["Pain tunisien","Viande grillée","Tomates","Salade","Sauce harissa"],
    steps: ["Ouvrir le pain et garnir avec viande et légumes.","Ajouter sauces et assaisonner.","Servir frais."]
  },
  {
    id: 18,
    title: "Baguette farcie",
    image: baguetteFarcieImg,
    category: "Tunisienne",
    description: "Baguette garnie de viande, œufs et légumes",
    ingredients: ["Baguette","Viande hachée","Œuf","Tomate","Fromage"],
    steps: ["Cuire la viande avec épices et légumes.","Ouvrir la baguette et remplir.","Ajouter l'œuf et fromage.","Servir chaud."]
  },
  {
    id: 19,
    title: "Pâte de beurre",
    image: pateBeurreImg,
    category: "Dessert",
    description: "Pâte sablée au beurre pour tartes et biscuits",
    ingredients: ["250g de farine","125g de beurre","70g de sucre","1 œuf"],
    steps: ["Mélanger farine et sucre.","Incorporer le beurre et sabler.","Ajouter l'œuf et former une pâte.","Réfrigérer avant utilisation."]
  },
  {
    id: 20,
    title: "Baklava",
    image: baklavaImg,
    category: "Dessert",
    description: "Pâtisserie aux noix et miel",
    ingredients: ["Feuilles de filo","Noix hachées","Beurre fondu","Miel"],
    steps: ["Superposer les feuilles de pâte en badigeonnant de beurre.","Ajouter les noix entre les couches.","Cuire 25-30 minutes.","Verser le miel sur le baklava chaud."]
  },
  {
    id: 21,
    title: "Mhalbi",
    image: mhalbiImg,
    category: "Dessert",
    description: "Flan tunisien à la fleur d'oranger",
    ingredients: ["1 litre de lait","100g de sucre","60g de maïzena","Eau de fleur d'oranger"],
    steps: ["Porter le lait à ébullition avec sucre.","Dissoudre la maïzena et ajouter au lait.","Cuire jusqu'à épaississement.","Ajouter la fleur d'oranger et servir frais."]
  },
  {
    id: 22,
    title: "Kaak tunisien",
    image: kaakImg,
    category: "Dessert",
    description: "Biscuits sucrés parfumés aux graines de sésame",
    ingredients: ["250g de farine","125g de beurre","50g de sucre","Graines de sésame"],
    steps: ["Mélanger la farine, sucre et beurre.","Former des anneaux et saupoudrer de graines.","Cuire 20 minutes à 180°C."]
  },
  {
    id: 23,
    title: "Gâteau aux amandes",
    image: gateauAmandesImg,
    category: "Dessert",
    description: "Gâteau moelleux parfumé à l'amande",
    ingredients: ["150g de poudre d'amandes","100g de sucre","3 œufs","50g de beurre"],
    steps: ["Mélanger tous les ingrédients.","Verser dans un moule beurré.","Cuire 25-30 minutes à 180°C."]
  },
  {
    id: 24,
    title: "Ratatouille",
    image: ratatouilleImg,
    category: "Française",
    description: "Ragoût de légumes provençal",
    ingredients: ["Courgette","Aubergine","Poivron","Tomate","Oignon","Herbes"],
    steps: ["Couper les légumes en dés.","Faire revenir séparément puis mijoter ensemble 20 minutes.","Servir chaud ou froid."]
  },
  {
    id: 25,
    title: "Quiche Lorraine",
    image: quicheLorraineImg,
    category: "Française",
    description: "Tarte salée au bacon et fromage",
    ingredients: ["Pâte brisée","200g lardons","3 œufs","200ml crème","Fromage râpé"],
    steps: ["Préchauffer le four à 180°C.","Faire revenir les lardons.","Mélanger œufs et crème, verser sur pâte avec lardons et fromage.","Cuire 25-30 minutes."]
  },
  {
    id: 26,
    title: "Tarte au citron",
    image: tarteCitronImg,
    category: "Dessert",
    description: "Tarte sucrée avec crème au citron",
    popular: true,
    ingredients: ["Pâte sablée","3 citrons","3 œufs","100g sucre","Beurre 50g"],
    steps: ["Préparer la crème au citron.","Étaler sur pâte précuite.","Cuire 15-20 minutes.","Servir refroidi."]
  },
  {
    id: 27,
    title: "Tiramisu",
    image: tiramisuImg,
    category: "Dessert",
    description: "Dessert italien au mascarpone et café",
    ingredients: ["250g mascarpone","3 œufs","100g sucre","Biscuits","Café"],
    steps: ["Battre jaunes et sucre, ajouter mascarpone.","Monter blancs en neige et incorporer.","Tremper biscuits dans café, monter les couches.","Réfrigérer 4 heures avant de servir."]
  },
  {
    id: 28,
    title: "Crème brûlée",
    image: cremeBruleeImg,
    category: "Dessert",
    description: "Dessert à base de crème à la vanille caramélisée",
    ingredients: ["500ml crème","5 jaunes d'œufs","100g sucre","Vanille"],
    steps: ["Préchauffer le four à 160°C.","Mélanger crème, jaunes et sucre, ajouter vanille.","Cuire au bain-marie 40 minutes.","Caraméliser le dessus avec sucre et chalumeau."]
  },
  {
    id: 29,
    title: "Clafoutis aux cerises",
    image: clafoutisImg,
    category: "Dessert",
    description: "Gâteau moelleux aux cerises",
    ingredients: ["300g cerises","100g farine","100g sucre","3 œufs","250ml lait"],
    steps: ["Préchauffer le four à 180°C.","Mélanger œufs, sucre, farine et lait.","Ajouter les cerises et verser dans moule.","Cuire 35-40 minutes."]
  },
  {
    id: 30,
    title: "Dolma",
    image: dolmaImg,
    category: "Déjeuner",
    description: "Légumes farcis à la viande",
    ingredients: ["Poivrons","Courgettes","Viande hachée","Riz","Épices"],
    steps: ["Préparer les légumes et retirer le cœur.","Mélanger viande, riz et épices.","Farcir les légumes et cuire 30-40 minutes."]
  },
  {
    id: 31,
    title: "Kebab",
    image: kebabImg,
    category: "Déjeuner",
    description: "Kebab de viande grillée",
    ingredients: ["Viande","Épices","Pain pita","Salade","Sauce"],
    steps: ["Mariner la viande avec épices.","Griller la viande.","Servir dans le pain pita avec salade et sauce."]
  },
  {
    id: 32,
    title: "Risotto crémeux",
    image: risottoImg,
    category: "Déjeuner",
    description: "Risotto italien crémeux au parmesan",
    ingredients: ["200g riz arborio","1L bouillon","50g parmesan","1 oignon","Beurre","Huile d'olive"],
    steps: ["Faire revenir l'oignon dans l'huile.","Ajouter le riz et nacrer.","Mouiller progressivement avec bouillon.","Ajouter beurre et parmesan avant de servir."]
  },
  {
    id: 33,
    title: "Salade Niçoise",
    image: saladeNicoiseImg,
    category: "Salade",
    description: "Salade méditerranéenne classique",
    ingredients: ["Salade verte","Thon","Œufs durs","Tomates","Olives","Haricots verts"],
    steps: ["Disposer tous les ingrédients dans un plat.","Assaisonner avec huile d'olive et vinaigre.","Servir frais."]
  },
  {
    id: 34,
    title: "Spaghetti Carbonara",
    image: spaghettiCarbonaraImg,
    category: "Déjeuner",
    description: "Pâtes italiennes à la sauce carbonara",
    ingredients: ["200g spaghetti","100g pancetta","2 œufs","50g parmesan","Poivre"],
    steps: ["Cuire les pâtes al dente.","Faire revenir la pancetta.","Mélanger œufs et parmesan.","Ajouter aux pâtes chaudes et mélanger rapidement.","Servir immédiatement."]
  }
];

export default recipes;
