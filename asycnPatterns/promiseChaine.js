const getUser = (userId) => {
 return new Promise((resovle, reject) => {
  setTimeout(() => {
   resovle({ id: userId, userName: "Johnny" });
  }, 1000);
 });
};

const getUserPost = () => {
 return new Promise((resovle, reject) => {
  setTimeout(() => {
   resovle(["Post 1", "Post 2", "Post 3"]);
  }, 1000);
 });
};

getUser()
 .then((user) => {
  console.log("User : ", user);

  return getUserPost(user);
 })
 .then((posts) => {
  console.log("Posts : ", posts);
 })
 .catch((error) => {
  console.error("Error :", error);
 });
