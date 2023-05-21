import { getCssText, reset, globalStyles } from "@/ui";

const getResetAndCss = () => {
  const css = getCssText();
  reset();
  globalStyles();
  return css;
};

export const Stylesheet = () => {
  return (
    <style
      id="stitches"
      dangerouslySetInnerHTML={{ __html: getResetAndCss() }}
    />
  );
};
