# To Do
- Finish form
- Create index page
- Google Maps API
- Style



const tops =
{
 shops:
  [
    {
      "id": 1,
      "user_id": 1,
      "name": "Cafe Grumpy",
      "description": "'Girls' coffee shop in Greenpoint.",
      "website": "cafegrumpy.com",
      "address": "10 Diamond Street, Brooklyn, NY 11222",
      "food": "pastries",
      "price_range": "middle-of-the-road"
    },
    {
      "id": 2,
      "user_id": 1,
      "name": "FIKA",
      "description": "'Girls' coffee shop in Greenpoint.",
      "website": "cafegrumpy.com",
      "address": "10 Diamond Street, Brooklyn, NY 11222",
      "food": "pastries",
      "price_range": "middle-of-the-road"
    }
  ]
}


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path='/' component={Recommendation} />
          <Route path='/coffeeshops/new' component={CoffeeShopsForm} />
          <Route path='/coffeeshops' component={CoffeeShopsIndex} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')

  <Route exact path='/' component={Recommendation} />
