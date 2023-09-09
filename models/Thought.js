const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction")
const dateformater = require ("../utils/dateformater.js")
// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => dateformater(date)
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reaction.lenght
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
