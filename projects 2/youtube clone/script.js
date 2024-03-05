const buttons = document.querySelectorAll('.but');


function changeButtonColor() {
  
  buttons.forEach(button => {
    
    button.addEventListener('click', function() {
      
      buttons.forEach(btn => {
        if (btn !== this) {
          btn.classList.remove('active');
          btn.style.backgroundColor = ''; 
          btn.style.color = '';
          btn.style.boxShadow = '';
          btn.style.borderColor = '';
        }
      });
      this.classList.toggle('active');
      this.style.backgroundColor = 'white'; 
      this.style.color = 'black';
      this.style.boxShadow = '4px 4px 12px white';
      this.style.borderColor = 'white'

    });
  });
}


changeButtonColor();


