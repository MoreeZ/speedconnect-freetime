const { getUsers } = require("./dbCalls");

module.exports = {
  calculateCommonTimes: async (userData) => {
    const users = await getUsers();
    const newUserData = {};
    Object.keys(userData).forEach((key) => {
      if (
        !(key === "id" || key === "created_at" || key === "name") &&
        userData[key]
      )
        newUserData[key] = [];
    });

    users.forEach((eachUser) => {
      if (eachUser.name !== userData.name) {
        Object.keys(newUserData).forEach((key) => {
          if (eachUser[key])
            newUserData[key] = [...newUserData[key], eachUser.name];
        });
      }
    });
    return Object.entries(newUserData);
  },
};
