let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

// get leads from localStorage, turn back into an arr, save in new variable
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// only display leads if there are any saved in storage
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click", function() {
    // add new leads to arr
    myLeads.push(inputEl.value)
    // clear the input field
    inputEl.value = ""
    // save leads to localStorage as str
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

// grab the current tab from Google API
tabBtn.addEventListener("click", function() {
    // access both the chrome object & tabs object
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

// delete leads on double click
deleteBtn.addEventListener("dblclick", function() {
    // clear storage, myLeads arr, ulEl
    localStorage.clear()
    myLeads = []
    ulEl.innerHTML = ""
})

function render(leads) {
    // empty str to hold HTML for list items
    let listItems = ""
    // loop through leads to add to unordered list
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    // access DOM to display on page
    ulEl.innerHTML = listItems  
}