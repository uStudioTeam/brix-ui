export const trimText = ({ text, onChange }) => {
  const regex = /[\r\n\v]}+|[\s]{2,}/gm;

  if (regex.test(text)) {
    onChange(text.replace(regex, ' '));
    return false;
  }

  return true;
};
