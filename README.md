
Deployed page: https://pengchen11.github.io/lab-02/
# This will be a combo for lab-02 and lab-03.
## Lab 02 Time estimate

| Number and name of feature: | 1.Display images | 2.Filter images | 3.Style the application |
|--|--|--|--|
|Estimate of time needed to complete:| 1 h | 1 h | 1h |
|Start time: |8 am|11 am|12 am| 
|Finish time: |11 am|12 am|12:30 am|
|Actual time needed to complete: |3h|1h|0.5h|

Reason why feature 1 was holding back:  
I was not familiar with $.Ajax. Spend hours to read the book and google searching. 


-------

## Lab 03 Time estimate
| Number and name of feature: | 1.Pagination | 2.Templating | 3.Styling with Flexbox | 4.Sort the images|
|--|--|--|--|--|
|Estimate of time needed to complete:| 1 h | 1 h | 1h | 1h|
|Start time: |1400 |2300 |1445 | done with last lab| 
|Finish time: |1430 |2400 | 1550|done with last lab |
|Actual time needed to complete: |0.5h | 1h |1h |done with last lab |

Spend few more hours in the morning to get the stretch goal done. 


-------


## Required Configuration for Lab 02

_Your repository must include the following config files:_

- `README.md` - with an overview of the project for a new visitor to your repo
- `.gitignore` - with standard NodeJS configurations (see the provided `.gitignore` file)
- `.eslintrc.json` - with Code 301 course standards for the linter (see the provided file in the *configs* folder of the class repo)

- Organize your files into folders as you see fit. Here is an example file tree:

```sh
lab-02-repository
├── css
│   ├── base.css
│   ├── layouts.css
│   ├── modules.css
│   └── reset.css
├── data
│   └── page-1.json
├── index.html
├── js
│    └── app.js
├── .eslintrc.json
├── .gitignore
└── README.md
```

## User Acceptance Tests

### Overview

In labs 2 and 3, you and your partner(s) will be using the provided JSON files to create a photo gallery. You will style it using floats.

You have the option of using the provided `index.html` file, but it is not a requirement.

## Resources

- [page-1.json](./starter-code/page-1.json)
- [index.html](./starter-code/index.html)

### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```
Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

Add this information to your README.

### Feature #1: Display images

#### Why are we implementing this feature?

- As a user, I want to view the images on the page so that I can browse the photo collection.

#### What are we going to implement?

Given that a user opens the application in the browser
When the user navigates to the home page
Then the photo gallery should display all of the images in the gallery

#### How are we implementing it?

- Use AJAX, specifically `$.ajax()`, to read the provided JSON file.
- Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
- Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.

### Feature #2: Filter images

#### Why are we implementing this feature?

- As a user, I want to be able to filter the images so that I can view only images that match a keyword.

#### What are we going to implement?

Given that a user clicks on the dropdown menu
When the user selects one of the options
Then only the images whose keyword matches the option should be displayed

#### How are we implementing it?

- Create a `<select>` element which contains unique `<option>` elements extracted dynamically from the JSON file, one for each keyword.
- Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.

### Feature #3: Style the application

#### Why are we implementing this feature?

- As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images in a grid like pattern.

#### What are we going to implement?

Given that a user opens the application in the browser
When the user navigates to the home page
Then the images should be displayed in rows across the screen

#### How are we implementing it?

- Style your application using floats.
- Utilize at least one Google font.

### Stretch Goal: Sort the images

#### Why are we implementing this feature?

- As a user, I want to be able to sort the images so there is an order to how they render.

#### What are we going to implement?

Given that a user is presented with sort options
When the user clicks on one option
Then the images should be sorted accordingly

#### How are we implementing it?

- Add the ability for the user to sort the images by either title or by number of horns.
- Sort the images by one of the properties on page load. This should also apply to the second page of images.

## Required Configuration for Lab 03

_Your repository must include the following config files:_

- `README.md` - with an overview of the project for a new visitor to your repo
- `.gitignore` - with standard NodeJS configurations (see the provided `.gitignore` file)
- `.eslintrc.json` - with Code 301 course standards for the linter (see the provided `.eslintrc.json` file)

