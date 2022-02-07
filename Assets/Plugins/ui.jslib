var plugin = {
  SunWalletConnected: function() {
    unityInstance.SendMessage('SunController', 'SetSOLOwnership', true);
  }
};

mergeInto(LibraryManager.library, plugin);