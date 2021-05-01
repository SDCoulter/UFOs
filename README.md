# Challenge - The Truth is Out There, UFOs

## GitHub Pages

**You can see a live version of this webpage here: [UFOs - The Truth is Out There](https://sdcoulter.github.io/bc/module11/index.html)**

## Challenge - Overview

The purpose of this module, challenge, and analysis was to display data about UFO sightings in a pleasing and user-friendly way. We were provided with a JavaScript file that contained the data as an array of objects, made up of key-value pairs. We would be importing the data and using JavaScript written by ourselves to show it in a table that a user may interact with. We also employed the use of HTML/CSS with Bootstrap to make a responsive web app.

Our JS [app](static/js/app.js) file contains multiple functions, the first of which builds the table in HTML to display on the website. The other functions rely on the JS module `D3` to listen for changing input data and then filter the data displayed in the table accordingly. For example, a user could enter a specific country which would filter the table, and then they could further filter it with shape while it automatically updated.

We wanted to show the data to the user in an understanable and interactive way. This meant using a pleasing design (Bootstrap, along with some of our own CSS), and a JS script that had an event listener for changes rather than watching a button for clicks.

## Challenge - Results

When a user visits the site they are met with the following layout:

![Inital View of the Website](static/images/results_1.png)

Which is made up of a navigation bar, jumbotron-style banner, and an article with a header, before we get to the data being displayed in a table. Scrolling down the page we can see that the page contains a filter that applies to the table and the data being displayed in the table itself. It's currently not filtered so all the data is being displayed.

![Default View of the Data Displayed in the Table with the Filter](static/images/results_2.png)

On the left under the filter heading is the list of filters we can apply to the data table, we have five options to choose from, and we can filter by as many of them as we would like. They are currently populated with placeholder text to give the user an idea of the expected input. The user needs to simply type in any of the filters they wish to enact - we'll start with state first, using `fl` for Florida:

![Entering a State Filter of 'fl'](static/images/results_3.png)

After the filter is entered, clicking anywhere else on the page allows the event listener to check for a change in the input boxes and filter accordingly if there has been a change. Since we entered the filter `fl`, the `updateFilters()` function was run in `app.js`, and this state filter was added to our `filters` object as a property with a value. This filter is then applied to the data in the `filterTable()` function, which then runs the `buildTable()` function to return the now-filtered data in a new table. This is all done instantaneously and automatically updates the page the user is interacting with.

We can add a second filter to refine the results further, this time we'll use the shape filter with `sphere`:

![Data Filtered by 'fl' and 'sphere'](static/images/results_4.png)

Again the data in the table is updated immediately in the same way as before, except this time our `filters` object is filtering the data by two properties rather than just one. We did this by looping through the object's properties and applying the filters on top of one another so we only return data that was true for both.

We can also remove our filters as well, built into the `updateFilters()` function is a check for if the user entered information was removed from the input box. If it was then the funtion removes that property from our object but leaves the rest, and the table is re-built again. We can see this in action by removing our first filter, `fl`, and seeing the results for just the shape.

![Data Filtered Only by Shape](static/images/results_5.png)

This makes the table very interactive for the user as they can filter by whichever classifications they like in real-time.

## Challenge - Summary

to be completed.

## Context

This is the result of Module 11 of the University of Toronto School of Continuing Studies Data Analysis Bootcamp Course - **JavaScript and HTML/CSS (Web Deployment)** - UFO Sightings with JavaScript. Following the guidance of the module we end up pushing this selection of files to GitHub.
