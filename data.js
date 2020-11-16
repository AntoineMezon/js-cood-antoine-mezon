const users = [
    {
        id: '5d93612b19c1d00ecc0ddfbab',
        email: 'thibaut@cood.fr',
        firstname: 'Thibaut',
        lastname: 'Guedou',
        username: 'thibautcood',
        newsletter: false,
        roles: ['COOD_ADMIN', 'COOD_DEV'],
        creationDate: new Date('2019-09-30T14:40:21.459Z'),
        lastRequest: new Date('2019-09-30T14:40:21.459Z'),
    },
    {
        id: '5d93612b19gzc1d00ecc0b2bab',
        email: 'Célian@cood.fr',
        firstname: 'Célian',
        lastname: 'Niclot',
        username: 'celianN',
        newsletter: true,
        roles: ['COOD_DEV'],
        creationDate: new Date('2019-09-30T14:40:21.459Z'),
        lastRequest: new Date('2019-09-30T14:40:21.459Z'),
    },
    {
        id: '5d93612b1347d00ecc0b2bab',
        email: 'julien@cood.fr',
        firstname: 'Julien',
        username: 'juliencood',
        lastname: 'Aubert',
        newsletter: false,
        roles: ['COOD_ADMIN', 'COOD_MARCKET', 'COOD_DEV', 'COOD_EDITION'],
        creationDate: new Date('2019-09-30T14:40:21.459Z'),
        lastRequest: new Date('2019-09-30T14:40:21.459Z'),
    },
    {
        id: '5d93612b19c1d00eKLS0b2bab',
        email: 'gealle@cood.fr',
        firstname: 'Gaëlle',
        lastname: 'Guedou',
        username: 'gaelle',
        newsletter: false,
        roles: ['COOD_MARCKET', 'COOD_EDITION'],
        creationDate: new Date('2019-09-30T14:40:21.459Z'),
        lastRequest: new Date('2019-09-30T14:40:21.459Z'),
    },
    {
        id: '5d93612b19c1fhjscc0b2bab',
        email: 'steve@cood.fr',
        firstname: 'steve',
        lastname: 'Accarias',
        username: 'steveaca',
        newsletter: false,
        roles: ['COOD_EDITION'],
        creationDate: new Date('2019-09-30T14:40:21.459Z'),
        lastRequest: new Date('2019-09-30T14:40:21.459Z'),
    }
];

module.exports = {
    users
};
