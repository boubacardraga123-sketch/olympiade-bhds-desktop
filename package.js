{
  "name": "olympiade-bhds-desktop",
  "version": "1.0.0",
  "description": "Olympiade des Cerveaux Guinée — Collection BHDS",
  "main": "main.js",
  "author": "Collection BHDS",
  "license": "MIT",
  "scripts": {
    "start": "electron .",
    "build:win": "electron-builder --win",
    "build:linux": "electron-builder --linux"
  },
  "build": {
    "appId": "com.bhds.olympiade",
    "productName": "Olympiade BHDS",
    "directories": { "output": "dist" },
    "files": [
      "main.js",
      "preload.js",
      "src/**/*"
    ],
    "win": {
      "target": [{ "target": "nsis", "arch": ["x64"] }]
    },
    "linux": {
      "target": ["AppImage"]
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true,
      "createDesktopShortcut": true,
      "shortcutName": "Olympiade BHDS"
    }
  },
  "devDependencies": {
    "electron": "^31.0.0",
    "electron-builder": "^24.13.3"
  }
}
