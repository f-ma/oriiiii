# _posts
Your dynamic content, so to speak.The naming convention of these files is IMPORTANT, and MUST follow the format: `YEAR-MONTH-DAY-title.MARKUP`. The permalinks can be customized for each post, BUT the date and markup language are determined solely be the file name.

### YAML front matter
The front matter is where Jekyll starts to get really cool. ANY file that contains a **YAML** front matter block will be processed by jekyll as a special file. The front matter must be the first thing in the file and must take the form of valid YAML set between **triple-dashed lines**. Here is a basic example:
```
---
layout: post
title: This is the article's title
---
```
Between these triple-dashed lines, you can set predefined variables (see below for a reference) or even create custom ones of your own. These variables will then be available to you to access using Liquid tags both further down in the file and also in any layouts or includes that the page or post in question relies on.

##### predefined global variables
These are a number of predefined global variables that you can set in the front matter of a page or post:
```
layout: if set, this specifies the layout file to use
permalink: if you need your processed blog post URLs to be something other than the site-wide style (default /year/month/day/title.html), then you can set this variable and it will be used as the final URL.
published: set to false if you do NOT want a specific post to show up when the site is generated.
category, categories: Instead of placing posts inside of folders, you can specify one or more categories that the post belongs to. When the site is generated the post will act as thought it had been set with these categories normally. Categories (plural key) can be specified as a YAML list or a comma-separated string.
tags similar to categories, one or multiple tags can be added to a post.
```

##### custom variables
Any variables in the front matter that are not predefined are mixed into the data that is sent to the Liquid templating engine during the conversion. For instance, if you set a title, you  an use that in your layout to set the page title:
```
<!DOCTYPE html>
<html>
  <head>
    <title>{{ page.title }}</title>
  </head>
  <body>
  ...
```

##### predefined variables for posts
These are available out-of-the-box to be used in the front matter for a post
```
date: a date here overrides the date from the name of the post. This can be used to ensure correct sorting of posts. A date is specified in the format YYYY-MM-DD HH:MM:SS +/-TTTT; hours, minutes, seconds, and timezone offset are optional
```
##### don't repeat yourself
If you don't wnat to repeat your frequently used front matter variables over and over, just define *default* for them and only override them where necessary (or not at all). This works both for predefined and custom variables.

### permalinks
Jekyll supports a flexible way to build your site's URLs. You can specify the permalinks for your site through the *Configuration* or in the *YAML Front Matter* for each post. You're free to choose one of the built-in style to create your links or craft your own. The default style is `date`.
Permalinks are constructed by creating a template URL where dynamic elements are represented by colon-prefixed keywords. For example, the default `date` permalink is defined according to the format `/:categories/:year/:month/:day/:title.html`.

[See more about Permalinks](http://jekyllrb.com/docs/permalinks/)
