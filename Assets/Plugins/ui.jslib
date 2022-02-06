var plugin = {

  const isPhantomInstalled = window.solana && window.solana.isPhantom;

  Hello: function () {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        window.alert("Phantom is installed");
      }
      else
      {
        window.alert("unknown wallet is installed");
      }
    }
    else
    {

      window.alert("no solana wallet installed");
    }

  }
};

mergeInto(LibraryManager.library, plugin);