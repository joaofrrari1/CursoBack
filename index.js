const express = require('express')

const app = express()

app.get('/cursoback', function (reg, res){
  res.send('NOSSA API TA FUNCIONANDO')
})

app.listen(8000)


















/*function filtraPares(arr) {
    nova_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            nova_arr.push(arr[i])
        }
    }
    return nova_arr
  }
arr = [1,2,3,4,5]
resultado = filtraPares(arr)
console.log(resultado);*/