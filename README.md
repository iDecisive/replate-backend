# Back-End

## Account CRUD

Endpoint | Method | Description | Required Data
--- | --- | --- | ---
/register | POST | Creates a new account. Pass an object with the key "accountType" set to business or volunteer. All keys are strings.  | Business: `username, password, phoneNumber, businessName, businessAddress, accountType` <br><br>Volunteer: `username, password, volunteerName, phoneNumber, accountType`
/login | POST | Returns a token to be added to your `header.Authorization`. | `username, password, accountType`
/business | GET | Returns all business accounts. Must be logged into a business or volunteer account to access.
/volunteer | GET | Returns all volunteer accounts. Must be logged into a business or volunteer account to access.
/business/username | GET | Returns account information of "username." Must be logged into a business or volunteer account to access.
/volunteer/username | GET | Returns account information of "username." Must be logged into a business or volunteer account to access.
/business/username | PUT | Updates a business account's information. Must be logged into the account you're trying to update. | None required. Provide what you want to change.<br>`username, password, phoneNumber, businessName, businessAddress`
/volunteer/username | PUT | Updates a volunteer account's information. Must be logged into the account you're trying to update. | None required. Provide what you want to change.<br>`username, password, volunteerName, phoneNumbers`
/business/username | DELETE | Deletes a business account. Must be logged into the account you're trying to delete.
/volunteer/username | DELETE | Deletes a volunteer account. Must be logged into the account you're trying to delete.


## Pickup Request CRUD

Endpoint | Method | Description | Required Data
--- | --- | --- | ---
/pickup | POST | Creates a pickup request. Must be logged into a business account. | `foodType, amount, preferredPickupTime`
/pickup | GET | Returns all pickup requests. Must be logged into a business or volunteer account. | 
/pickup/id | PUT | Updates a pickup request. Must be signed into the business account that created it or a volunteer. As a volunteer, set status to Assigned to be assigned to it. Setting the status to Pending or Complete requires the volunteer is already assigned to the pickup. | None required. Provide what you want to change. <br>Business: `foodType, amount, preferredPickupTime` <br><br> Volunteer: `status (Pending, Assigned or Complete)`
/pickup/id | DELETE | Deletes a pickup request. Must be signed in as the business that created it. The pickup request can't be deleted if it's status is Complete.
