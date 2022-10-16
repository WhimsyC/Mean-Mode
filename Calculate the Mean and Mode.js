arr = [500, 400, 400, 375, 300, 350, 325, 300]

function statsFinder(array) {
    let sum = 0
    let mean = 0
    let most_often_value = 0
    let value_occurrences = 0
    let max_occurrences = 0
    for (e in array) {
        sum += array[e]

        for (i in array) {
        if (array[e] == array[i]) {
            value_occurrences += 1
   
        } else {
            continue
        }
        }
        if (value_occurrences > max_occurrences) {
            most_often_value = array[e]
            max_occurrences = value_occurrences
        }
        
        value_occurrences = 0

    }
    mean = sum / array.length
    let endarr = [mean, most_often_value]
    console.log(endarr);
}





statsFinder([500, 400, 400, 375, 300, 350, 325, 300])


