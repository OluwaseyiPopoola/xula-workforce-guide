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

OperationBtns.forEach((btn, index) => {
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



