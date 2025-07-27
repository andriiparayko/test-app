export const getNormalizedBoxStyledProps = (props) => {
  const styledPropKeys = Object.entries(props).reduce((cssPropsAccumulator, [propKey, propValue]) => {
    if (propKey.startsWith("$")) {
      const cssPropKey = propKey.slice(1).replace(/[A-Z]/g, (match) => "-" + match.toLowerCase());
      return [...cssPropsAccumulator, `${cssPropKey}: ${propValue}`];
    }
    return cssPropsAccumulator;
  }, []);

  return styledPropKeys.join(";");
};
