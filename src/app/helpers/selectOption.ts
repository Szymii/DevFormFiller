export const selectOption = async (id: string, values: string[]) => {
  const [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    args: [id, values] as const,
    func: (id, values) => {
      const element = (document.getElementById(id) ||
        document.querySelector(`[data-testid=${id}]`)) as HTMLSelectElement;

      if (element) {
        values.forEach((value) => {
          const options = element.options;
          const option = Array.from(options).find(({ textContent }) =>
            textContent?.includes(value)
          );

          if (option) {
            element.value = option.value;
            const event = new Event('change', { bubbles: true });
            element.dispatchEvent(event);
          }
        });
      }
    }
  });
};
