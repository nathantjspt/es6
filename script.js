// Ambil element
const skills = document.getElementById("skills");

// Buat variabel
const mySkills = ["ES6", "UX Design", "Git"]

// mySkills.pop("Git");

function showSkill(mySkill){ // Normal function
    console.log(mySkill);
}

const showSkill2 = (mySkill) => { // Arrow function
    console.log(mySkill);
};

//forEach
mySkills.forEach(function (mySkill){
    console.log(mySkill);
});

let parent = "<ul>";

mySkills.forEach((mySkill)=>{
    // console.log(mySkill);
    parent += `<li>${mySkill}</li>`;
});

parent += "</ul>";

mySkills.forEach(showSkill2);
skills.innerHTML = parent;