const baseUrl = 'https://swapi.dev/api/'
const baseAPI = 'api/'

let query = document.querySelector('input')
let searchBtn = document.querySelector('button')
let variable1 = document.querySelector('#variable1')
let starShip = document.querySelector('#starShip')
let selector = document.querySelector('#questions')
let request = []
let field = "name"
let id = 0
let option = ""

const attributes = [
    { id: 1, attributeGet: "height", subAttribute: "", target: "Darth Vader" },
    { id: 2, attributeGet: "population", subAttribute: "", target: "Alderaan" },
    { id: 3, attributeGet: "manufacturer", subAttribute: "", target: "Millennium Falcon" },
    { id: 4, attributeGet: "species", subAttribute: "name", target: "C-3PO" },
    { id: 5, attributeGet: "films", subAttribute: "title", target: "Obi-Wan Kenobi" },
    { id: 6, attributeGet: "*", subAttribute: "", target: "Millennium Falcon" },
    { id: 7, attributeGet: "residents", subAttribute: "name", target: "Alderaan" }]

const getTarget = (id) => id ? attributes.find(el => el["id"] === id)["target"] : ""
const getAttribute = (id) => id ? attributes.find(el => el["id"] === id)["attributeGet"] : ""
const getSubAttribute = (id) => option ? attributes.find(el => el["id"] === id)["subAttribute"] : ""
const getStarshipProperty = async (data) => {
    for (let k in data) {
        let key = document.createElement("span")
        let value = document.createElement("span")
        let container = document.createElement("div")
        let subAttribute = ""
        if (k === "pilots") subAttribute = "name"
        else if (k === "films") subAttribute = "title"
        key.textContent = k + ":"
        key.style.cssText = "margin: 10px"
        if (data[k] && k !== "url" && (Array.isArray(data[k]) || data[k].includes(baseAPI)))
            value.textContent = await getArrayOfData(data[k], "", subAttribute)
        else value.textContent = data[k]
        value.style.cssText = "margin: 10px"
        starShip.appendChild(container)
        container.appendChild(key)
        container.appendChild(value)
    }
}

const getArrayOfData = async (data, attribute, subAttribute) => {
    let res = ""
    for (const el of data) {
        if (el.includes("https"))
            res += await getSWAPIData(el.split(baseAPI)[1], attribute, subAttribute) + ", "
    }
    return res
}

const getSWAPIData = async (req, attribute, subAttribute) => {
    let result = ""
    await axios.get(`${baseUrl}${req}`)
        .then(res => {
            if (res.data.results) result = res.data.results
            else if (res.data) result = res.data[subAttribute]
            else if (res) result = res[attribute]
        })
        .catch(err => console.log(err))
    return result
}

const submitHandler = async (e) => {
    e.preventDefault()
    let res = ""
    let outPut = ""
    if (!query.value || !selector.value) {
        alert('Search fields is empty')
        return
    }
    let value = query.value.trim()
    request.forEach((el, index) => el.includes("?") ? request[index] += value : request[index] = el)
    if (value) res = await getSWAPIData(request[0], field)
    let attribute = getAttribute(id)
    let subAttribute = getSubAttribute(id)
    let data = res[0]
    if (attribute === "*") {
        getStarshipProperty(data)
        return
    } else data = data[attribute]
    if (Array.isArray(data) && data.length) outPut = await getArrayOfData(data, attribute, subAttribute)
    else outPut = data
    variable1.textContent = outPut
}

const addToInput = (e) => {
    e.preventDefault()
    variable1.textContent = ""
    starShip.textContent = ""
    option = selector.value.trim()
    if (!option) return

    id = e.target.options.selectedIndex
    request = [option]
    query.value = getTarget(id)
}
selector.addEventListener('change', addToInput)
searchBtn.addEventListener('click', submitHandler)