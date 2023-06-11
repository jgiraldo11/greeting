function greetingName(event) {
    event.preventDefault()
    const firstN = String (event.target.FirstName.value)
    const lastN = event.target.LastName.value 

    document.getElementById("greeting").innerText="Hello "+firstN+" "+lastN+"!"
    
}

const thisIsAConstant = document.querySelector("form")
thisIsAConstant.addEventListener("submit", greetingName)