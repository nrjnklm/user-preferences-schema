// schema.js
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// Define the schema
const UserPreferencesSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },
    preferences: {
      type: Object,
      required: [true, "Preferences are required"],
      default: {}, // ensures the object is initialized
    },
    "preferences.theme": {
      type: String,
      enum: ["light", "dark"],
      default: "light",
    },
    "preferences.language": {
      type: String,
      default: "en",
    },
    "preferences.notifications": {
      type: Object,
      default: {}, // ensures notifications object is initialized
    },
    "preferences.notifications.email": {
      type: Boolean,
      default: true,
    },
    "preferences.notifications.sms": {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // automatically adds createdAt & updatedAt
    versionKey: false,
  }
);

// Compile into a model
const UserPreferences = model("UserPreferences", UserPreferencesSchema);

module.exports = UserPreferences;
