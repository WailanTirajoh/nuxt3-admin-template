export const useText = () => {
  const copy = (text: string): void | boolean => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    return true
  }

  return {
    copy
  }
}
