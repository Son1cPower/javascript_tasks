outer: for (let i = prompt(`Input number > 100`,''); i < 100;) {
    if (!i) break outer  
    i = prompt(`Input number > 100`,'')
    
    }
    
 ///////////////////////////////////////////////
    
    
    let num;
    
    do {
      num = prompt("Введите число больше 100?", 0);
    } while (num <= 100 && num);