console.log('Coucou Index.js !!!!')

const titreH1 = document.querySelector('h1')
titreH1.textContent = 'Youhou j\'ai changé le titre'

const listeUl = document.createElement('ul')
listeUl.classList.add('flex', 'flex-row', 'flex-wrap', 'gap-8', 'justify-center', 'items-center')
document.body.appendChild(listeUl)
// Bonne partique, créer un fragment intermédiaire
const fragment = document.createDocumentFragment()

for (let i = 0; i < 10000; i++) {
  const itemDeListe = document.createElement('li')
  itemDeListe.textContent = `Item n°${i}`
  // Mauvaise pratique !!! Agir directement sur le DOM à chaque tour (100 000 fois)
  // listeUl.appendChild(itemDeListe)
  // Bonne pratique, ajouter l'élément au fragment à chaque tour de boucle

  fragment.appendChild(itemDeListe)
}

listeUl.appendChild(fragment)
