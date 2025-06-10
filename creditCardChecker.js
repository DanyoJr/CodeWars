function somarFinal (test){
    let total = 0
    for(let num of test){
        total += num
    }
    return total
}
function somar (array){
    let total = 0

    for (let num of array) {
        if (num > 9) {
          num = Math.floor(num / 10) + (num % 10);
        }
        total += num;
      }
      return total;
}

function double (num) {
    return num = num * 2
}

function mult (num) {
    return num = num * 1
}

function validCard(card) {
    
    let off = card.trim().replace(/\s/g, '')
    let arr = off.split("") 

    arr[0] = double(arr[0])
    arr[1] = mult(arr[1])
    arr[2] = double(arr[2])
    arr[3] = mult(arr[3])

    arr[4] = double(arr[4])
    arr[5] = mult(arr[5])
    arr[6] = double(arr[6])
    arr[7] = mult(arr[7])

    arr[8] = double(arr[8])
    arr[9] = mult(arr[9])
    arr[10] = double(arr[10])
    arr[11] = mult(arr[11])

    arr[12] = double(arr[12])
    arr[13] = mult(arr[13])
    arr[14] = double(arr[14])
    arr[15] = mult(arr[15])


    let arr1 = arr

    let a1 = somar(arr1)

    if(a1 % 10 == 0){
       return true
    }

    return false
}

console.log(validCard("5894 6295 9515 7871"))
