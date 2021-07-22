# shifts

*********Files content breafly explained

We have 4 files :

-Shift_type.js : The model (backend)

-Formulaire.js : component tha contains the form that we have to fill to add a new shift  (shift name, shift start and end time , and shift icon). (Frontend)
-ShiftForm.js : This file displays the Previous component. (Frontend) 

-Shifts.js : Lists the shifts inserted into the database.


****************Issues

-The file Formulaire.js contains a function called " UploadImg" that converts the shift icon to a base64 format, then inserts it into the database through the "handleSubmit" function.

=====> This step is working just fine 

-The file shifts.js has a list of the shifts fetched from the database.

=====> The data is fetched but the icons aren't displayed.
