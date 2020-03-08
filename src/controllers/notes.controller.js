const notesController = {};

const Note = require("../models/Note");

notesController.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};

notesController.createNewNote = async (req, res) => {
  const { title, description } = req.body;

  const newNote = new Note({ title, description });

  await newNote.save();

  res.redirect("/notes");
};

notesController.renderNotes = async (req, res) => {
  const notes = await Note.find();
  res.render("notes/all-notes", { notes });
};

notesController.renderEditForm = (req, res) => {
  res.send("render edit form");
};

notesController.updateNote = (req, res) => {
  res.send("update note");
};

notesController.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.redirect("/notes");
};

module.exports = notesController;
