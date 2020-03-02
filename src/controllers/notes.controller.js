const notesController = {};

notesController.renderNoteForm = (req, res) => {
  res.send("note add");
};

notesController.createNewNote = (req, res) => {
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
