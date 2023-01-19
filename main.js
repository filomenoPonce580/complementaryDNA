function DNAStrand(dna){
  //split the string
  let array = dna.split('')
  
  //use for loop with conditional statement
  for(let i = 0; i < array.length; i++){
      if(array[i] === 'G'){
          array[i] = 'C'
      }else if(array[i] === 'C'){
          array[i] = 'G'
      }else if(array[i] === 'A'){
          array[i] = 'T'
      }else if(array[i] === 'T'){
          array[i] = 'A'
      }
    }
  
  //join and return
  return array.join('')
