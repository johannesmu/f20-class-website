function onLoad() {
  const btn = document.querySelector('.navbutton')
  btn.addEventListener('click', onClick )
}

function onClick() {
  const nav = document.querySelector('.navigation')
  const btn = document.querySelector('.navbutton')
  if( nav.classList.contains('open') ) {
    nav.classList.remove('open')
    btn.blur()
  }
  else {
    nav.classList.add('open')
  }
}

window.addEventListener('load', onLoad )
