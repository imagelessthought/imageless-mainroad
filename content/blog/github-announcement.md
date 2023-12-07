---
title: "Github for Development and Version Control"
subtitle: "Learn about using GitHub Pages for Web Development."
layout: single-post
date: 2023-10-12
categories:
  - "Web Frameworks"
  - "Git"
tags: 
  - "Git"
  - "GitHub"
postauthor: Michael Baggett
postauthorinfo: Director and Assistant Dean of Information Technology
postauthorarea: College of Visual Arts and Design
postemail: michael.baggett@unt.edu
posturl: https://itservices.cvad.unt.edu
thumbnail: "img/branching-icon.svg"
---
[Git](https://git-scm.com 'Git Website') is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git has been around since 2005 and is widely used for collaborative software development.  But it has wider uses.  As examples it is used by writers and artists to track changes as it keeps a complete history and changes can be rolled back to any point.  You can grant access to your projects and allow others to submit changes: those changes can be reviewed by the owner and merged, rejected, or a separate branch created.
<!--more-->
## GitHub ##
[GitHub](https://en.wikipedia.org/wiki/GitHub 'GitHub article ot Wikipedia') is a platform and cloud-based service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. Github was acquired by Microsoft in 2018.  It is used extensively by MIcrosoft, including [Microsoft Azure](https://en.wikipedia.org/wiki/Microsoft_Azure 'Microsoft Azure article on Wikipedia'). 

>  Information on Github:
> * [GitHub Features](https://github.com/features 'Link to Features page on Github')
> * [GitHub Documentation](https://docs.github.com/en 'Link to Documentation page on Github')
> * [GitHub Skills](https://skills.github.com/ 'Link to Interactive Learning Courses')
> * [Git Actions](https://github.com/features/actions 'Link to GitHub Actions information')
> * [Github Pages](https://pages.github.com 'Link to Github Pages: host your own website for free on GitHub')

An enterprise agreement with GitHub grants additional features and options:

> Benefits of Github Enterprise for Education: 
> * [Github Student Developer Webpack](https://education.github.com/pack, 'Github Student Developer Webpack')
> * [Github Campus Expert Training](https://education.github.com/students/experts, 'Github Campus Expert Training') 
> * [Github Teams](https://github.com/pricing, 'Github Teams')
> * [Github Classroom](https://classroom.github.com/, 'Github Classrom')

Encourage students to take advantage of this offer and also apply for the free Student Developer Pack. The [Student Developer Pack](https://education.github.com/pack 'GitHub Student Pack') contains tools are services that would otherwise be quite costly. 

## Using GitHub ##
There are many things you can do with Github, but one of the most popular is website development using [GitHub Pages](https://pages.github.com 'Link to Github Pages: host your own website for free on GitHub'). For more information on using GitHub Pages and its limitations, checkout [this page in the documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages 'GitHub Docs: GitHub Pages').  

When working with GitHub Pages you will need to use a [static page generator](https://en.wikipedia.org/wiki/Static_web_page 'Static Page article on Wikipedia').

Github has adopted the open-source static page generator [Jekyll](https://jekyllrb.com/ 'Jekyll Static Webpage Builder') as their default solution for Github Pages. Jekyll has been maintained by Github since 2013 and the solution is well documented on their site. **However, you can use any solution you like - you are not restricted to Jekyll**. There are a large number of premade themes anmd add-ons available for Jekyll - more than any other static page generator.  You can find Jekyll themes at [Jamstack](https://jamstackthemes.dev/ssg/jekyll/ 'Jamstack Jekyll Themes') but if you do a internet search - you will find many other sites available.  Jamstack seesm to have the majority of themes that are available. 

This site uses the open source static page generator [Hugo](https://gohugo.io/ 'Link to Hugo Homepage').  The starting theme was [mainroad](https://github.com/Vimux/Mainroad 'GitHub Repository: Mainroad').  You can find more Hugo themes at the [Hugo website](https://themes.gohugo.io/ 'Hugo Themes') and [Jamstack](https://jamstackthemes.dev/ssg/hugo/ 'Jamstack Hugo themes'). 

> There are plenty of options available when it comes to static page generators.  Look around for the option that best suits your needs.  Jamstack provides a [list with over 350 different static page generators](https://jamstack.org/generators/ 'Link to list of Static Page Generators').

I recommend using a starter template theme regardless of the staic page generator you choose to go with.  You will want to choose a theme that already includes version formatted for mobile devices. 

## Understanding Open-Source Licensing Terms ##
You will find many resources online that you may want to include in your website: images, fonts, themes, templates, plug-ins etc... Before you use them in your website it is important to check the [licensing terms](https://opensource.org/licenses/ 'Open-Source Licenses') to confirm that your use is in compliance with the agreement.  You must follow any stipulations included in the agreement.  

When it comes to open-source resources, many of the licensing terms you will encounter grant you permission to use the resource pretty freely. But there are exceptions.  Before using anything you find online check:

- Is there a restriction on commerical use?
- Is attribution required?  If so - what does that entail?
- Not all open-source resources are *entirely free*: sometimes there is a free and pro version. The pro version will likely require a fee. Just because you can download it does not mean you are licensed to use it without payment. 

Also, for your own projects - always specify a license agreement.  

Here is some information on some popular open-source license agreements:

- [MIT Licenses](https://tlo.mit.edu/learn-about-intellectual-property/software-and-open-source-licensing/open-source-licensing 'MIT Licenses')
- [Creative Commons](https://creativecommons.org/share-your-work/cclicenses/ 'Creative Commons')
- [Public Domain "Creative Commons Zero"](https://creativecommons.org/publicdomain/zero/1.0/ 'Public Domain CC0')
- [GNU Licenses](https://www.gnu.org/licenses/licenses.en.html 'GNU Licenses')

## Available Resources ##
Here are some resources that are available online that may be of use to you on your project:

### Fonts ###
When it comes to free and open-source fonts used on websites - [Google Fonts](https://fonts.google.com/knowledge 'Google Fonts') pretty much dominates. Google also offers icons (Material Symbols).  You may want to look at the [Noto](https://fonts.google.com/noto 'Noto Font by Google') fonts: it is intended to be a font that is available in all languages. 

- [Google Font Collection](https://fonts.google.com/ 'Google Fonts')
- [Google Icons (Material Symbols)](https://fonts.google.com/icons 'Google Material Symbols Icons')

### Images ###
If you are looking for images for your website, I would start with these:

- [UXWing](https://uxwing.com/ 'UXWING Free images'): A collection of free icons availabel for use on non-commercial *and* commercial projects without attribution. The collection contains well optimized free SVG and PNG icons that can be used on interface design, web and application development.
- [SVGRepo](https://www.svgrepo.com/ 'SVGRepo'): 500.000+ Open-licensed SVG Vector and Icons: Search, explore and edit the best-fitting free icons or vectors for your projects using a wide variety vector library. Download free SVG vectors and icons for commercial use. **Check the license terms carefully - some require attribution**.

The majority of the UXwing images are monochromatic (black on a transparent white background). The easiest way I have found to change the colors of an SVG file is to use this free tool: [DeEditor](https://deeditor.com/ 'Deeditor').

<p style="margin-bottom: 1.5rem">
<img src="/mainroad/img/helpdesk-branded.svg" class="smpic">
<img src="/mainroad/img/helpdesk-branded3.svg" class="smpic">
<img src="/mainroad/img/helpdesk-branded4.svg" class="smpic">
<img src="/mainroad/img/helpdesk-branded2.svg" class="smpic">
<img src="/mainroad/img/helpdesk-branded5.svg" class="smpic">
<img src="/mainroad/img/helpdesk_00853E.svg" class="smpic">
<img src="/mainroad/img/helpdesk_509E2F.svg" class="smpic">
<img src="/mainroad/img/helpdesk_B9DCD2.svg" class="smpic">
<img src="/mainroad/img/helpdesk_C4D600.svg" class="smpic">
</p>

### Other Resources ###
- [Font Awesome](https://fontawesome.com/ 'Font Awesome') is a collection of fonts available in two versions: free and paid.  It is pretty popular and fairly easy to use.

## Nested Sites in Github and Redirect Index Files ##
If you are going to have more than one project in your **github.io** website repository you most likely will need to not use **/** (the root) as your *baseurl* (in static page generators this is found in the in the configuration file). This is mostly an issue when you are using a static page generator or any resource that uses a **Git Actiion** for the deployment. You cannot nest or have multiple sites off of the root so the deployment will fail with errors. 

What you would do in this case is to use baseurls such as **/project1**.  Let's say your account name is *cvadstudent*, that would make **cvadstudent.github.io** your GitHub Pages website.  If you used **/** as your baseurl, then just browsing to ***cvadstudent.github.io*** would open up your website. But once you change the baseurl you will need browse to ***cvadstudent.github.io/project1*** to bring up your website.  You can have multiple sites without conflict by using this strategy.

If you do this: ***cvadstudent.github.io*** will generate a 404 error, page not found.  So you will need to add an index.html file in the root of your repo, **/**, that provides links to each of the websites you are hosting.  For our example the link would simply be **href="/project1"**.

Another solution would be to use a redirect in the index.html in the root that directs the user to your current project, the one you want people to see.  To that is a simple one line snippet of code.  For our example: if you used **/project1** as was done in our example the directory structure would be:

.
│ index.html <- This is your redirect html file.
├── project1

To have the index file point to the project1 website, you would just add this one line to the index.html in the root:   

&lt;meta http-equiv="refresh" content="0; URL=/project1/" /&gt;

The part in the code above **content="0;** tells the browser not to delay before redirecting (0 milliseconds). 

Add **target="_blank"** if you want the redirect to open a separate window. 

## Keyboard Shortcuts ##

Nearly every page on GitHub has a [keyboard shortcut](https://docs.github.com/en/get-started/accessibility/keyboard-shortcuts 'Github Actions Shortcuts') to perform actions faster.  This was just announced by Github on **2023/11/16**.

---

## Useful Links
* [Pro Git](https://git-scm.com/book/en/v2 'Pro Git by S. Chacon and B. Straub')
A free manual to Git, recommended and hosted by the Git community. A printed version is available through Amazon but it is the same material that is available here for free.
* [Git](https://git-scm.com/ 'Git Website') 
This is the website for the open source Git community.  You can download the Git package for Windows, Mac, and Linux, review the documentation, and find a GUI if you prefer it to the CLI. 
* [GitHub](https://github.com 'GitHub Website') 
GitHub is a platform implementation of Git: the git commands are the same regardless of the Git platform.
* [GitHub Flavored Markdown Specs](https://github.github.com/gfm/ 'GitHub Flavored Markdown Specs') 
GitHub Flavored Markdown (GFM) is the dialect of Markdown that is currently supported for user content on GitHub.com and GitHub Enterprise. This formal specification, based on the CommonMark Spec, defines the syntax and semantics of this dialect.
* [GitHub Pages](https://pages.github.com 'GitHub Pages')
To setup your free website on hosted in your GitHub repository, follow the instrcutions here.
* [Git Tutorial for Beginners](https://www.simplilearn.com/tutorials/git-tutorial/git-tutorial-for-beginner?tag=technology/ 'Git Tutorial fro Beginners')
This is free video tutorial offered by Simplilearn.  It covers Github and GitLab and provides a pretty solid introduction to using Git.
* [Getting Started with Git and GitHub](https://www.coursera.org/learn/getting-started-with-git-and-github 'Getting Started with Git and GitHub') 
The free course from Coursera that covers everything you would need to get started using Git effectively (takes about 8 hours to complete).
* [LinkedInLearning](https://itss.untsystem.edu/divisions/mrs/it-training/linkedin-learning.php 'LinkedInLearning') 
Some shorter (under 2 hours) getting-started options: [Learning GitHub](https://www.linkedin.com/learning/learning-github-18719601 'LinkedInLearning Course') and [Learning Git and GitHub](https://www.linkedin.com/learning/learning-git-and-github-14213624 'LinkedInLearning').
* [Github Docs: Setting Up a Github Pages Site with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll 'Github Docs: Jekyll Tutorial')
The Jekyll website provides most of what you need to get started with Jekyll on GitHub. For more information, check here.
* [Jekyll](https://jekyllrb.com/ 'Jekyll Static Webpage Builder')
The official Jekyll Static Webpage Builder website.
* [Hugo](https://gohugo.io/ 'Hugo Statyic Page Builder')
The official Hugo Static Webpage Builder website. **This website is built using Hugo**.
* [BuhoCMS](https://buhocms.org/ 'BuhoCMS')
An open-source *local-content management system* for static website builders.  This gives you a UI for editing and creating content on your website *offline*. 