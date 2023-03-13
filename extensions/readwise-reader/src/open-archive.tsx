import { open, closeMainWindow } from "@raycast/api";
import { BASE_URL } from "./utils";

export default async function Archive() {
  await open(BASE_URL + "archive");
  await closeMainWindow();
}
