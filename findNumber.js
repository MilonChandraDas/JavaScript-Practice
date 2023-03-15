let find = true
while(find){
     let foundNumber = Math.round(Math.random() * 10);
     if(foundNumber === 9){
          console.log('Yo I am find number of 9');
          find = false
     }else{
          console.log(foundNumber + ' sorry dear');
          
     }
}