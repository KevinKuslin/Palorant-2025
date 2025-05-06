const abilityList = document.querySelectorAll('.abilityImage'); 
let abilityName = document.getElementById('abilityName'); 
let abilityDescription = document.getElementById('abilityDesc'); 

function toggleAbility(idx){
    abilityList.forEach(content => content.style.opacity = "0.7"); 
    abilityList[idx].style.opacity = "1"; 

    if (idx === 0) {
        abilityName.textContent = "Focus Term";
        abilityDescription.textContent = "CLINT unleashes his inner-rage towards the enemy. Unhingely increases his damage by 20% and Movement Speed by 25%.";
    } else if (idx === 1) {
        abilityName.textContent = "Piercer";
        abilityDescription.textContent = "CLINT neglects enemy's armor for 5 seconds. Leaving his enemy vulnerable and easy target for him.";
    }
}

abilityList.forEach((ability, index) => {
    ability.addEventListener("click", () => toggleAbility(index)); 
});

toggleAbility(0); 