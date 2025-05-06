const abilityList = document.querySelectorAll('.abilityImage'); 
let abilityName = document.getElementById('abilityName'); 
let abilityDescription = document.getElementById('abilityDesc'); 

function toggleAbility(idx){
    abilityList.forEach(content => content.style.opacity = "0.7"); 
    abilityList[idx].style.opacity = "1"; 

    if (idx === 0) {
        abilityName.textContent = "Electro Field";
        abilityDescription.textContent = "GOARD demolishes his enemy with electromagnetic force field within nearby radius. Upon hit, enemy target will be suppressed for a second.";
    } else if (idx === 1) {
        abilityName.textContent = "Heat Wave";
        abilityDescription.textContent = "GOARD launches a rapid plasma burst that causes heavy AoE damage and disorients enemies briefly.";
    }
}

abilityList.forEach((ability, index) => {
    ability.addEventListener("click", () => toggleAbility(index)); 
});

toggleAbility(0); 