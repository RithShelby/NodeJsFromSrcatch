const fs = require("fs").promises;
const path = require("path");
const readline = require("readline");

const NOTES_FILE = path.join(__dirname, "note.json");
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

async function loadNotes() {
 try {
  const data = await fs.readFile(NOTES_FILE, "utf-8");
  return JSON.parse(data);
 } catch (error) {
  if (error.code === "ENOENT") {
   return [];
  }
  throw error;
 }
}

async function saveNotes(notes) {
 await fs.writeFile(NOTES_FILE, JSON.stringify(notes, null, 2));
}

async function addNotes(content) {
 const notes = await loadNotes();
 const note = {
  id: notes.length + 1,
  content,
  create_at: new Date().toString(),
 };
 notes.push(note);
 await saveNotes(notes);
 console.log(`Note added with ID :  ${note.id}`);
}

async function viewNotes() {
 const notes = await loadNotes();
 if (notes.length === 0) {
  console.log("No notes founds");
  return;
 }
 notes.forEach((note) => {
  console.log(`ID : ${note.id} | Created : ${note.create_at}`);
  console.log(`Content: ${note.content}\n`);
 });
}

async function editNotes(id, newContent) {
 const notes = await loadNotes();
 const note = notes.find((n) => n.id === parseInt(id));
 if (!note) {
  console.log(`Note with ID ${id} not found`);
  return;
 }
 note.content = newContent;
 note.updated_at = new Date().toISOString();
 await saveNotes(notes);
 console.log(`Note ${id} updated`);
}
async function deleteNote(id) {
 const notes = await loadNotes();
 const filteredNotes = notes.filter((n) => n.id !== parseInt(id));
 if (filteredNotes.length === notes.length) {
  console.log(`Note with ID ${id} not found`);
  return;
 }
 await saveNotes(filteredNotes);
 console.log(`Note ${id} deleted`);
}
function promptUser() {
 rl.question("Enter command (add/view/edit/delete/quit): ", async (command) => {
  switch (command.toLowerCase()) {
   case "add":
    rl.question("Enter note content: ", async (content) => {
     await addNotes(content);
     promptUser();
    });
    break;
   case "view":
    await viewNotes();
    promptUser();
    break;
   case "edit":
    rl.question("Enter note ID to edit: ", async (id) => {
     rl.question("Enter new content: ", async (content) => {
      await editNotes(id, content);
      promptUser();
     });
    });
    break;
   case "delete":
    rl.question("Enter note ID to delete: ", async (id) => {
     await deleteNote(id);
     promptUser();
    });
    break;
   case "quit":
    rl.close();
    break;
   default:
    console.log("Invalid command. Use add, view, edit, delete, or quit.");
    promptUser();
  }
 });
}

console.log("Welcome to the Note Taker CLI!");
console.log("Available commands: add, view, edit, delete, quit");
promptUser();

rl.on("close", () => {
 console.log("Goodbye!");
 process.exit(0);
});
