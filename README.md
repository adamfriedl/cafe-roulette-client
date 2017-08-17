# Cafe Roulette

Get fun suggestions for where to grab your next cup. 

Check out the [live demo](https://caferoulette.herokuapp.com).

## Installation

Fork. Clone. Run `yarn` or `npm install`. Fire up your local server.

## Usage

In production, the app interacts with a Rails API at https://floating-temple-82552.herokuapp.com. 

For dev purposes, you can grab that [repo](https://github.com/adamfriedl/cafe-roulette-api) and run it simultaneously on your local server with `rails s`. CORS is already enabled and they are set up to run on different ports. Then change the endpoint that your Redux actions fetch from to the locally running backend.

## Contributing

Suggestions for improvement are always welcome!

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D