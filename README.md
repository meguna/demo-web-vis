# Introduction to Web-based Data Visualization

View the live demo here: https://meguna.github.io/demo-web-vis/

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/meguna/demo-web-vis/)



## Set up guide

1. Install Node.js (v14+)
2. Install Git https://github.com/git-guides/install-git
3. Clone this repository. Run `npm i` inside the repo's root directory. 
4. Run the app with `npm run start`. This is called your development server. This should open a window in your broswer at `localhost:3000` (or some other port). You can keep this window open while you're writing code, and when you save changes to your React app, it should reload automatically and display your changes. 

## Deploy Guide

We will deploy this project using Github Pages, a free hosting solution for single page applications. 
This repository currently lives in _my_ github account. For you to deploy this project, we'll first reset the git information associated with the project,
and then run deployment.

Git is a version control manager, which is a fancy way of saying that it keeps track of changes made to a codebase so that developers (especially when collaborating with others) can easily roll back changes or access other peoples' changes. It's also a useful way of uploading code to the cloud. 

1. Run `rm -rf .git` in the root directory of this project to remove any git setup. You can leave the `.gitignore` file intact, because it's a helpful file that isn't associated with any git account (it just tells git to ignore certain files and types of files when pushing changes to the repository). 
2. Run `git init` in the root directory of this project to initialize an empty git repository.
3. Now, navigate to `github.com` and [create a new repository](https://github.com/new) to associate with this project. Name it whatever you want. 
4. Copy the remote address of your new repository. If you navigate to the home page of your repo on github.com (which should be something like `https://github.com/<your-username>/<your-repo-name>`it should be under the green button that says 'code'. It should look something like: `git@github.com:meguna/demo-deckgl-app.git`
5. Run `git add remote origin <your-remote-url-from-step-4>`.
6. Now you can run `npm run deploy` to publish your web app.

## File Directory Guide

This project is set up as a simple single-page [React](https://reactjs.org/) application. 

* The `src` folder is where your React app resides. 
* The first file you should look at is `src/App.js`. This is where the bulk of your website will reside (unless you move them into separate components and import them into App.js instead). In other words, anything you want to display on your website needs to be referenced or imported into `App.js`'s `return` function one way or another.
* The `public` folder is where you will place any `.html` files generated by Kepler. It also includes the entry point file `index.html`.

## Development Guide

### Adding Interactive Maps

There are two ways to add interactive maps to this website. The first is using Kepler. The second method, which you should only use if you want to customize your map significantly, is by using the Deck.gl and Mapbox integration for React. Note that this method requires you to fluidly write a lot of React code!

#### Kepler Web (Recommended)

1. In [Kepler](https://kepler.gl/demo), export the map using the "Share" button at top left, then select "Export Map." Export your map with the "HTML" option.
2. Put the downloaded html file in the `/public` folder of your project, and rename it to something clear and identifiable. 
3. Import your map in `App.js` by copying this code, remembering to replace `your-map-name` with the name of the map you chose in Step 2:
```
<div className="map-wrapper">
  <iframe src={`${process.env.PUBLIC_URL}/<your-map-name>.html`} title="map" sandbox="allow-scripts"/>
</div>
```
This should load the map into your web site.

#### Using React map integrations
We'll use an example component to demonstrate how this works

1. First, import the example component into `App.js` like so: 
```
import Map from './MapExample';
```
2. Then, use this map in your App component by inserting `<Map />` somewhere inside `<div classname="app"></div>` (for example, line 10).
3. If you run `npm start` now, you'll notice that the map isn't being loaded. This is because you need to provide it a Mapbox access token. Make a new file called `.env` inside the root directory, and put this in its contents:
```
REACT_APP_MAPBOX_ACCESS_TOKEN=<your-mapbox-access-token>
```
Make sure to replace `<your-mapbox-access-token>` with your token, which should be something like `pk.xxxxxxxxx....` 
4. Now, restart your development server (CTRL+C in the window that's running `npm start`, then run `npm start` again). You should be able to see the map.
5. You can customize the Map provided in `MapExample.jsx` to fit your needs. The [deck.gl docs](https://deck.gl/docs) are a good place to start. Similarly to how things have already been set up, place any data files you need in the `src/data` directory, and import them into your component. 

### Adding Charts

This project uses [react-chart-js-2](https://github.com/reactchartjs/react-chartjs-2) as its primary charting library. Feel free to use other Javascript-based libraries (such as Plotly JS) if there are others you feel more comfortable with.

There are two chart examples, which you can view in `ScatterplotExample.jsx` and `LinechartExample.jsx`.

In general, here is how you use any chart from React Chart JS:

1. Import ChartJS and import the specific chart component you want to use, like so:
```
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
```
In the example above, we want to use a Line chart, so we import the `Line` component. Here are the other types of chart components available: https://react-chartjs-2.netlify.app/components
2. Set up a `data` object. For a simple mapping of numerical values and their 1-to-1 labels, this might look something like this:
```
  const data = {
    labels: <your-labels>,
    datasets: [{
      label: 'My example dataset',
      data: <your-data>,
    }]
  };
```
The various ways you can initialize your `data` parameter is explained here: https://www.chartjs.org/docs/3.3.2/general/data-structures.html

3. If you want to specify other details, set up a `options` object. This is also where you'd customize axes, scales, legends, tooltips, etc beyond their default configuration. More information is listed here: https://www.chartjs.org/docs/3.3.2/general/options.html and for an example on scale customization, look at `ScatterplotExample.jsx`
4. Finally, in the render function of your component, add your chart, which should look something like this:
```
<Scatter options={options} data={data} />
```
Where you would replace `Scatter` with whatever chart you chose in step 1. 

### Adding Sections and Styling

The structure of your website is dictated by how you order and structure elements in the return function of `App.js`. The appearance of your website is dictated by what you put in `.css` files. 

You can come up with your own layouts, but some simple ones have been set up for you:

* To group together headings, charts, paragraphs in a "section" (that puts a big gap between itself and the next section), wrap all of the elements in a `<div>` tag and give that div the class `section`, like so:
```
<div className="section>
<h1>some title</h1>
<iframe ... />
<p>some paragraph</p>
</div>
```
* To stack two things horizontally (so that some element goes on the left side, with 50% of the width, and some other element goes on the right side, with 50% of the width), wrap everything in a `div` with the class `side-by-side` and wrap the two inner elements in a `div` with the class `panel`. You can see an example of this in the last section of `App.js`:
```
<div className="side-by-side">
  <div className="panel">
    <h2>Check this out</h2>
    <p>some paragraph</p>
  </div>
  <div className="panel">
    <Scatterplot />
  </div>
</div>
```