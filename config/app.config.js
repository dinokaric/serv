import NoteController from '../controllers/note.controller.js';
import NoteService from "../services/note.service.js";
import InMemoryRepository from "../DAL/inmemory.repository.js";

const inMemoryRepository = new InMemoryRepository();
const noteService = new NoteService({ repository: inMemoryRepository});
const noteController = new NoteController({ noteService: noteService});

export default {
  repositories: {
    inMemoryRepository
  },
  services: {
    noteService
  },
  controllers: {
    noteController
  }
}