# NHR Frontend Challenge 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Notes

##  Initial thoughts and decisions

For this challenge, due to the limited amount of time I focused first on refactoring the files to have a relatively good structure of components on which I could work nicely and add as much features as I could. Not following any particular pattern or known architecture such as clean architecture, but just a simple and clear organization for files/folders.

At first glance, I realized the value that using Typescript could have added to the project and also making the development experience a lot better. Having said that, as I was given an already started project created with 'create-react-app' without the typescript support and also due to the amount of time I had, I decided not to refactor the project for this exercise, and work directly with js.

Also...even though this is a very small/fake app or exercise, as the app has the typical fetch/add/delete actions on a list of elements, it would be great to add redux to manage all of these actions and the global state. The reason I didn't do it was to keep the code as simple and as small as possible, reducing the amount of boilerplate needed, thus the time spent on it. Having said that, for a real world/scalable project I would strongly recommend to add redux/redux-thunk (and typescript).

For the AddTenantForm, I initially just wrote a basic controlled-component to manage the state of the form (values of the inputs), but finally I decided to add a helper tool/lib called 'formik' that allows you to manage the state of the form as well as validations and error messages in a more clean way, letting me to have a lot less code and in a more clear way, without losing any control over the form.

##  About Styling

I didn't have the time to focus too much on styling details, other than the loading spinner or a few red colors for error messages. This is one of the things that can be improved for sure.

##  About Testing

To be honest, due to the limited amount of time already mention above regarding other decisions, I didn't focus to much on tests. However, I tried to add at least a small glance on what they should look like and how they can be written and added. 
For this matter, I used the already given/installed tools/libs (by the create-react-app) Jest and Testing-Library.
I only wrote a few, not exhaustive at all, tests as a sample on only two of the components.

## Next Steps

As already mentioned above, if I had to continue working on this project, to improve the code, I would suggest adding typescript, redux and a more extensive test coverage.
As well as improving the styling and also adding the sorting feature to the columns that I couldn't get to do because I run out of time.

### Contact

For any questions or doubts that could arise, please feel free to contact me at:

[agustinc.jobs@gmail.com](mailto:agustinc.jobs@gmail.com)
