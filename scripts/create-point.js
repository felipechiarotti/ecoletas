
let cityCombo = document.querySelector("select[name=city]")
let ufCombo = document.querySelector("select[name=uf]")
let ufHidden = document.querySelector("select[name=ufName]")
let cityHidden = document.querySelector("select[name=cityName]")


let urlUf = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

function Initialize(){
    populateCombo(urlUf, ufCombo)
    ufCombo.addEventListener("change", populateCitiesCombo)
    cityCombo.addEventListener("change", setCityHidden)
}

function populateCombo(url, campo, callback){
    let defaultText = campo.innerHTML
    campo.innerHTML = `<option value="">Carregando...</option>`
    fetch(url)
    .then( res => res.json() )
    .then( data => {
            campo.innerHTML = defaultText
        data.forEach(element => {
            campo.innerHTML += `<option value="${element.id}">${element.nome}</option>`
        })
    }).then(callback)
}

function populateCitiesCombo(event){
 let selectedUfId = event.target.value
 let selectedUfIndex = event.target.selectedIndex
 let urlCities = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUfId}/municipios`

 ufHidden = event.target.options[selectedUfIndex].text
 cityCombo.disabled = true


 populateCombo(urlCities, cityCombo, () =>{
     cityCombo.disabled = false
 })
}

function setCityHidden(event){
    let selectedCityId = event.target.value
    let selectedCityIndex = event.target.selectedIndex
    cityHidden = event.target.options[selectedCityIndex].text
}

Initialize()



let itemsToCollect = document.querySelectorAll(".items-grid li")
let selectedItems = []
let collectedItems = document.querySelector("input[name=items]")

itemsToCollect.forEach(element => {
    element.addEventListener("click", handleSelectedItem)
})

function handleSelectedItem(event){
    let item = event.target;

    item.classList.toggle("selected")
    let itemId = item.dataset.id;

    let indexSelectedItem = selectedItems.indexOf(itemId)
    if(indexSelectedItem < 0){
        selectedItems.push(itemId)
    }else{
        selectedItems.splice(indexSelectedItem, 1)
    }
    
    collectedItems.value = selectedItems.sort();
    console.log(collectedItems)
}