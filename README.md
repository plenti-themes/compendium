# Compendium | Personal Blog Template

NOTE: work-in-progress... the template is still in development

This blog template was designed to be readily customized for user preference. There are a number of variables in the index.json that will allow for enabling or disabling features and settings.

## TODO

1. ~~add code to save the dark/light theme to localStorage~~
2. ~~transform the template to the dynamic components approach~~
3. ~~incorporate SEO changes~~
4. ~~add Tags and Category pages~~
   1. ~~update aside with actual tags and catg values~~
   2. ~~create tag page component~~
   3. ~~create catg page component~~
   4. ~~create DRY script and update components~~
   5. ~~resolve page refresh "bug"~~
5. ~~fix: wrap features and SEO components in key block ensure expected updates~~
6. ~~convert project pages to new content type and fix pagination~~
7. update for WAI-ARIA
8. add a detailed README.md that explains how to use the theme
9. add a "Sendgrid" API function for the contacts page

## Theme Settings (index.json)

### title: will show title on the tab

### theme.featuredPage:
* Bleed: will show a featured article image on the full screen
* Frame: will show a featured article image with a border
* None: will not show featured articles

### social:
* update the url for any desired social media links
* set enabled to true for those we want to see on our aside section

### theme.colorScheme:
* specify desired color scheme name
* locate color schemes in the styles folder
