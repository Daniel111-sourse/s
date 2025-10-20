let secret_number = Math.floor(Math.random() * 10)+1 ;
let attem = 3
console.log("Я загадал число от 1 до 10. Попробуй угадать его!")



while(attem > 0){
    let UserNumber = Number(prompt('Введите число: '));
    if (UserNumber < secret_number) {
        console.log('Осталось попыток', secret_number)
        console.log('Секретное число больше')
        attem = attem - 1
    } else if(UserNumber === secret_number) {
        console.log('Вы угадали')
        break
    }

    
    else{
        console.log('Секретное число меньше')
        console.log('Осталось попыток', secret_number)
        attem = attem - 1
    }
}
if (attem < 1){
    console.log('Вы проиграли загаданое число было  ' ,secret_number)
}
    

