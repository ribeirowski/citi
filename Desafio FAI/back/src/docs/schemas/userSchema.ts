const userSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    username: {
      type: 'string',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      format: 'password',
    },
    likedGames: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
  required: ['name', 'username', 'email', 'password'],
};

export default userSchema;
