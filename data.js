// data.js

// This is the default, empty inventory for a new token
// Based on your spec
export const defaultInventoryData = {
  packType: "None",
  currency: {
    cp: 0,
    sp: 0,
    gp: 0,
    pp: 0,
  },
  bankedCurrency: [
    // { note: "Vault 1", amount: 1000 }
  ],
  items: [
    // { name: "Health Potion", type: "Consumable", quantity: 2, weight: 0.5, notes: "Red liquid", attuned: false }
  ],
  equipped: {
    weapon1: null,
    weapon2: null,
    weapon3: null,
    weapon4: null,
    armor1: null,
    armor2: null,
    armor3: null,
    armor4: null,
    clothing1: null,
    clothing2: null,
    clothing3: null,
    clothing4: null,
    jewelry1: null,
    jewelry2: null,
    jewelry3: null,
    jewelry4: null,
  },
  quickSlots: [
    null, null, null, null, null, null
  ],
  externalStorage: [
    // { name: "Saddlebag", type: "Saddlebag", items: [...] }
  ]
};
