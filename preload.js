const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  isElectron: true,

  saveFile: (options) => ipcRenderer.invoke('save-file', options),
  openFile: (options) => ipcRenderer.invoke('open-file', options),

  onMenuExport:    (cb) => ipcRenderer.on('menu-export',     () => cb()),
  onMenuImport:    (cb) => ipcRenderer.on('menu-import',     () => cb()),
  onMenuClearData: (cb) => ipcRenderer.on('menu-clear-data', () => cb()),
});
