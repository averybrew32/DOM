document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("filterContent").style.display = "none";
})

function showFilter(){
    let filter = document.getElementById("filterContent");
    if(filter.style.display === "none"){
        filter.style.display = "block";
    } else {
        filter.style.display = "none";
    }
}

function showAddNew(){
    let content = document.getElementById("newContent");
    if(content.style.display === "none"){
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function filterArticles(){
    let opinion = document.getElementById("opinionCheckbox");
    let recipe = document.getElementById("recipeCheckbox");
    let update = document.getElementById("updateCheckbox");
    let o = document.querySelectorAll(".opinion");
    let r = document.querySelectorAll(".recipe");
    let u = document.querySelectorAll(".update");

    o.forEach(element =>{
    if(opinion.checked){
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
    })
    
    r.forEach(element =>{
    if(recipe.checked){
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
    })

    u.forEach(element =>{
    if(update.checked){
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
    })
}

function addNewArticle(){
    let type = "";
    let text = "";

    let opinionRadio = document.getElementById("opinionRadio").checked;
    let recipeRadio = document.getElementById("recipeRadio").checked;
    let lifeRadio = document.getElementById("lifeRadio").checked;

    if(opinionRadio){
        type = "opinion";
        text = "Opinion";
    } else if (recipeRadio) {
        type = "recipe";
        text = "Recipe";
    } else if(lifeRadio){
        type = "update";
        text = "Update";
    }

    let articles = document.getElementById("articleList");
    let newArticle = document.createElement("article");
    newArticle.classList.add(type);

    newArticle.innerHTML = `
    <span class="marker">${text}</span>
    <h2>${document.getElementById("inputHeader").value}</h2>
    <p>${document.getElementById("inputArticle").value}</p>
    <p><a href="#">Read more...</a></p>
    `;  

    articles.appendChild(newArticle);
}