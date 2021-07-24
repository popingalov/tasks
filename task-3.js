/* function maxProfit(price) {
  let minPrice = price[0];
  let maxProfit = 0;
  for (let index = 0; index < price.length; index += 1) {
    const element = price[index];
    if (element < minPrice) {
      minPrice = element;
    }
    if (element - minPrice > maxProfit) {
      maxProfit = element - minPrice;
    }
  }
  return maxProfit;
}

const go = [9, 2, 6, 2, 1];
const go = [9, 5, 4, 2, 1];

console.log(maxProfit(go)); */

/* const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};
console.log(hotel['name']);
 */

/* const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
  showName() {
    console.log(this.name);
  },
  changeCapacity(value) {
    this.capacity = value;
  },
};

hotel.showName(); // Resort Hotel

hotel.changeCapacity(200);
console.log(hotel.capacity); // 200 */

/* const playlist = {
  name: 'Мой плей лист',
  ratting: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
};
console.log(playlist.name); */

/* const playlist = {
  name: 'Мой плей лист',
  ratting: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
};
console.log(playlist.name); */

/* const playlist = {
  name: 'Мой плей лист',
  ratting: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
}; */
/*   getName: function () {
    console.log('Привет лебеди');
  }, */
/* getName() {
    console.log('Привет лебеди');
  }, */

/*  changeName(newName) {
    this.name = newName;
  },
  addTrack(newTrack) {
    this.tracks.push(newTrack);
    this.trackCount = this.tracks.length;
  },
  updateRatting(newRatting) {
    this.ratting = newRatting;
  },
};


playlist.changeName('Новый Журавель');
playlist.addTrack('Новый трек');
playlist.updateRatting(4);
playlist.updateRatting(4);
console.log(playlist); */

/* const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};
let totalFeedback = 0;

const keys = Object.keys(feedback);
console.log(keys);

for (const key of keys) {
  console.log(feedback[key]);
  totalFeedback += feedback[key];
}
console.log(totalFeedback); */

/* const values = Object.values(feedback);
console.log(values);
for (const value of values) {
  totalFeedback += value;
}
console.log(totalFeedback); */

/* const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

console.table(friends); */

/* 

for (const friend of friends) {
  console.log(friend);
  friend.newprop = 555;
}

console.table(friends); */

/*  const findFriendByName = function (allFriends, Friendname) {
  for (const friend of allFriends) { */
/*   if (friend.name === Friendname) {
      return 'нашли';
    } */
/*     if (friend.name.includes(Friendname)) {
      return 'нашли';
    }
  }
  return 'Ищи дальше';
};

console.log(findFriendByName(friends, 'Poly')); */

/* const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    console.log(friend.name);

    names.push(friend.name);
  }
  return names;
};
console.log(getAllNames(friends)); */

/* const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];
  for (const friend of allFriends) {
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }
  return onlineFriends;
};

console.log(getOnlineFriends(friends));
 */

/* const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];
  for (const friend of allFriends) {
    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }
  return offlineFriends;
};

console.log(getOfflineFriends(friends)); */

/* function sortsFriends(allFriends) {
  const statusInGame = {
    online: [],
    ofline: [],
  };
  for (const friend of allFriends) {
    if (!friend.online) {
      statusInGame.ofline.push(friend);
      continue;
    }
    statusInGame.online.push(friend);
  }
  return statusInGame;
}
console.log(sortsFriends(friends)); */
/* 
function sortsFriends(allFriends) {
  const statusInGame = {
    online: [],
    offline: [],
  };
  for (const friend of allFriends) {
    const key = friend.online ? 'online' : 'offline';
    statusInGame[key].push(friend);
  }
  return statusInGame;
}
console.log(sortsFriends(friends)); */

/* function sortsFriends(allFriends) {
  const statusInGame = {
    online: [],
    offline: [],
  };
  for (const friend of allFriends) {
    friend.online
      ? statusInGame.online.push(friend)
      : statusInGame.offline.push(friend);
  }
  return statusInGame;
}
console.log(sortsFriends(friends));
 */

/* 
const a = [{ a: 1, aa: 32 }, { b: 2 }, { c: 3 }, { d: 4 }];

const b = [...a];
console.log(b);
console.log(a);
b[0].x = 1000;
 */

/* const lastWeekTemps = [1, 2, 3];
const currentWeekTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

console.log(...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps); */

/* const lastWeekTemps = [1, 2, 3];
const currentWeekTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

console.log([...currentWeekTemps, ...lastWeekTemps, ...nextWeekTemps].sort()); */

/* const a = { x: 1, y: 2 };
const b = { x: 0, z: 2 };

const c = Object.assign({}, a, b);
console.log(c); */

/* const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

const c = { ...a, ...b };

console.log(c); */

/* const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};
console.log(finalSettings); */

/* const playlist = {
  name: 'Мой плей лист',
  ratting: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  trackCount: 3,
};

const { name, ratting } = playlist;
console.log(name, ratting);

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://3.404content.com/1/13/F0/1478331329175881193/fullsize.jpg',
  stats: {
    followers: 5603,
    view: 4827,
    likes: 1308,
  },
};
 */
/* const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
let keys = [];
let values = [];
for (const key in apartment) {
  keys += [key];
  values = [apartment[key]];
}
console.log(keys); */
/* const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(name) {
  let grizgo = 0;
  for (const key of products) {
    if (key.name === name) {
      grizgo = key.price * key.quantity;
    }
  }
  return grizgo;
}
 */

// Change code below this line

/* const bookShelf = {
  // Change code below this line
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  // Change code above this line
  removeBook(bookName) {
    return this.books.splice(bookName);
  },
};
console.log(bookShelf.removeBook('The last kingdom')); */
/* const bookShelf = {
  // Change code below this line
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  // Change code above this line
  removeBook(bookName) {
    this.books.splice(bookName, 1);
  },
};
console.log(bookShelf);

bookShelf.removeBook('The last kingdom');
console.log(bookShelf); */
/* 
const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line

    this.books.splice(this.books.indexOf(oldName), 1, newName);
    return this.books;
    // Change code above this line
  },
};

console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles')); */
