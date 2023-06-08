type ValidateInputProps = {
  condition: boolean;
  message?: string;
}[];

export const validateInput = (conditions: ValidateInputProps) => {
  const failedCondition = conditions.find((condition) => !condition.condition);
  if (failedCondition) {
    throw new Error(failedCondition.message || "Invalid input.");
  }
};
