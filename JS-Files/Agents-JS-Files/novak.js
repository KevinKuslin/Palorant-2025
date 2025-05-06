const abilityList = document.querySelectorAll('.abilityImage'); 
let abilityName = document.getElementById('abilityName'); 
let abilityDescription = document.getElementById('abilityDesc'); 

function toggleAbility(idx){
    abilityList.forEach(content => content.style.opacity = "0.7"); 
    abilityList[idx].style.opacity = "1"; 

    if (idx === 0) {
        abilityName.textContent = "Truncheon";
        abilityDescription.textContent = "NOVAK strikes a snow lightning blast in AoE damage. Deducts enemy's HP in continuous damage with slow effects.";
    } else if (idx === 1) {
        abilityName.textContent = "Penetrator";
        abilityDescription.textContent = "NOVAK fires 5 shots with his specialized handcrafted bullet. The shots will increase his critical damage by 30%."; 
    }
}

abilityList.forEach((ability, index) => {
    ability.addEventListener("click", () => toggleAbility(index)); 
});

toggleAbility(0); 