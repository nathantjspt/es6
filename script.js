// Ambil element
const skill = document.getElementById("skills");
const primarySkill = document.getElementById("primarySkills");

const mySkills = ["ES6", "Git", "Web Development", "Web Design"];

// Map
// Undefined
const printSkillsForEach = mySkills.forEach((skill)=> {
    return skill;
});

// Benar
const printSkillsMap = mySkills.map((skill)=> {
    return skill;
});

skills.innerHTML = printSkillsMap;

// Filter
const printPrimarySkill = mySkills.filter((skill)=>{
    return skill == "ES6";
});

primarySkill.innerHTML = printPrimarySkill;