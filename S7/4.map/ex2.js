const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}
, {id:4, name: 'Amanda'}];

const result = users.map(value => value.name[0] === 'A' ? 'Anacleto': value.name);
    console.log(result)