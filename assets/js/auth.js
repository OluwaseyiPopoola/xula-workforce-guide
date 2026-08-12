// auth.js

// 1. MSAL Configuration
const msalConfig = {
  auth: {
    // Paste your Application (client) ID
    clientId: "759b181f-c3b6-4d6d-a56a-9cba6921b153",

    // Paste your Directory (tenant) ID
    authority:
      "https://login.microsoftonline.com/4b44f3a2-0fa4-4cc3-af7c-a873151ffd68",

    // Must match the exact Redirect URI set in Azure
    redirectUri: "http://localhost:5500/pages/index.html",
  },
  cache: {
    cacheLocation: "localStorage",
  },
};

// 2. Initialize the MSAL PublicClientApplication object
const myMsal = new msal.PublicClientApplication(msalConfig);

// 3. Handle Auth on Page Load
myMsal.initialize().then(() => {
  myMsal
    .handleRedirectPromise()
    .then((response) => {
      if (response) {
        console.log("Logged in:", response.account);
        updateUIForLoggedInUser(response.account);
      } else {
        const currentAccounts = myMsal.getAllAccounts();
        if (currentAccounts.length > 0) {
          updateUIForLoggedInUser(currentAccounts[0]);
        }
      }
    })
    .catch((error) => {
      console.error("Auth Error:", error);
    });
});

// Triggered when user clicks the Sign In button
function signIn() {
  myMsal.loginRedirect({
    scopes: ["User.Read"], // Requests basic profile access (Name, Email)
  });
}

// Triggered when user clicks Sign Out
function signOut() {
  myMsal.logoutRedirect();
}

// Dynamically updates elements on the page once logged in
function updateUIForLoggedInUser(account) {
  console.log("Welcome back,", account.name);
  console.log("Student ID:", account.localAccountId);

  const signinBtn = document.getElementById("signin-btn");
  const btnLink = document.querySelector("#join-now .btn-link");

  if (signinBtn) {
    signinBtn.textContent = `Welcome Back, ${account.name}.`;
    signinBtn.disabled = tru;
  }
}
