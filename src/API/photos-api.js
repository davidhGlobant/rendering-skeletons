import service from "./promiseManager";

export function fetch() {
  return service.get("/photos");
}


