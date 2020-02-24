const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);//Times algo is executed
    return await bcrypt.hash(password, salt); //returns cypher password
};

//Compares account pass to input pass when trying to log in
UserSchema.methods.matchPassword = function(password) {
    return await bcrypt.compare(password, this.password); 
};

module.exports = model("User", UserSchema);
