export const click = async (id: string) => {
  const [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    args: [id],
    func: (id) => {
      const element = (document.getElementById(id) ||
        document.querySelector(`[data-testid=${id}]`)) as HTMLElement;

      if (element) {
        element.click();
      }
    }
  });
};
