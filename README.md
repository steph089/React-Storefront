# React Storefront POC
Pretty simple POC of a storefront. There's certainly room for improment but it's a POC not a 'live' app

## QuickView
It should still be running in google cloud @ https://react-store-hjphhqn6ta-ue.a.run.app
So feel free to smash that link and view it in a deployed state

## Does it work? 

Yeah! It's a pretty solid foundation, I'd consider the structure a bit more if i needed it to expand to an eventual live version with hopefully a better idea of the final product

You can click dynamic category links to view by category and then freely filter/sort the results within the app. Or just click the browse button to get everything i guess.

The product cards came out better then i'd expected. But the uncontrolled images make it a bit hard to have readable text on the imagery. Electronics are all black and everything else is very bright. The white with black boarder does work, cause science..

The random imagery is pretty fun, there's a cat statue that comes up for men's clothing sometimes and it's kinda great. But since it's random i had to use the white/black magic for text. 


## Is it perfect? 

No, 

The filters are too static and should be moved to a map to allow for quicker changes. Cause like this changes on a whim from buisness so they really need to be quickly modifyable, or else.. Also, the API should provide the values anyway, like, are you trying to download the data for upwards of 1000+ products and then sort/filter? sounds like a BED task to me, then you can get some sexy pagination goin too.

Does it look good? kinda, but an infinite amount of time could be spent tweaking little things, sourcing amazing imagery and creating a more cohesive/expandable user story or "site style"

The cart should probably connect with the API, but since it's not really maintained by me it won't be a reliable source of data like users and carts, there'd be no persistence. Not worth implementing at this time.... Don't hit refresh :) 

## Conclusion
Could spend more time and make it better, it's fine for now and i could deploy it to small sites with a few tweaks (mostly in the style department).

There's a lot of things that you'd put into a live site for optimizations like caching, tests and regression plans. That you're just not going to see in a project like this. That takes time to do. 

I'd probably also do it in typescript since that scales better, especially if you're not working on it alone. 

# The Basics

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
