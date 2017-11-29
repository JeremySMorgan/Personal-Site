Here is [my portfolio](http://jeremymorgan.net/portfolio) which you will be using a template for your own. To do this you will need a [heroku account](https://dashboard.heroku.com/apps). You will also need the following command line tools:

 1. git
 2. node
 3. npm

There are instructions online about how to install all of these so I will not cover this.

## Install Portfolio Template
the first step is to clone my github repository and change to the correct branch

`git clone https://github.com/JeremySMorgan/Personal-Site.git`
`cd Personal-Site/`
`git pull origin v2`

run the web app by starting the node server:

`node index.js`

and navigate to http://localhost:5000/ on your computer. the template should be all ready for you to mess with.

## Make Your Own Portfolio
 
I used bootstrap to make the portfolio page. checkout the bootstrap website for [a guide](https://getbootstrap.com/docs/4.0/getting-started/introduction/). 

To add a item to the portfolio section, insert the following after the first `<div class="row">` which appears on the page (/ after line 21):

```html
<div class="col-md-6">
	<!-- item name -->
	<div href="#" class="thumbnail">
		<a href="/portfolio/<item name>">
			<h2 class="text-centered text-center center"> Item title</h2>
		</a>
		<div class="text-centered text-center center">
			<i class="text-centered text-center center">Brief Item description.</i>
			<br><br>
		</div>
		<a href="/portfolio/<item name>">
			<img src="/images/<item image name>" class="img-rounded">
		</a>
	</div>
</div>
```

then you need to go into `index.js` and add:

``` javascript
app.get('/portfolio/<item name>', function(request, response) {
  response.render('pages/<item name>');
});
```

finally you need to make a new file called `<item name>.ejs` and add it to the /pages directory. This file should have a in depth explanation of your project. I used [stackedit](https://stackedit.io/app) to write each description in markup, then exported it to html using their handy side menu .That's it for full portfolio items. 

To add items to the **Coming Soon...** section, add the following html to 	`portfolio.ejs`:

``` html
<div class="col-md-4">
	<div href="#" class="thumbnail">
		<img src="../../images/arc.png" alt="">
		<h3> item description </h3>
		<i> item dates </i> <br> <br>
		• bullet point 1
		<br> • bullet point 2
	</div>
</div>
```

*Note*: this should be inserted on line 110 of the unmodified document, or before the closing `<div>` tag of the `<div class="row">` found immediately below `<h1>Coming Soon...</h1><hr>`

## Share Your Portfolio

two steps:
1. push it to a github repo. See this [stack overflow post](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)
2. host it on heroku. This is really easy. go to your [heroku dashboard](https://dashboard.heroku.com/apps) and follow their instructions.

And thats it! Enjoy.
