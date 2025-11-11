import './style.css';
import OBR from '@owlbear-rodeo/sdk';

// --- CONFIGURATION ---
const ID = "com.advanced-inventory";
const STICKY_TOKEN_KEY = `${ID}.sticky-token-id`;
const POPOVER_ID = `${ID}/popover`;

// --- RENDER FUNCTIONS (for the popover) ---
function renderInventory(tokenId) {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <h1>Advanced Inventory</h1>
    <p>Rendering inventory for Token ID:</p>
    <p>${tokenId}</p>
  `;
}

function renderNoTokenSelected() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <h1>Advanced Inventory</h1>
    <p>Please right-click a token and select "Inventory" to begin.</p>
  `;
}

/**
 * This function runs *inside* the popover (index.html)
 * to render the UI.
 */
function setupPopover() {
  // Get the ?token=... ID from the URL if it exists
  const urlParams = new URLSearchParams(window.location.search);
  const contextTokenId = urlParams.get("token");

  let tokenIdToShow = null;

  if (contextTokenId) {
    // 1. OPENED FROM CONTEXT MENU
    // Save this as the new "sticky" token.
    localStorage.setItem(STICKY_TOKEN_KEY, contextTokenId);
    tokenIdToShow = contextTokenId;
  } else {
    // 2. OPENED FROM TOOLBAR
    // Try to get the sticky token from storage.
    tokenIdToShow = localStorage.getItem(STICKY_TOKEN_KEY);
  }

  // Render the correct UI
  if (tokenIdToShow) {
    renderInventory(tokenIdToShow);
  } else {
    renderNoTokenSelected();
  }
  
  // Set the size of our window from the inside
  OBR.popover.setHeight(600);
  OBR.popover.setWidth(500);
}

/**
 * This function sets up the global context menu.
 */
function setupContextMenu() {
  OBR.contextMenu.create({
    id: `${ID}/context-menu`,
    icons: [
      {
        icon: "/icon.svg",
        label: "Inventory",
        filter: {
          every: [{ key: "layer", value: "CHARACTER" }],
        },
      },
    ],
    onClick(context) {
      const tokenId = context.items[0].id;
      
      // When context menu is clicked, open the popover
      // and pass the token ID in the URL.
      OBR.popover.open({
        id: POPOVER_ID,
        url: `/index.html?token=${tokenId}`,
        height: 600,
        width: 500,
      });
    },
  });
}

// --- MAIN ENTRY POINT ---
OBR.onReady(() => {
  // Set up the global context menu
  setupContextMenu();

  // Now, set up the UI for this popover instance
  setupPopover();
});
