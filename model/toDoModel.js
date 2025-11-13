const { v4: uuidv4 } = require("uuid"); // Optional: For unique IDs (npm install uuid)

const ListModel = () => {
 let lists = []; // Private array

 // Helper functions
 const getAll = (showInactive = false) => {
  return showInactive
   ? lists
   : lists.filter((list) => list.status === "active");
 };

 const getById = (id) => lists.find((list) => list.id === id);

 const create = (newList) => {
  const listWithId = {
   ...newList,
   id: uuidv4(), // Generate unique ID (optional; remove if IDs come from elsewhere)
   status: "active", // Default status
   createdAt: new Date().toISOString(), // Optional timestamp
  };
  lists.push(listWithId);
  return listWithId;
 };

 const update = (id, updatedFields) => {
  // Renamed param for clarity
  const list = getById(id);
  if (list) {
   Object.assign(list, updatedFields);
   return list;
  }
  return null;
 };

 const softDelete = (id) => {
  const list = getById(id);
  if (list) {
   list.status = "inactive";
   return list;
  }
  return null;
 };

 return { getAll, getById, create, update, softDelete };
};

// For CommonJS (if using require):
module.exports = ListModel;

// Or for ES modules (if using import):
// export { ListModel };
