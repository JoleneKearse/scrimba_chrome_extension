const accordian = document.querySelectorAll(".accordian")

for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function() {
        let content = this.nextElementSibling
        if (content.classList.contains("active")) {
            content.classList.remove("active")
        } else {
            content.classList.add("active")
        }
    }) 
}
