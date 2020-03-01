// MULTI STEP FORM
let btn_prevForm = document.getElementById("btn_prevForm");
let btn_nextForm = document.getElementById("btn_nextForm");
const submitButton = document.getElementById('validateFormStep');
const form = document.getElementById('stepByStepForm');
let dotsForm = document.getElementsByClassName('progress-bar__dot');
const numberOfSteps = 3;
let currentStep = 1;

for(let i = 0 ; i < dotsForm.length ; ++i){
   dotsForm[i].addEventListener('click', () => {
     goToStep(i + 1) 
   })
}


btn_prevForm.addEventListener("click", function(e){
   e.preventDefault()
   currentStep -= 1
   goToStep(currentStep)
});

btn_nextForm.addEventListener("click", function(e){
   e.preventDefault()
   currentStep += 1
   goToStep(currentStep)
});


function goToStep(stepNumber){   
   currentStep = stepNumber
   
   let inputsToHide = document.getElementsByClassName('step')
   let inputs = document.getElementsByClassName(`step${currentStep}`)
   let indicators = document.getElementsByClassName('progress-bar__dot')
   
   for(let i = indicators.length-1; i >= currentStep ; --i){
      indicators[i].classList.remove('full')
   }
   
   for(let i = 0; i < currentStep; ++i){
      indicators[i].classList.add('full')
   }
   
   //hide all input
   for (let i = 0; i < inputsToHide.length; ++i) {
      hide(inputsToHide[i])
   }
   
   //only show the right one
   for (let i = 0; i < inputs.length; ++i) {
      show(inputs[i])
   }
   
   //if we reached final step
   if(currentStep === numberOfSteps){
      enable(btn_prevForm)
      disable(btn_nextForm)
      show(submitButtonForm)
   }
   
   //else if first step
   else if(currentStep === 1){
     disable(btn_prevForm)
      enable(next)
      hide(submitButtonForm)
   }
   
   else {
      enable(btn_prevForm)
      enable(next)
      hide(submitButtonForm)
   }
}

function enable(elem) {
   elem.classList.remove("disabled");
   elem.disabled = false;
}

function disable(elem) {
   elem.classList.add("disabled");
   elem.disabled = true;
}

function show(elem){
   elem.classList.remove('hidden')
}

function hide(elem){
   elem.classList.add('hidden')
}