const supabase = require("./supabase");

module.exports = {
  getUser: async (name) => {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("name", name);
    if (error) console.log("Error fetching data for" + name + ":", error.message);
    if(!data[0]) console.log("Error fetching data for" + name + ": No data exists :(");
    return data[0];
  },
  getUsers: async () => {
    const { data, error } = await supabase.from("users").select();

    if (error) console.log(error);
    return data;
  },
  updateUser: async (data) => {
    const { name } = data;
    const { error } = await supabase
      .from("users")
      .update({
        name,
        ["14:00-14:10"]: data["14:00-14:10"] ? false : true,
        ["14:10-14:20"]: data["14:10-14:20"] ? false : true,
        ["14:20-14:30"]: data["14:20-14:30"] ? false : true,
        ["14:30-14:40"]: data["14:30-14:40"] ? false : true,
        ["14:40-14:50"]: data["14:40-14:50"] ? false : true,
        ["14:50-15:00"]: data["14:50-15:00"] ? false : true,
        ["15:00-15:10"]: data["15:00-15:10"] ? false : true,
        ["15:10-15:20"]: data["15:10-15:20"] ? false : true,
        ["15:40-15:50"]: data["15:40-15:50"] ? false : true,
        ["15:50-16:00"]: data["15:50-16:00"] ? false : true,
        ["16:00-16:10"]: data["16:00-16:10"] ? false : true,
        ["16:10-16:20"]: data["16:10-16:20"] ? false : true,
        ["16:20-16:30"]: data["16:20-16:30"] ? false : true,
        ["16:30-16:40"]: data["16:30-16:40"] ? false : true,
        ["16:40-16:50"]: data["16:40-16:50"] ? false : true,
      })
      .match({ name: name });

    if (error) console.log("Error updating user data:", error.message);
  },
  addUser: async (data) => {
    const { name } = data;
    const { error } = await supabase.from("users").insert({
      name,
      ["14:00-14:10"]: data["14:00-14:10"] ? false : true,
      ["14:10-14:20"]: data["14:10-14:20"] ? false : true,
      ["14:20-14:30"]: data["14:20-14:30"] ? false : true,
      ["14:30-14:40"]: data["14:30-14:40"] ? false : true,
      ["14:40-14:50"]: data["14:40-14:50"] ? false : true,
      ["14:50-15:00"]: data["14:50-15:00"] ? false : true,
      ["15:00-15:10"]: data["15:00-15:10"] ? false : true,
      ["15:10-15:20"]: data["15:10-15:20"] ? false : true,
      ["15:40-15:50"]: data["15:40-15:50"] ? false : true,
      ["15:50-16:00"]: data["15:50-16:00"] ? false : true,
      ["16:00-16:10"]: data["16:00-16:10"] ? false : true,
      ["16:10-16:20"]: data["16:10-16:20"] ? false : true,
      ["16:20-16:30"]: data["16:20-16:30"] ? false : true,
      ["16:30-16:40"]: data["16:30-16:40"] ? false : true,
      ["16:40-16:50"]: data["16:40-16:50"] ? false : true,
    });
    if (error) console.log("Error inserting user data:", error.message);
  },
};
