const { users } = require('./data');
const { userEmailsGroupByRole, userEmailsByNewsletter, usersByIds } = require('./lib');

console.info("Exercice 01");
console.info(userEmailsGroupByRole(users));
console.info("- Fin -");
console.info("Exercice 02");
console.info(userEmailsByNewsletter(users));
console.info("- Fin -");
console.info("Exercice 03");
console.info(usersByIds(users));
console.info("- Fin -");
