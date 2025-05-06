const abilityList = document.querySelectorAll('.abilityImage'); 
let abilityName = document.getElementById('abilityName'); 
let abilityDescription = document.getElementById('abilityDesc'); 

function toggleAbility(idx){
    abilityList.forEach(content => content.style.opacity = "0.7"); 
    abilityList[idx].style.opacity = "1"; 

    if (idx === 0) {
        abilityName.textContent = "Explo-Wind";
        abilityDescription.textContent = "ALEEN explodes a wind storm to designated area. Creating blind spot for enemies around and dealing continuous damage.";
    } else if (idx === 1) {
        abilityName.textContent = "Dagger Dive";
        abilityDescription.textContent = "ALEEN swiftly controls her 7 daggers to struck target enemy all at once. Each Dagger will consume 7% of enemy's max HP.";
    }
}

abilityList.forEach((ability, index) => {
    ability.addEventListener("click", () => toggleAbility(index)); 
});

toggleAbility(0); 