# COBOL Student Account Management System Test Plan

This test plan covers all business logic implemented in the COBOL application. It is designed for validation with business stakeholders and will be used as a basis for future unit and integration tests in a Node.js transformation.

| Test Case ID | Test Case Description                | Pre-conditions                | Test Steps                                                                 | Expected Result                                  | Actual Result | Status (Pass/Fail) | Comments         |
|--------------|--------------------------------------|-------------------------------|----------------------------------------------------------------------------|--------------------------------------------------|---------------|--------------------|------------------|
| TC01         | View initial account balance         | Account system initialized    | 1. Start app<br>2. Select 'View Balance'                                   | Balance displayed as 1000.00                     |               |                    |                  |
| TC02         | Credit account with valid amount     | Account balance >= 0          | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter 200.00              | Balance increases by 200.00<br>New balance shown |               |                    |                  |
| TC03         | Debit account with sufficient funds  | Account balance >= debit amt  | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter 100.00               | Balance decreases by 100.00<br>New balance shown |               |                    |                  |
| TC04         | Debit account with insufficient funds| Account balance < debit amt   | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter 2000.00              | Error message: 'Insufficient funds'              |               |                    |                  |
| TC05         | Invalid menu choice                  | App running                   | 1. Start app<br>2. Enter invalid menu option (e.g., 5)                      | Error message: 'Invalid choice, please select 1-4.' |           |                    |                  |
| TC06         | Exit application                     | App running                   | 1. Start app<br>2. Select 'Exit'                                            | App exits with goodbye message                   |               |                    |                  |
| TC07         | Multiple credit and debit operations | Account balance >= 0          | 1. Start app<br>2. Perform credit<br>3. Perform debit<br>4. View balance    | Balance reflects all operations correctly         |               |                    |                  |

---

Update the Actual Result, Status, and Comments columns after executing each test case.