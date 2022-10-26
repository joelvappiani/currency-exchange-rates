let currenciesArr = []
fetch('https://v6.exchangerate-api.com/v6/995411cca5f4f6eebefc3b20/latest/USD')
.then(response => response.json())
.then(data => {

    
    for (let cur in data.conversion_rates){
        currenciesArr.push(cur)
    }
    for (let cur of currenciesArr){
        document.querySelector('#devise1').innerHTML += `
        <option value="${cur}">${cur}</option>
        `
        document.querySelector('#devise2').innerHTML += `
        <option value="${cur}">${cur}</option>
        `

    }
return data
})



document.querySelector('#btn-convert').addEventListener('click', ()=> {
    const devise1 = document.querySelector('#devise1').value
    const devise2 = document.querySelector('#devise2').value
    const input = document.querySelector('#input').value
    if(input) {
        fetch(`https://v6.exchangerate-api.com/v6/995411cca5f4f6eebefc3b20/pair/${devise1}/${devise2}/${input}`)
.then(response => response.json())
.then(data => {
    console.log(data.conversion_result)
    document.querySelector('#result').textContent = `${data.conversion_result} ${devise2}`
    return data;
})
    } else {
        document.querySelector('#result').textContent = 'Please enter a value'
    }

    
})


