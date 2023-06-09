type AuthorizeProps = {
  condition: boolean;
  message?: string;
}[];

export const authorize = (conditions: AuthorizeProps, override?: Boolean) => {
  if (override) return;
  const failedCondition = conditions.find((condition) => !condition.condition);
  if (failedCondition) {
    throw new Error(failedCondition.message || "Unauthorized.");
  }
};
