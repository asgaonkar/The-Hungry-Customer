// Requires Bubble Data

var dict = {};

dict["Arizona"] = [
  {
    name: "fox",
    count: 130,
  },
  {
    name: "ass",
    count: 119,
  },
  {
    name: "wolf",
    count: 105,
  },
  {
    name: "time",
    count: 99,
  },
  {
    name: "day",
    count: 78,
  },
  {
    name: "replied",
    count: 61,
  },
  {
    name: "dog",
    count: 52,
  },
  {
    name: "eagle",
    count: 46,
  },
  {
    name: "caught",
    count: 43,
  },
  {
    name: "friend",
    count: 43,
  },
  {
    name: "fell",
    count: 42,
  },
  {
    name: "found",
    count: 41,
  },
  {
    name: "jupiter",
    count: 41,
  },
  {
    name: "mouse",
    count: 39,
  },
  {
    name: "stag",
    count: 39,
  },
  {
    name: "little",
    count: 37,
  },
  {
    name: "master",
    count: 37,
  },
  {
    name: "cock",
    count: 34,
  },
  {
    name: "cried",
    count: 34,
  },
  {
    name: "water",
    count: 34,
  },
  {
    name: "dont",
    count: 33,
  },
  {
    name: "farmer",
    count: 33,
  },
  {
    name: "sheep",
    count: 32,
  },
  {
    name: "presently",
    count: 31,
  },
  {
    name: "horse",
    count: 30,
  },
  {
    name: "life",
    count: 30,
  },
  {
    name: "set",
    count: 30,
  },
  {
    name: "hare",
    count: 29,
  },
  {
    name: "begged",
    count: 28,
  },
];

dict["California"] = [
  {
    name: "lion",
    count: 143,
  },
  {
    name: "fox",
    count: 130,
  },
  {
    name: "ass",
    count: 119,
  },
  {
    name: "wolf",
    count: 105,
  },
  {
    name: "time",
    count: 99,
  },
  {
    name: "dog",
    count: 52,
  },
  {
    name: "eagle",
    count: 46,
  },
  {
    name: "caught",
    count: 43,
  },
  {
    name: "friend",
    count: 43,
  },
  {
    name: "fell",
    count: 42,
  },
  {
    name: "found",
    count: 41,
  },
  {
    name: "jupiter",
    count: 41,
  },
  {
    name: "mouse",
    count: 39,
  },
  {
    name: "stag",
    count: 39,
  },
  {
    name: "little",
    count: 37,
  },
  {
    name: "master",
    count: 37,
  },
  {
    name: "cock",
    count: 34,
  },
  {
    name: "cried",
    count: 34,
  },
  {
    name: "water",
    count: 34,
  },
  {
    name: "dont",
    count: 33,
  },
];

