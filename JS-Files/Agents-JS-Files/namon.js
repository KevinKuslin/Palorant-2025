const abilityList = document.querySelectorAll('.abilityImage'); 
let abilityName = document.getElementById('abilityName'); 
let abilityDescription = document.getElementById('abilityDesc'); 

function toggleAbility(idx){
    abilityList.forEach(content => content.style.opacity = "0.7"); 
    abilityList[idx].style.opacity = "1"; 

    if (idx === 0) {
        abilityName.textContent = "Dreamwalk";
        abilityDescription.textContent = "NAMON relesases a shadow projectile of himself across the map. Confusing enemies and detect their location.";
    } else if (idx === 1) {
        abilityName.textContent = "Paradox";
        abilityDescription.textContent = "NAMON creates a dimensional portal to teleport across the map. Entering the portal will give 30% Movement Speed buff.";
    }
}

abilityList.forEach((ability, index) => {
    ability.addEventListener("click", () => toggleAbility(index)); 
});

toggleAbility(0); 