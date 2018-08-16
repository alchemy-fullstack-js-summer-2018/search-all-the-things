# Search All The Things! <em>Router, Detail and Favorites</em>

This is a pair (group) lab. First thing you will need to do is decide who's lab you are going 
to use to continue forward! You may want to spend some time bringing in functionality from the
other person's lab.

## Pairing

### Quote from Will Sentance

> Pair-programming works by separating the responsibilities of solving a coding challenge between two people. One partner verbalizes an approach to the challenge and the other must implement it an actual code.

> Being an effective engineer is about learning how to learn — in other words how to push through blocks and encounter a new framework, language feature or design pattern and have the confidence, strategies and resilience to navigate through it.

> The traditional way to learn to code is to watch tutorials that teach ‘content,’ such as a language feature or a framework. But while this may teach someone how to code for the specific situation in the tutorial, it is rarely translatable to another situation, and it can hinder a student’s ability when they encounter a new challenge.

> So how do you get better at navigating through new challenges? Unfortunately the only way is to do it again and again. I call this ‘hard learning,’ like with Harvard’s online computer science-focused program, EdX, which has a 96 percent attrition rate. It’s hard, but f you make it through the program and complete all of the material and challenges, you effectively receive a Harvard Computer Science degree.

> The alternative is ‘easy learning,’ like online tutorials or simple challenges, which are great to keep you going but they’re never going to take your skills to a level where you can be hired as a software engineer. So what’s the solution? Do the hard learning work through tough blocks, but with a programming partner to help keep you going. Even if you’re confident and you can tackle the hard learning, there’s still a tendency to spend too much time researching and not enough time coding. Pair-programming again helps with this.

> [...] The role technical communication plays in helping someone be an effective senior developer. Teaching students to explain their approach to a pair-programming partner improves the quality of technical communication.

### Requirements

Pairing **requires** the use of a timer to faithfully change roles on a regular basis:
* Use 25 minutes periods
* You must take equal turns being driver and navigator
* You must commit changes when changing drivers

**This lab has a severe point penality if TAs see no evidence of pairing commits.**

You _can_ do additional work outside of lab hours indvidually. Use a PR process to merge work
done individually off-hours.

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
* Evidence of pairing commits missing or superficial **-15pts**

    