- Organize your files into folders as you see fit. Here is an example file tree:

```sh
lab-03-repository
├── .eslintrc.json
├── .gitignore
├── css
│   ├── base.css
│   ├── layouts.css
│   ├── modules.css
│   └── reset.css
├── data
│   ├── page-1.json
│   └── page-2.json
├── index.html
├── js
│    └── app.js
└── README.md
```

## Resources

- [page-2.json](./starter-code/page-2.json)
- [Mustache Docs](https://github.com/janl/mustache.js)
- [Flexbox Basics from MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

## Deployment

Deploy your photo gallery on GitHub pages, as you have done in Code 201. As a reminder, in your repository, click on Settings and scroll down to the GitHub Pages section. Select your master branch and verify that your photo gallery appears the way you expect it to look on the deployed site.

Complete this step before moving on to today's features.

## User Acceptance Tests

### Overview

Today you and your partner(s) will add pagination to your image gallery.

You will also be refactoring your photo gallery in two ways: you will use Mustache for templating and you will use Flexbox for styling.

You will also be adding the ability for the user to sort the images, if you did not complete the stretch goal from lab 2.

### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```
Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

Add this information to your README.

### Feature 1: Pagination

#### Why are we implementing this feature?

- As a user, I want to have the ability to view additional images so that my view does not become cluttered.

#### What are we going to implement?

Given that a user opens the application in the browser
When the user clicks on a button or link to another page
Then the other set of images should be dynamically displayed

#### How are we implementing it?

- Add navigation for the user to switch between two pages. Each page should render a unique set of images from one of the two provided JSON files.
- Reset the filters, then repopulate them using only keywords from the images currently being displayed.

### Feature 2: Templating

#### Why are we implementing this feature?

- As a user, I want all of the images to be displayed in a consistent manner, so that it is easy to scan the collection of images.

#### What are we going to implement?

Given that a user opens the application in the browser
When the images are displayed on the screen
Then each image should be rendered according to a template

#### How are we implementing it?

- Create the appropriate Mustache template in your HTML with the same `<h2>, <img>, and <p>` elements as the jQuery template from the prior lab.
- Refactor the method that renders your images to use Mustache instead of making a copy with jQuery.

### Feature 3: Styling with Flexbox

#### Why are we implementing this feature?

- As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images.

#### What are we going to implement?

Given that a user opens the application in the browser
When the user navigates to the home page
Then the images should be displayed in columns, as screen width allows

#### How are we implementing it?

- Refactor your CSS to use Flexbox instead of floats. You are welcome to use a combination of floats and Flexbox, as you see fit.

### Feature 4: Sort the images

#### Why are we implementing this feature?

- As a user, I want to be able to sort the images so that there is an order to their rendering.

#### What are we going to implement?

Given that a user is presented with sort options
When the user clicks on one option
Then the images should be sorted accordingly

#### How are we implementing it?

- Add the ability for the user to sort the images by either title or by number of horns.
- Sort the images by one of the properties on page load. This should also apply to the second page of images.

## Stretch Goal: Detail view

#### Why are we implementing this feature?

- As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

#### What are we going to implement?

Given that a user wants to view the details of the image
When the user clicks on an individual image
Then the image should render larger on the screen with the description displayed

#### How are we implementing it?

- Add a detail view which will display the image in a larger size in the center of the screen with a colored background.
- The description should be shown now, as well.
- When the user clicks off of the image, return to the grid view.
- Use a transition or animation to show and hide the detail view of an image.

## Stretch Goal: Fuzzy search

#### Why are we implementing this feature?

- As a user, I want the ability to search my images so that I can view only the images containing specific titles or keywords.

#### What are we going to implement?

Given that a user enters wants to view specific images
When the user enters a character into the search field
Then only the images matching the current set of characters should be displayed on the screen

#### How are we implementing it?

- Create an input element to allow users to search for an image. It is up to you and your partner to decide if the user should be able to search by title, keyword, or both.
- Write a regular expression pattern to create a fuzzy search so that the results are narrowed down and displayed every time the user enters or removes a character from the input.