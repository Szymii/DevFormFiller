export const fillInput = async (id: string, value: string) => {
  const [tab] = await chrome.tabs.query({ active: true });
  return await chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    args: [id, value],
    func: (id, value) => {
      const element = (document.getElementById(id) ||
        document.querySelector(`[data-testid=${id}]`)) as HTMLInputElement;

      if (element) {
        element.value = value;
        const event = new Event('change', { bubbles: true });
        element.dispatchEvent(event);
      }
    }
  });
};
