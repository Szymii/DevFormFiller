import { defineStore } from 'pinia';
import type { Options } from './types/Options';

export const useOptionsStore = defineStore('options', {
  state: () => ({
    settings: null as Options | null
  }),

  actions: {
    async getOptions() {
      const fallback = {
        kebab: false
      };
      const data = await chrome.storage.sync.get('settings');

      if ('settings' in data) {
        this.settings = data.settings;
        return;
      }

      this.settings = fallback;
    }
  }
});
