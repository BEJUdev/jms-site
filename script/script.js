const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
const text = document.querySelector( '.spec_des' );
const newText = text.textContent.replace( /\x20([a-z])\x20/gi, '\u00A0$1\u00A0' );

text.textContent = newText;
const text1 = document.querySelector( '.des_card' );
const newText1 = text1.textContent.replace( /\x20([a-z])\x20/gi, '\u00A0$1\u00A0' );

text1.textContent = newText1;
const text11 = document.querySelector( '.aboutme_des' );
const newText11 = text11.textContent.replace( /\x20([a-z])\x20/gi, '\u00A0$1\u00A0' );

text11.textContent = newText11;
const text111 = document.querySelector( '.spec' );
const newText111 = text111.textContent.replace( /\x20([a-z])\x20/gi, '\u00A0$1\u00A0' );

text111.textContent = newText111;