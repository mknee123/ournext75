# ournext75

Our Next 75 is a regionwide initiative on the occasion of the 75th anniversary of the Pittsburgh Renaissance to rededicate today’s and tomorrow’s leaders to the “Pittsburgh Values” of citizen leadership, commitment to community, and collaboration toward the next generation of regional transformation.

https://ournext75.org/


# Prerequisites

- node version manager.
    -- Go to https://github.com/nvm-sh/nvm/blob/master/README.md for instructions on installing nvm
- node (version 8.16.0 so that the gulpfile works. Anything later will cause conflict)
    -- nvm install node8.16.0
- gulp
    -- npm install gulp-cli -g (Install globally so cmd lines are available)

# Installing

- nvm use v8.16.0
- npm init
- gulp watch (starts browserSync to watch all changes happen on a live local server)

# Deployment

- Be sure to work inside of src/ folder when making any changes/modification/update.
- Run Gulp Watch or Gulp Copy to ensure all changes in src/ folder get copied to root folder and are ready to be pushed to live server.
- Gitignore file. Be sure to add node modules to gitignore file. These files are not needed for the server.