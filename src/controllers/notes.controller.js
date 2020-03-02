const notesController = {};

notesController.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};

notesController.createNewNote = (req, res) => {
  console.log(req.body);
  res.send("Create new note");
};

notesController.renderNotes = (req, res) => {
  res.send("render notes");
};

notesController.renderEditForm = (req, res) => {
  res.send("render edit form");
};

notesController.updateNote = (req, res) => {
  res.send("update note");
};

notesController.deleteNote = (req, res) => {
  res.send("Eliminando nota");
};

module.exports = notesController;
