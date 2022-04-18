let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

// get leads from localStorage, turn back into an arr, save in new variable
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// only display leads if there are any saved in storage
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    // add new leads to arr
    myLeads.push(inputEl.value)
    // clear the input field
    inputEl.value = ""
    // save leads to localStorage as str
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

// delete leads on double click
deleteBtn.addEventListener("dblclick", function() {
    // clear storage, myLeads arr, ulEl
    localStorage.clear()
    myLeads = []
    ulEl.innerHTML = ""
})

function renderLeads() {
    // empty str to hold HTML for list items
    let listItems = ""
    // loop through leads to add to unordered list
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    // access DOM to display on page
    ulEl.innerHTML = listItems  
}
