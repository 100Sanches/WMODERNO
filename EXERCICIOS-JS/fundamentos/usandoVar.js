{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)

var numero = 1

{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// Usando var em LOOP

for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log('i =', i)