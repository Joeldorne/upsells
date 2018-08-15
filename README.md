# Cart Hook Instructions

    In the gulp renders the project to the ./dist folder. In this folder you will find a main.css.min, each upsells page with a html.min and a carthook.js page.

    1. Copy all the contents of the main.css.min into the Carthook advanced CSS tab.
    2. Copy all of the carthook.js files into the the Carthook Advanced Javascript tab.

    Inside the Javascript code you will see '// Insert HTML here' Please take the .html.min file you with to add to cart hook and paste it between the brackets.

    - Once you hit save you will be able to preview the page.

# Gulp

    This project with written in gulp and Sass. Please use the `gulp` command to compile the code into the dist folder after making changes.


# Using the files in Cart Hook

    - Please note that all images are hosted on Shopify
    - You can find the raw files in in ./src/images
    - These are optimised and added to the ./dist folder using the command `gulp images`

# Tasks remaining

    - Change framework to TailWind.CSS
    - Clean the Gulp file and remove unused plugins
