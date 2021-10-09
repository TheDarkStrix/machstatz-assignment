export const urls = {
  allUsers: `get_all_users`,
  createUser: `add_new_user`,
  deleteUser: (email) => `delete_existing_user?email=${email}`,
};
