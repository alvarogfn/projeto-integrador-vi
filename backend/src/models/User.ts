import mongoose from "mongoose";

export interface UserInterface {
  login: string;
  password: string;
}

const UserSchema = new mongoose.Schema<UserInterface>({
  login: {
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
