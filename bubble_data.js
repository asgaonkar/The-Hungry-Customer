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
];
