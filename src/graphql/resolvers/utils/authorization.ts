export const authorize = (condition: boolean) => {
  if (!condition) {
    throw new Error("Unauthorized.");
  }
};
