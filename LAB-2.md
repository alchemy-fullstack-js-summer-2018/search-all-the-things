Search All The Things! Router, Detail and Favorites
===

This is a pair (group) lab. First thing you will need to do is decide who's lab you are going 
to use to continue forward! You may want to spend some time bringing in functionality from the
other person's lab.

## Firebase

You will need to create a firebase project and add your partner(s). Add the realtime database and
make sure your database rules are "open".

## Requirements

Goal is to enhance the prior lab:

1. Add a Router and restructure the app
    1. The Search Results page lives on it's own route
    1. But the Search continues to live in the header, you will need to:
        1. Load the search from url on `componentDidMount`
        1. Add a programmatic route change on search
1. Add a Route the shows a detail page
    1. This should load the detail item by id
    1. Add the ability to favorite detail item
        1. Use Firebase to save enough information to show a summary and link to detail view
    1. Add the ability to unfavor an item
1. Add a Favorites page (served at `/favorites`) that shows the list of favorites that link to the detail view
1. Add a Home page (served at `/`) and create some static content
1. Polish your HTML/CSS
1. Make your code shine

## BONUS

There are a lot of directions you can go with this lab. Explore and have fun!

## Rubric

* Working router with specified functionality **4pts**
* Favorites Functionality (data and UI) **4pts**
* Detail Page Functionality **3pts**
* HTML/CSS (semantic, meaningful, appropriate, well structured) **5pts**
* Idiomatic, clean React code **4pts**

    
