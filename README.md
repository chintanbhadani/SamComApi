SamComApi

TASK :

Base URL: /api/v1
Need to develop 3 APIs, routes are as below
1) /user_owned_vechicles/{userId} => Get all the vehicles owned by particular user (userId)
2) /vehicles => get all the vehicles with additional field of user if it's occupied by any user then add it's user object
Response structure for /vehicles
[{
   // vehicle detail,
   user: {
     // user details who occupied this particular vehicle
     // keep value: null if vehicle is not occupied by any user
   }
}, ...]

-  First URL is :
1) http://localhost:8000/api/v1/user_owned_vechicles/1


-  Second URL is :
2) http://localhost:8000/api/v1/vehicles

