// src/accounting/index.test.js
const fs = require('fs');
const path = require('path');
const BALANCE_FILE = path.join(__dirname, 'balance.json');
const INITIAL_BALANCE = 1000.00;

// Helper functions to simulate app logic
function loadBalance() {
  if (!fs.existsSync(BALANCE_FILE)) {
    fs.writeFileSync(BALANCE_FILE, JSON.stringify({ balance: INITIAL_BALANCE }));
  }
  const data = JSON.parse(fs.readFileSync(BALANCE_FILE));
  return data.balance;
}

function saveBalance(balance) {
  fs.writeFileSync(BALANCE_FILE, JSON.stringify({ balance }));
}

function creditAccount(amount) {
  let balance = loadBalance();
  balance += amount;
  saveBalance(balance);
  return balance;
}

function debitAccount(amount) {
  let balance = loadBalance();
  if (balance >= amount) {
    balance -= amount;
    saveBalance(balance);
    return { success: true, balance };
  } else {
    return { success: false, balance };
  }
}

function resetBalance() {
  saveBalance(INITIAL_BALANCE);
}

describe('Account Management System', () => {
  beforeEach(() => {
    resetBalance();
  });

  test('TC01: View initial account balance', () => {
    expect(loadBalance()).toBe(INITIAL_BALANCE);
  });

  test('TC02: Credit account with valid amount', () => {
    const newBalance = creditAccount(200);
    expect(newBalance).toBe(INITIAL_BALANCE + 200);
  });

  test('TC03: Debit account with sufficient funds', () => {
    creditAccount(100); // Ensure enough funds
    const result = debitAccount(100);
    expect(result.success).toBe(true);
    expect(result.balance).toBe(INITIAL_BALANCE);
  });

  test('TC04: Debit account with insufficient funds', () => {
    const result = debitAccount(2000);
    expect(result.success).toBe(false);
    expect(result.balance).toBe(INITIAL_BALANCE);
  });

  test('TC07: Multiple credit and debit operations', () => {
    creditAccount(300);
    debitAccount(150);
    const balance = loadBalance();
    expect(balance).toBe(INITIAL_BALANCE + 300 - 150);
  });
});
