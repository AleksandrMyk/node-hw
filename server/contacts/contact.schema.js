const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subscription: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String, required: false, default: "" },
  },
  { versionKey: false }
);
contactSchema.plugin(mongoosePaginate);
const contactModel = mongoose.model("contacts", contactSchema);

module.exports = contactModel;
