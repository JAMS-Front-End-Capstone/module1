
db.auth('root', 'mypassword');
db = db.getSiblingDB('attraction');
db.createUser(
  {
    user: 'student',
    pwd: 'student',
    roles: [
      {
        role: 'readWrite',
        db: 'attraction'
      }
    ]
  }
);
