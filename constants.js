export const SEARCH_PROVIDERS = [
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=', icon: 'https://www.google.com/favicon.ico' },
  { id: 'ddg', name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=', icon: 'https://duckduckgo.com/favicon.ico' },
  { id: 'bing', name: 'Bing', url: 'https://www.bing.com/search?q=', icon: 'https://www.bing.com/favicon.ico' }
];

export const DEFAULT_SETTINGS = {
  cols: 4,
  searchProvider: 'google',
  theme: 'dark',
  themeColor: '#f97316',
  backgroundColor: '#020617',
  backgroundImage: '',
  tileOpacity: 0.8,
  timeFormat24h: true,
  openInNewTab: true,
  showWeather: true,
  weatherConfigs: [{ id: 'ny-weather', location: 'New York, NY', lat: 40.7128, lng: -74.0060 }],
  showNotes: true,
  notesPosition: 'left',
  weatherStyle: 'detailed',
  weatherUnit: 'imperial'
};

export const INITIAL_PAGES = [
  { id: 'home-group', name: 'Home' },
  { id: 'work-group', name: 'Work' }
];

export const INITIAL_TILES = [
  { id: 't1', title: 'YouTube', url: 'https://youtube.com', imageUrl: '', position: 0, pageId: 'home-group' },
  { id: 't2', title: 'Reddit', url: 'https://reddit.com', imageUrl: '', position: 1, pageId: 'home-group' },
  { id: 't3', title: 'GitHub', url: 'https://github.com', imageUrl: '', position: 2, pageId: 'home-group' },
  { id: 't4', title: 'ChatGPT', url: 'https://chatgpt.com', imageUrl: '', position: 3, pageId: 'home-group' }
];