dict["South Carolina"] = [
  { name: "chicken", count: 793, avg_rating: 3.426229508 },
  { name: "cheese", count: 539, avg_rating: 3.532467532 },
  { name: "pizza", count: 451, avg_rating: 3.3592017739999998 },
  { name: "sauce", count: 449, avg_rating: 3.31403118 },
  { name: "burger", count: 438, avg_rating: 3.550228311 },
  { name: "beer", count: 399, avg_rating: 3.546365915 },
  { name: "salad", count: 331, avg_rating: 3.419939577 },
  { name: "sushi", count: 290, avg_rating: 3.589655172 },
  { name: "pork", count: 270, avg_rating: 3.9185185189999996 },
  { name: "shrimp", count: 262, avg_rating: 3.7557251910000002 },
  { name: "sandwich", count: 244, avg_rating: 3.3811475410000003 },
  { name: "bacon", count: 233, avg_rating: 3.733905579 },
  { name: "bread", count: 229, avg_rating: 3.4104803489999997 },
  { name: "beef", count: 226, avg_rating: 3.561946903 },
  { name: "fish", count: 201, avg_rating: 3.532338308 },
  { name: "coffee", count: 194, avg_rating: 3.8041237110000004 },
  { name: "rice", count: 192, avg_rating: 3.265625 },
  { name: "soup", count: 177, avg_rating: 3.4915254239999998 },
  { name: "brunch", count: 166, avg_rating: 3.6566265060000003 },
  { name: "onion", count: 155, avg_rating: 3.55483871 },
  { name: "potato", count: 154, avg_rating: 3.305194805 },
  { name: "ribs", count: 152, avg_rating: 3.875 },
  { name: "appetizer", count: 150, avg_rating: 3.5 },
  { name: "egg", count: 142, avg_rating: 3.6478873239999996 },
  { name: "pasta", count: 140, avg_rating: 3.507142857 },
  { name: "steak", count: 129, avg_rating: 3.441860465 },
  { name: "roll", count: 125, avg_rating: 3.32 },
  { name: "fried", count: 122, avg_rating: 3.491803279 },
  { name: "chinese", count: 119, avg_rating: 4.067226891000001 },
  { name: "cream", count: 118, avg_rating: 3.677966102 },
  { name: "dessert", count: 109, avg_rating: 4.119266055 },
  { name: "sweet", count: 109, avg_rating: 3.623853211 },
  { name: "hot", count: 107, avg_rating: 3.485981308 },
  { name: "spicy", count: 107, avg_rating: 3.887850467 },
  { name: "butter", count: 104, avg_rating: 3.576923077 },
  { name: "wine", count: 100, avg_rating: 4.1 },
  { name: "lettuce", count: 98, avg_rating: 2.897959184 },
  { name: "seafood", count: 95, avg_rating: 3.915789474 },
  { name: "weekend", count: 92, avg_rating: 3.652173913 },
  { name: "bun", count: 89, avg_rating: 3.04494382 },
  { name: "crab", count: 85, avg_rating: 3.588235294 },
  { name: "salsa", count: 85, avg_rating: 3.447058824 },
  { name: "gravy", count: 84, avg_rating: 3.488095238 },
  { name: "crispy", count: 83, avg_rating: 4.096385542 },
  { name: "bbq", count: 82, avg_rating: 3.7682926830000003 },
  { name: "italian", count: 80, avg_rating: 3.7375 },
  { name: "pie", count: 77, avg_rating: 3.7012987010000002 },
  { name: "bagel", count: 77, avg_rating: 3.844155844 },
  { name: "buffet", count: 75, avg_rating: 3.386666667 },
  { name: "sausage", count: 75, avg_rating: 3.4533333330000002 },
  { name: "asian", count: 73, avg_rating: 4.068493151 },
  { name: "salmon", count: 72, avg_rating: 3.8194444439999997 },
  { name: "corn", count: 69, avg_rating: 3.898550725 },
  { name: "tea", count: 68, avg_rating: 3.014705882 },
  { name: "slaw", count: 65, avg_rating: 3.615384615 },
  { name: "slice", count: 65, avg_rating: 3.615384615 },
  { name: "brisket", count: 62, avg_rating: 3.725806452 },
  { name: "buffalo", count: 62, avg_rating: 3.758064516 },
  { name: "lobster", count: 61, avg_rating: 3.68852459 },
  { name: "french", count: 59, avg_rating: 3.8135593219999997 },
  { name: "toast", count: 56, avg_rating: 3.375 },
  { name: "ice", count: 55, avg_rating: 2.945454545 },
  { name: "salty", count: 54, avg_rating: 3.12962963 },
  { name: "tomato", count: 54, avg_rating: 3.148148148 },
  { name: "pepper", count: 54, avg_rating: 3.166666667 },
  { name: "chili", count: 52, avg_rating: 3.75 },
  { name: "tacos", count: 51, avg_rating: 4.0 },
  { name: "spinach", count: 51, avg_rating: 3.7254901960000004 },
  { name: "cool", count: 50, avg_rating: 3.98 },
  { name: "biscuit", count: 50, avg_rating: 3.24 },
  { name: "dip", count: 50, avg_rating: 3.7 },
  { name: "meatloaf", count: 49, avg_rating: 4.285714286 },
  { name: "pizzas", count: 48, avg_rating: 3.479166667 },
  { name: "cake", count: 48, avg_rating: 3.708333333 },
  { name: "garlic", count: 47, avg_rating: 3.5531914889999996 },
  { name: "avocado", count: 47, avg_rating: 3.489361702 },
  { name: "mexican", count: 46, avg_rating: 3.52173913 },
  { name: "fruit", count: 45, avg_rating: 3.355555556 },
  { name: "broccoli", count: 45, avg_rating: 3.4666666669999997 },
  { name: "nachos", count: 45, avg_rating: 3.755555556 },
  { name: "hummus", count: 41, avg_rating: 4.268292683 },
  { name: "greek", count: 41, avg_rating: 3.8048780489999996 },
  { name: "burrito", count: 40, avg_rating: 2.95 },
  { name: "chocolate", count: 40, avg_rating: 3.675 },
  { name: "hibachi", count: 39, avg_rating: 3.5641025639999997 },
  { name: "ham", count: 39, avg_rating: 3.717948718 },
  { name: "soda", count: 38, avg_rating: 3.026315789 },
  { name: "cole", count: 38, avg_rating: 3.236842105 },
  { name: "coleslaw", count: 38, avg_rating: 3.473684211 },
  { name: "frozen", count: 38, avg_rating: 2.394736842 },
  { name: "custard", count: 37, avg_rating: 4.297297297 },
  { name: "dough", count: 37, avg_rating: 3.0 },
  { name: "barbecue", count: 36, avg_rating: 3.916666667 },
  { name: "marinara", count: 36, avg_rating: 3.0555555560000003 },
  { name: "farm", count: 36, avg_rating: 4.6111111110000005 },
  { name: "spice", count: 35, avg_rating: 3.7714285710000004 },
  { name: "grill", count: 35, avg_rating: 3.2285714289999996 },
  { name: "taco", count: 35, avg_rating: 3.6 },
  { name: "omelet", count: 35, avg_rating: 3.4857142860000003 },
  { name: "hamburger", count: 35, avg_rating: 2.9142857139999996 },
  { name: "mushroom", count: 34, avg_rating: 3.882352941 },
];
