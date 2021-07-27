let radialParagraph = document.querySelector('.radial');
let letters = [...radialParagraph.textContent];

letters.forEach((letter, index) =>{
    letters[index] = '<span style="transform:rotate('+index*6+'deg)">'+ letter + '</span>';
}) 

radialParagraph.innerHTML = letters.join('');


console.log(letters);