// tcp.js

// Part 1: Centralized Data Structure
const tcpOperationsData = {
  "clock-in": {
    title: "How To Clock In",
    steps: [
      {
        title: "Enter ID",
        description: "Enter your employee ID number in the ID Number Field",
        image: null
      },
      {
        title: "Clock In",
        description: "Press the Green 'Clock In' button",
        image: null
      },
      {
        title: "Confirm Name",
        description: "Confirm your correct first and last name show on the screen",
        image: null
      },
      {
        title: "Continue",
        description: "Press the 'Continue' button",
        image: null
      },
      {
        title: "Select Job Code",
        description: "Select the Job Code/Position you will be working if prompted",
        image: null
      },
      {
        title: "Continue",
        description: "Press the 'Continue' button",
        image: null
      },
      {
        title: "Confirm Operation",
        description: "Press the 'OK' button on the clock operation confirmation screen",
        image: null
      },
      {
        title: "Success",
        description: "You are now Clocked In!",
        image: null
      }
    ]
  },

  "clock-out": {
    title: "How To Clock Out",
    steps: [
      {
        title: "Enter ID",
        description: "Enter your employee ID number in the ID Number Field",
        image: null
      },
      {
        title: "Clock Out",
        description: "Press the Blue 'Clock Out' button",
        image: null
      },
      {
        title: "Confirm Name",
        description: "Confirm your correct first and last name show on the clock",
        image: null
      },
      {
        title: "Continue",
        description: "Press the 'Continue' button",
        image: null
      },
      {
        title: "Confirm Operation",
        description: "Press the 'OK' button on the clock operation confirmation screen",
        image: null
      },
      {
        title: "Success",
        description: "You are now Clocked Out!",
        image: null
      }
    ]
  },
  
  "leave-break": {
    title: "How To Leave on Break",
    steps: [
      {
        title: "Enter ID",
        description: "Enter your employee ID number in the ID Number Field",
        image: null
      },
      {
        title: "Leave on Break",
        description: "Press the White 'Leave on Break' button",
        image: null
      },
      {
        title: "Confirm Name",
        description: "Confirm your correct first and last name show on the clock",
        image: null
      },
      {
        title: "Continue",
        description: "Press the 'Continue' button",
        image: null
      },
      {
        title: "Confirm Operation",
        description: "Press the 'OK' button on the clock operation confirmation screen",
        image: null
      },
      {
        title: "Success",
        description: "You are now On Break!",
        image: null
      }
    ]
  },

  "return-break": {
    title: "How To Return From Break",
    steps: [
      {
        title: "Enter ID",
        description: "Enter your employee ID number in the ID Number Field",
        image: null
      },
      {
        title: "Return From Break",
        description: "Press the White 'Return From Break' button",
        image: null
      },
      {
        title: "Confirm Name",
        description: "Confirm your correct first and last name show on the clock",
        image: null
      },
      {
        title: "Continue",
        description: "Press the 'Continue' button",
        image: null
      },
      {
        title: "Select Job Code",
        description: "Select the Job Code/Position you will be working if prompted",
        image: null
      },
      {
        title: "Continue",
        description: "Press the 'Continue' button",
        image: null
      },
      {
        title: "Confirm Operation",
        description: "Press the 'OK' button on the clock operation confirmation screen",
        image: null
      },
      {
        title: "Success",
        description: "You are now Back From Your Break!",
        image: null
      }
    ]
  },

  "change-position": {
    title: "How To Change Position/Job Code",
    steps: [
      {
        title: "Enter ID",
        description: "Enter your employee ID number in the ID Number Field",
        image: null
      },
      {
        title: "Change Job Code",
        description: "Press the 'Change Job Code' button",
        image: null
      },
      {
        title: "Confirm Name",
        description: "Confirm your correct first and last name show on the clock",
        image: null
      },
      {
        title: "Continue",
        description: "Press the 'Continue' button",
        image: null
      },
      {
        title: "Select Next Job",
        description: "Select the Job Code/Position you will be working next",
        image: null
      },
      {
        title: "Continue",
        description: "Press the 'Continue' button",
        image: null
      },
      {
        title: "Confirm Operation",
        description: "Press the 'OK' button on the clock operation confirmation screen",
        image: null
      },
      {
        title: "Success",
        description: "You have changed your Job Code!",
        image: null
      }
    ]
  }
};


// Part 2: DOM Selection & State Management

// --- State Variables ---
// These keep track of which operation the user clicked and what step they are on
let currentOperationKey = null; 
let currentStepIndex = 0; 

