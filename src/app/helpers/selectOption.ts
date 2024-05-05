export const selectOption = async (id: string, values: string[]) => {
  const [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    args: [id, JSON.parse(JSON.stringify(values)) as string[]] as const,
    func: async (id, values) => {
      const element = document.getElementById(id) || document.querySelector(`[data-testid=${id}]`);

      // HTML select
      if (element?.tagName === 'SELECT') {
        const selectElement = element as HTMLSelectElement;

        values.forEach((value) => {
          const options = selectElement.options;
          const option = Array.from(options).find(({ textContent }) =>
            textContent?.includes(value)
          );

          if (option) {
            selectElement.value = option.value;
            const event = new Event('change', { bubbles: true });
            selectElement.dispatchEvent(event);
          }
        });

        return;
      }

      // React select
      if (element) {
        const reactSelect = element.querySelector('input');

        if (!reactSelect) return;
        const reactSelectInput = reactSelect as HTMLInputElement;

        for (const value of values) {
          await new Promise<void>((resolve) => setTimeout(resolve, 1));

          reactSelectInput.value = value;
          reactSelectInput.dispatchEvent(new Event('change', { bubbles: true }));
          reactSelectInput.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
          );
        }
      }
    }
  });
};
