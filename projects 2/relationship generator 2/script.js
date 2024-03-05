function calculate() {
    const input1 = document.getElementById('input1').value.toLowerCase();
    const input2 = document.getElementById('input2').value.toLowerCase();
    let result = '';
  
    if ((input1 === 'mate' && input2 === 'barbare') || (input1 === 'barbare' && input2 === 'mate')) {
        result = 'frenemy';} 
      else if ((input1 === 'nia' && input2 === 'mate') || (input1 === 'mate' && input2 === 'nia')) {
        result = 'just Friends';}
      else if ((input1 === 'sandro' && input2 === 'barbare') || (input1 === 'barbare' && input2 === 'sandro')) {
        result = 'enemies';} 
      else if ((input1 === 'nia' && input2 === 'sandro') || (input1 === 'sandro' && input2 === 'nia')) {
        result = 'friends';} 
      else if((input1 === 'nia'&& input2 === 'barbare' ) || (input1 === 'barbare' && input2 === 'nia')){
        result = 'best duo';}
      else if((input1 === 'mate'&& input2 === 'janeza' ) || (input1 === 'janeza' && input2 === 'mate')){
        result = 'best duo';}
      else if((input1 === 'janeza'&& input2 === 'barbare' ) || (input1 === 'barbare' && input2 === 'janeza')){
        result = 'best squad leader and best squad member';}
      else if((input1 === 'mate'&& input2 === 'sandro' ) || (input1 === 'sandro' && input2 === 'mate')){
        result = 'best partners';}
      else if((input1 === 'sandro'&& input2 === 'janeza' ) || (input1 === 'janeza' && input2 === 'sandro')){
        result = 'best duo';}
      else if((input1 === 'nia'&& input2 === 'janeza' ) || (input1 === 'janeza' && input2 === 'nia')){
        result = 'best squad leader and best squad member';}
      else{
        result = 'no relationship defineded'
      }

    document.getElementById('result').innerText = result;
  }
  