// --- Section Elements ---
// The main containers we will hide and show
const introSection = document.getElementById('tcp-introduction');
const operationsSection = document.getElementById('tcp-operations');
const stepsArticle = document.getElementById('tcp-steps');

// --- Button Elements ---
const operationBtns = document.querySelectorAll('.tcp-operation-btn');
const backToHubBtn = document.getElementById('back-to-hub-btn');
const prevStepBtn = document.getElementById('prev-step-btn');
const nextStepBtn = document.getElementById('next-step-btn');

// --- Dynamic Content Elements ---
// The specific tags where we will inject our text and HTML
const operationTitleEl = document.getElementById('operation-title');
const stepsNavUl = document.querySelector('#steps-nav ul');
const stepNoEl = document.getElementById('step-no');
const stepTitleEl = document.getElementById('step-title');
const stepDescriptionEl = document.getElementById('step-description');
const stepImgEl = document.getElementById('step-img');


const operations = ["clock-in", "clock-out", "leave-break", "return-from-break", "change-position"];

function showHubView() {
  introSection.style.display = 'flex';
  operationsSection.style.display = 'block';
  stepsArticle.style.display = 'none';
}

function showStepsView() {
  introSection.style.display = 'none';
  operationsSection.style.display = 'none';
  stepsArticle.style.display = 'block';
}

operationBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    currentOperationKey = operations[index];
    currentStepIndex = 0;
    showStepsView();
    renderCurrentStep();
  });

});

backToHubBtn.addEventListener("click", () => {
  showHubView();
});

showHubView();

// Part 4: Dynamic Rendering & Navigation Logic

// SVG icon string for completed checkmarks
const checkmarkSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
`;

// Render function: Rebuilds sidebar list and updates step details
function renderCurrentStep() {
  const currentOp = tcpOperationsData[currentOperationKey];
  console.log("Rendering step:", currentStepIndex, "of operation:", currentOperationKey);
  if (!currentOp) return;

  // 1. Update operation main header
  operationTitleEl.textContent = currentOp.title;

  // 2. Render left sidebar step list
  stepsNavUl.innerHTML = ""; // Clear static HTML items

  currentOp.steps.forEach((step, index) => {
    const li = document.createElement("li");

    // Add active/completed classes
    if (index < currentStepIndex) {
      li.classList.add("completed");
    } else if (index === currentStepIndex) {
      li.classList.add("active");
    }

    // Build sidebar item structure
    li.innerHTML = `
      <span class="step-number">${index + 1}</span>
      <span class="step-text">${step.title}</span>
      <span class="step-check">${index < currentStepIndex ? checkmarkSVG : ""}</span>
    `;

    // Allow clicking any sidebar step directly to jump to it
    li.addEventListener("click", () => {
      currentStepIndex = index;
      renderCurrentStep();
    });

    stepsNavUl.appendChild(li);
  });

  // 3. Render right-side step details
  const activeStep = currentOp.steps[currentStepIndex];
  const totalSteps = currentOp.steps.length;

  stepNoEl.textContent = `STEP ${currentStepIndex + 1} OF ${totalSteps}`;
  stepTitleEl.textContent = activeStep.title;
  stepDescriptionEl.textContent = activeStep.description;

  // Hide image container if image is null
  if (activeStep.image) {
    stepImgEl.src = activeStep.image;
    stepImgEl.parentElement.style.display = "block";
  } else {
    stepImgEl.parentElement.style.display = "none";
  }

  // 4. Update Previous / Next button states
  if (currentStepIndex === 0) {
    prevStepBtn.style.opacity = "0.5";
    prevStepBtn.style.cursor = "not-allowed";
  } else {
    prevStepBtn.style.opacity = "1";
    prevStepBtn.style.cursor = "pointer";
  }

  if (currentStepIndex === totalSteps - 1) {
    nextStepBtn.textContent = "Finish";
  } else {
    nextStepBtn.textContent = "Next Step";
  }
}

// Next Step / Finish Button Handler
nextStepBtn.addEventListener("click", () => {
  const currentOp = tcpOperationsData[currentOperationKey];
  if (currentStepIndex < currentOp.steps.length - 1) {
    currentStepIndex++;
    renderCurrentStep();
  } else {
    // Return to main hub if "Finish" is clicked on final step
    showHubView();
  }
});

// Previous Step Button Handler
prevStepBtn.addEventListener("click", () => {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    renderCurrentStep();
  }
});



