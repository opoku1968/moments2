# Moments App

![image of Moments](src\assets\logo.png)

This moments App was a part of the Software Development Course by Code Institute

___

This is a web Application that is able to allow individuals to be able to share, like and comment on posts of other users and theirs. it is just like any social media platfrom like instagram or twitter with a few select features


Link to live site - [https://moments-frontend-21e28627c0cd.herokuapp.com/](https://moments-frontend-21e28627c0cd.herokuapp.com/)

## CONTENTS

- [Moments](#reddit-news-blog)
  - [Site Objectives](#site-objectives)
- [User Stories](#user-stories)
  - [New Visitor Goals](#new-visitor-goals)
  - [Existing Visitor Goals](#existing-visitor-goals)
- [Tests](#tests)
- [Technologies Used](#technologies-used)

- [Programming Languages, Frameworks and Libraries Used](#programming-languages-frameworks-and-libraries-used)
  - [Deployment](#deployment)
    - [Github Deployment](#github-deployment)
    - [Repository deployment via Heroku](#repository-deployment-via-heroku)
    - [Deployment of the app](#deployment-of-the-app)


___

## Site Objectives

Design and ccreate a social media website to be able to View , like , share , and comment on Posts


The user Stories were:
1. To be able to register for an account.
2. To view a list of posts
3. view an individual post 
4. search for a list of posts
5. Scroll through a list of posts
6. edit and delete my post 
7. Create a post 
8. view liked posts
9. view followe users' posts
10. Like a post 
11. Unlike a post 
12. Create a comment
13. edit and delete my comment
14. view a profile
15. follow a profile
16. unfollow a profile


## Backend Development
Backend Development was done using django rest framework and deplyed to heroku.the database was hosted on postgres and the images for our project was hosted on cloudinary.


## User Stories

### New Visitor Goals

- To understand what the site and content is about.
- How to navigate the site.
- Create an account and engage with the site 

### Existing Visitor Goals

- Log in and out of their account.
- View Posts made by other Users and themselves
- Be able to add a post 
- be able to comment on a post 
- Be able to Like and unlike a Post
- Be able to edit / delete their own post 






## Home
This is the hompage of the currently logged in user where he is able to view the posts of other users and his.Here the user is able to like a post (excluding their own post), and also make a comment on their posts.

##  Feed

This page contains the posts of the users that the currently logged in user is following. On this page the posts of the currently logged in user is not shown here but then the post of the users whom they are following is shown here

## Search Functionality

A powerful search feature enables users to find specific posts, This makes it easy for users to discover posts relevant to their interests.

## Likes

This page displays the posts which the currently logged in user has liked

## Trending Topics

Stay informed about trending topics with the application's trending section. This feature highlights the most discussed and popular posts across all selected subreddits.

## Add Post

Add post enables the user to be able to add his or her own post. to be able to add a post the user should provide an image , a title and a content.

##  Profile

Each user has a customizable profile where they can view the number of post they have made, the number of people they are following , the number of followers that they have and also their bio.On this page the user is able to change their username , password , profile photo or even change the content of their bio.

## Components

## Most Reused Components

### `PostsPage`

- **Variants:**
  - Home
  - Feed
  - Liked

### `Post`

- **Used in:**
  - PostsPage

### `Profile`

- **Used in:**
  - PopularProfiles
  - PopularProfiles (mobile)

### `DropdownMenus`

- **Used in:**
  - Post
  - ProfilePage
  - Comment

### `InfiniteScrollComponent`

- **Used in:**
  - PostPage (loading Comment components)
  - PostsPage (loading all, feed, or liked Post components)
  - ProfilePage (loading Post components belonging to the profile)


# Tests
  -**Manual Testing :**
  - Manual Testing involved allowing a user to sign up, login and perform the various activities of the 
  website.All functionality worked as the were supposed to

  **Automated Test:**
  - Automated test involved using the msw library to test the user and the logout endpoints.
  Also tests were written for the NavBar component and all the links which are associated to the various buttons worked perfectly.

# Technologies Used

These are the technologies used in building this project:

- [Github](https://github.com) To host and store the data for the site.
- [CodeAnywhere](https://www.codeanywhere.com) the IDE where the site was built.
- [ElephantSQL](https://www.elephantsql.com/) Used to store PostgreSQL database.
- [Cloudinary](https://cloudinary.com/) Used as cloud storage for Images uploaded as part of the blog posts
- [Heroku](https://id.heroku.com/) Used to deploy the project

# Programming Languages, Frameworks and Libraries Used

- [React](https://legacy.reactjs.org/)
- [CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [Python](https://en.wikipedia.org/wiki/Python_(programming_language))
- [Django](https://www.djangoproject.com/)

## Deployment

### Github Deployment

The website was stored using GitHub for storage of data and version control. To do this I did the following;

After each addition, change or removal of code, in the terminal within your IDE (I used codeanywhere for this project) type:

- git add .
- git commit -m "meaningful commit message"
- git push

The files are now available to view within your github repository.

### Repository deployment via Heroku

- On the [Heroku Dashboard](https://dashboard.heroku.com) page, click New and then select Create New App from the drop-down menu.
- When the next page loads insert the App name and Choose a region. Then click 'Create app'
- In the settings tab click on Reveal Config Vars and add the key Port and the value 8000. The credentials for this app were:

1. Cloudinary URL
2. Postgres Database URL
3. Port (8000)

- Below this click Add buildpack and choose python and nodejs in that order.

### Deployment of the app

- Click on the Deploy tab and select Github-Connect to Github.
- Enter the repository name and click Search.
- Choose the repository that holds the correct files and click Connect.
- A choice is offered between manual or automatic deployment whereby the app is updated when changes are pushed to GitHub.
- Once the deployment method has been chosen the app will be built and can be launched by clicking the Open app button which should appear below the build information window, alternatively, there is another button located in the top right of the page.


___


