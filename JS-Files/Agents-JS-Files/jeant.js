const abilityList = document.querySelectorAll('.abilityImage'); 
let abilityName = document.getElementById('abilityName'); 
let abilityDescription = document.getElementById('abilityDesc'); 

function toggleAbility(idx){
    abilityList.forEach(content => content.style.opacity = "0.7"); 
    abilityList[idx].style.opacity = "1"; 

    if (idx === 0) {
        abilityName.textContent = "Shockwave";
        abilityDescription.textContent = "JEANT charges up electricity from her body to deal aura damage to her surrounding. The aura deals devastating continuous AoE damage.";
    } else if (idx === 1) {
        abilityName.textContent = "Swift Boots";
        abilityDescription.textContent = "JEANT activate the swift boots go gain 30% Movement Speed for 10 seconds and leave no trace of foot steps.";
    }
}

abilityList.forEach((ability, index) => {
    ability.addEventListener("click", () => toggleAbility(index)); 
});

toggleAbility(0); 