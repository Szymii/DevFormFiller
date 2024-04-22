export const fillForm = async (formId: string) => {
  const [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    func: (formId) => {
      console.log(formId);
    },
    args: [formId]
  });
};
