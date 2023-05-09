// Selección de elementos HTML
const numbers = document.querySelectorAll('.numbers');
const submit = document.querySelector('#submit');
const rating = document.querySelector('.rating');
const thankYou = document.querySelector('.thank_you');
const ratingGiven = document.querySelector('#rating_given');

let check;

numbers.forEach(function(number) {
  number.addEventListener('click', function() {
    
    numbers.forEach(function(number) {
      number.style.backgroundColor = 'var(--DarkBlue)';
      number.style.color = '';
    });
    this.style.backgroundColor = 'var(--Orange)';
    this.style.color = 'var(--White)';

    check = this.innerHTML;
  });
});


submit.addEventListener('click', function(evt) {
  evt.preventDefault();

  if (check == undefined || check == "") {
    rating.classList.add('unhide');
    thankYou.classList.add('hide');
    alert('Please select a rating');
  } else {
    rating.classList.remove('unhide');
    thankYou.classList.remove('hide');
    rating.classList.add('hide');
    thankYou.classList.add('unhide');

    
    ratingGiven.innerHTML = check;
  }
});
