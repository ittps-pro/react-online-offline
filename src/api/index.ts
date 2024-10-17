import * as process from "process";
export function saveData(data) {
  let localData = window.localStorage.getItem("data");
  let remoteData = [];
}
\

function handleOnline() {
    // setIsOnline(true);
  }
  function handleOffline() {
    // setIsOnline(false);
  }

export function sendMessage(message) {
  console.log("🔵 You sent: " + message);

  let l = Array.from(message.split(" "));

  console.log(l);

  window.localStorage.setItem("text", message);
}

export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log(window.localStorage);
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
}
