export default {
  username: {
    label: 'Username',
    slug: 'username',
    inputType: 'text',
    required: true,
    validate: (value) => {
      if (value.length < 3) return 'Username must be 3 characters or more'
      return null
    }
  }
}
