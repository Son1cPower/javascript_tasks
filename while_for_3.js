let n=prompt('Введите число больше 2 из интервала от 2 до..',"")

for (let i=2;i<=n; i++) { //start

    for (let j=2;j<=i;j++) {

        if (i%j==0) {
            
            if (i!=j){
            break
            }

            else {alert(i)}

         }

 
    }


} // end