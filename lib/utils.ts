export function getErrorMsg(error: any): string {
  if (!error) return "Unkown Error";
  if (typeof error === "string") return error as string;
  return error.message || "Unkown Error"
}
