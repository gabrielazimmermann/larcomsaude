// string (textos)
// number (números)
// boolean (true/false)

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // preciso verificar se a seção passou da linha
  // quais dados vou precisar?
  // para buscar id em algum elemento do html não pode ter -, precisa escrever por estenço
  // console.log(services.offsetTop) -> me diz no eixo Y onde está meu id='services'

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // limites da seção //
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

  // && igual porta lógica E A.B
  // ! igual igual porta inversora, troca o resultado boleano 0-1 1-0
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    BackToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: '700'
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card`)

// as aspas não permitem que eu quebre a linha, mas se uso
// acento agudo eu consigo

// function ScrollReveal() {
//   var options = {
//     reveal: function() {}
//   }

//   return options
// }

// ScrollReveal().reveal('#home');

// como criar um objeto no java?

// para identificar modificação no "scroll"

// ele me diz se é true ou false:
// no F12 do navegador ele me responde
// function onScroll () {
// console.log( scrollY > 0)
// }
