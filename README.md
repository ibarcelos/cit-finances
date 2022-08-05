# cit-finances

This repo is just a baseline for using our apis

# 1 - on react folder

  npm install

  WARNING: if needed, use --force
  this happens because not all dependencies are up-to-date

# 2 - on your controller (spring boot)

                    
  /\* This will free all entries to the application: !!!!!NEVER USE IT IN PRODUCTION!!!!!    \*/

  @CrossOrigin("\*")   
  public class PostController {
  ...
  }


# 3 - on your react folder

  npm start

# 4 - edit the route for your api ( In App.js )
  
  ![image](https://user-images.githubusercontent.com/109676034/183122367-f35dd9a1-dee0-408a-8977-8733fff0a33a.png)

  
  My route is api/v1/post, but yours can be build different. is up to you to change as you please
  
  # 5 and final ( In App.js )
  
  ![image](https://user-images.githubusercontent.com/109676034/183122150-006d7926-b8b5-4e19-bc26-5aa2d40552f1.png)

  Your structure can be a little different than mine, so is again up to you to change your variables too.
  
  # 6 all done
  
  This should work if you followed up this steps :) great work
