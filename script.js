function onLoad() {
  const btn = document.querySelector('.navbutton')
  btn.addEventListener('click', onClick )
}

function onClick() {
  const nav = document.querySelector('.navigation')
  if( nav.classList.contains('open') ) {
    nav.classList.remove('open')
  }
  else {
    nav.classList.add('open')
  }
}

window.addEventListener('load', onLoad )
