import { existsSync, renameSync } from "fs";

// UPDATE ASSETS
const isProfileUpdate = existsSync("./assets/new.png");
if (isProfileUpdate) {
  renameSync("./assets/new.png", "./assets/profile.png");
}
