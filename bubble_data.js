// Requires Bubble Data
// Maintain Only 50 Entries here
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

// South Carolina Completed
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

// Illinois Completed
dict["Illinois"] = [
  { name: "chicken", count: 2674, avg_rating: 3.638743455497381 },
  { name: "sauce", count: 1881, avg_rating: 3.533227006911217 },
  { name: "pizza", count: 1833, avg_rating: 3.462084015275505 },
  { name: "cheese", count: 1759, avg_rating: 3.5770324047754394 },
  { name: "beer", count: 1355, avg_rating: 3.7675276752767526 },
  { name: "fried", count: 1319, avg_rating: 3.3381349507202405 },
  { name: "salad", count: 1318, avg_rating: 3.4764795144157814 },
  { name: "rice", count: 1281, avg_rating: 3.454332552693207 },
  { name: "beef", count: 1201, avg_rating: 3.691090757701915 },
  { name: "bread", count: 1176, avg_rating: 3.465986394557824 },
  { name: "pork", count: 1028, avg_rating: 3.8608949416342413 },
  { name: "sandwich", count: 999, avg_rating: 3.3943943943943946 },
  { name: "burger", count: 935, avg_rating: 3.4877005347593584 },
  { name: "sushi", count: 922, avg_rating: 3.742950108459872 },
  { name: "flavour", count: 904, avg_rating: 3.3661504424778763 },
  { name: "spicy", count: 891, avg_rating: 3.9259259259259274 },
  { name: "coffee", count: 846, avg_rating: 3.7411347517730498 },
  { name: "soup", count: 802, avg_rating: 3.491271820448878 },
  { name: "steak", count: 774, avg_rating: 3.4160206718346253 },
  { name: "fish", count: 741, avg_rating: 3.624831309041835 },
  { name: "appetizer", count: 709, avg_rating: 3.578279266572637 },
  { name: "chinese", count: 677, avg_rating: 3.896602658788773 },
  { name: "potato", count: 650, avg_rating: 3.8 },
  { name: "hot", count: 644, avg_rating: 3.631987577639751 },
  { name: "salsa", count: 616, avg_rating: 3.7970779220779214 },
  { name: "brunch", count: 596, avg_rating: 3.6929530201342287 },
  { name: "bacon", count: 595, avg_rating: 3.6722689075630246 },
  { name: "wine", count: 549, avg_rating: 3.8907103825136615 },
  { name: "dessert", count: 545, avg_rating: 3.6752293577981634 },
  { name: "egg", count: 542, avg_rating: 3.5738007380073795 },
  { name: "cream", count: 521, avg_rating: 3.6813819577735134 },
  { name: "mexican", count: 481, avg_rating: 4.0207900207900265 },
  { name: "shrimp", count: 436, avg_rating: 3.5435779816513766 },
  { name: "sweet", count: 426, avg_rating: 3.7159624413145536 },
  { name: "tacos", count: 425, avg_rating: 3.9058823529411764 },
  { name: "weekend", count: 414, avg_rating: 3.6062801932367146 },
  { name: "burrito", count: 393, avg_rating: 3.6335877862595423 },
  { name: "crispy", count: 385, avg_rating: 3.9792207792207783 },
  { name: "roll", count: 380, avg_rating: 3.5763157894736843 },
  { name: "pizzas", count: 367, avg_rating: 3.5640326975476837 },
  { name: "salty", count: 360, avg_rating: 3.1583333333333314 },
  { name: "pasta", count: 357, avg_rating: 3.4117647058823533 },
  { name: "lettuce", count: 357, avg_rating: 3.0756302521008396 },
  { name: "tea", count: 349, avg_rating: 3.661891117478509 },
  { name: "sausage", count: 331, avg_rating: 3.679758308157099 },
  { name: "indian", count: 330, avg_rating: 3.881818181818182 },
  { name: "salmon", count: 325, avg_rating: 3.747692307692308 },
  { name: "buffet", count: 319, avg_rating: 3.238244514106583 },
  { name: "bbq", count: 317, avg_rating: 4.100946372239748 },
  { name: "korean", count: 311, avg_rating: 3.752411575562701 },
  { name: "curry", count: 309, avg_rating: 3.802588996763754 },
];
