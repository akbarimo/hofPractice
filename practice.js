var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

var multiplesOfFive = function (numbers) {
  var multiples = 0;
  _.each(numbers, function (numbers) {
    if (numbers % 5 === 0) {
      multiples++;
    }
  });
  return multiples;
};

var getUserTweets = function(tweets, user) {
  var result = [];
  _.each(tweets, function (tweets, index) {
    if (tweets.user === user) {
      result.push(tweets);
    }
  });
  return result;
};

var onlyOneFruit = function (fruits, targetFruit) {
  return _.filter(fruits, function (fruits) {
    return fruits === targetFruit;
  });
};

var startsWith = function (fruits, letter) {
  return _.filter(fruits, function (fruits) {
    return fruits.startsWith(letter);
  });
};

var cookiesOnly = function (desserts) {
  return _.filter(desserts, function (desserts) {
    return desserts.type === 'cookie';
  });
};

var filterUserTweets = function(tweets, user) {
  return _.filter(tweets, function (tweets) {
    return tweets.user === user;
  });
};

var upperCaseFruits = function (fruits) {
  return _.map(fruits, function (fruits) {
    return fruits.toUpperCase();
  });
};

var glutenFree = function (desserts) {
  return _.map(desserts, function (desserts) {
    if (!desserts.ingredients.includes('flour')) {
      desserts.glutenFree = true;
      return desserts;
    } else {
      desserts.glutenFree = false;
      return desserts;
    }
  });
};

var allUserMessages = function(tweets) {
  return _.map(tweets, function (tweets) {
    return tweets.message;
  });
};

var applyCoupon = function (groceries, coupon) {
  return _.map(groceries, function (groceries) {
    groceries.salePrice = '$' + (groceries.price.slice(1) * (1 - coupon)).toPrecision(3);
    return groceries;
  });
};

var sumTotal = function (products) {
  return _.reduce(products, function (acc, item) {
    return acc += Number(item.price.slice(1));
  }, 0);
};

var dessertCategories = function (desserts) {
  return _.reduce(desserts, function (acc, item) {
    if (!acc[item.type]) {
      acc[item.type] = 1;
    } else {
      acc[item.type] += 1;
    }
    return acc;
  }, {});
};

var countMessagesPerUser = function(tweets) {
  return _.reduce(tweets, function (acc, item) {
    if (!acc[item.user]) {
      acc[item.user] = 1;
    } else {
      acc[item.user] += 1;
    }
    return acc;
  }, {});
};

var ninetiesKid = function (movies) {
  return _.reduce(movies, function (acc, item) {
    if (item.releaseYear >= 1990 && item.releaseYear <= 2000) {
      acc.push(item.title);
    }
    return acc;
  }, []);
};

var movieNight = function (movies, timeLimit) {
  return _.reduce(movies, function (acc, item) {
    if (item.runtime <= timeLimit) {
      return acc = true;
    }
    return acc;
  }, false);
};