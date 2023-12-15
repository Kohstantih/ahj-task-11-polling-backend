const { faker } = require('@faker-js/faker');
const { v4 } = require('uuid');

let counter = 0;
const step = 1000000;
let timestamp = null;

function createRandomMessage () {
    return {
    id: v4(),
    from: `${faker.person.firstName()}@${faker.person.lastName()}`,
    subject: faker.lorem.sentence({ min: 4, max: 7 }),
    body: faker.lorem.paragraph({ min: 2, max: 5 }),
    received: new Date(faker.date.between({ from: timestamp - ((4 - counter) * step), to: timestamp - ((3 - counter) * step) })).getTime(),
  }
}

function getListMessages(param) {
  if (counter === 3) {
    counter = 0;
    timestamp = null;
  }
  timestamp = param;
  counter += 1;
  
  return faker.helpers.multiple(createRandomMessage, { count: 5 })
};

module.exports = { getListMessages };
