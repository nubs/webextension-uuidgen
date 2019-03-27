const uuid = require('uuid/v4');

async function saveUuidToClipboard() {
  return navigator.clipboard.writeText(uuid());
}

browser.browserAction.onClicked.addListener(saveUuidToClipboard);
