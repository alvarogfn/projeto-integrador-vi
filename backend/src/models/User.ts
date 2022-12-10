import mongoose from "mongoose";

export interface UserInterface {
  username: string;
  password: string;
  name: string;
}

const UserSchema = new mongoose.Schema<UserInterface>({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.set("virtuals", true);
UserSchema.set("toJSON", { virtuals: true });
UserSchema.set("toObject", { virtuals: true });

export const UserModel = mongoose.model("User", UserSchema);
