describe('Users factory', () => {
  var Users;

  var userList = [
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      location: 'New York',
      twitter: 'gijane'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      location: 'New York',
      twitter: 'billybob'
    },
    {
      id: '3',
      name: 'Jim',
      role: 'Developer',
      location: 'Chicago',
      twitter: 'jimbo'
    },
    {
      id: '4',
      name: 'Bill',
      role: 'Designer',
      location: 'LA',
      twitter: 'dabill'
    }
  ];

  var singleUser = {
    id: '2',
    name: 'Bob',
    role: 'Developer',
    location: 'New York',
    twitter: 'billybob'
  }

  // Before each test load our api.users module
  beforeEach(angular.mock.module('api.users'));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject((_Users_) => {
    Users = _Users_;
  }));

  it('should exist', () => {
    expect(Users).toBeDefined();
  });

  describe('.all()', () => {
    it('should exist', () => {
      expect(Users.all).toBeDefined();
    });

    it('should return a hard-coded list of users', () => {
      expect(Users.all()).toEqual(userList);
    });
  });

  describe('.findById()', () => {
    it('should exist', () => {
      expect(Users.findById).toBeDefined();
    });

    it('should return one user object if it exists', () => {
      expect(Users.findById('2')).toEqual(singleUser);
    })

    it('should return undefined if the user cannot be found', () => {
      expect(Users.findById('ABC')).not.toBeDefined();
    });
  });

});
