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
      theme: {
        type: String,
        enum: ["light", "dark"],
        default: "light",
      },
      language: {
        type: String,
        default: "en",
      },
      notifications: {
        email: {
          type: Boolean,
          default: true,
        },
        sms: {
          type: Boolean,
          default: false,
        },
      },
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
