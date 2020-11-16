/**
 * @param users un tableau d'utilisateurs
 * @returns un objet contenant la liste des mails trié par le rôle des utilisateurs
 */
const userEmailsGroupByRole = users => {
    return users.reduce((acc, obj) => {
        obj.roles.forEach(role => {
            acc[role] = acc[role] || [];
            acc[role].push(obj.email);
        });

        return acc;
    }, {});
};


/**
 * @param users Tableau d'utilisateurs
 * @returns un tableau contenant les mails utilisateurs ayant accepté la newsletter
 */
const userEmailsByNewsletter = users => {
    return users.filter(o => o.newsletter).map(o => o.email);
};

/**
 * @param users Tableau d'utilisateurs
 * @returns un objet contenant la liste des utilisateurs par leurs ID
 */
const usersByIds = users => {
    return users.reduce((acc, obj) => {
        acc[obj.id] = obj;

        return acc;
    }, {});
};

module.exports = {
    userEmailsGroupByRole,
    userEmailsByNewsletter,
    usersByIds,
};
