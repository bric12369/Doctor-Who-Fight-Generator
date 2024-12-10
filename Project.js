const goodiesList = ['The Doctor', 'Rose Tyler', 'Donna Noble', 'Mickey Smith', 'Sarah Jane Smith',
    'K-9', 'Martha Jones', 'River Song', 'Amy Pond', 'Rory Williams', 'Wilfred Mott',
    'Captain Jack Harkness', 'Jackie Tyler', 'Kate Stewart', 'Clara Oswald', 'The Face of Boe'];

const baddiesList = ['a Dalek', 'a Cyberman', 'a Sontaran', 'The Master', 'The Zygons',
    'The Vashta Narada', 'a Weeping Angel', 'The Silence', 'The Family of Blood', 'The Midnight Creature',
    'The Beast', 'The Abzorbaloff', 'The Adipose', 'Lady Cassandra', 'The Maestro',
    'The Celestial Toymaker', 'Pig Slaves', 'The Empty Child', 'The Slitheen'];

const locationsList = ['Earth', 'The Powell Estate', 'Gallifrey', 'Clom',
    'Raxacoricofallapatorius', 'New Earth', 'Adipose 3', `Demon's Run`, 'Skaro', 'Krop Tor',
    'The Library', 'Midnight', 'Sontar', 'Trenzalore', 'Platform One'];  


const helperFunction = arr => {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
};

const randomGoody = () => {
    return helperFunction(goodiesList);
};

const randomBaddy = () => {
    return helperFunction(baddiesList);
};

const randomLocation = () => {
    return helperFunction(locationsList);
};

const randomFightGenerator = () => {
    console.log(`You have chosen ${randomGoody()} to fight ${randomBaddy()} on ${randomLocation()}.
Who do you think will win?`);
};

randomFightGenerator();
