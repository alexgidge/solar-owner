//To be inserted into the web-gl's index.html page, after the loader.js
<script>
    async function ConnectWallet(myGameInstance) {
    if (window.solana) {
    if (window.solana.isPhantom) {
    window.alert("Phantom is installed");
    window.solana.on("connect", () => console.log("connected!"))
    var resp;
    try {
    resp = await window.solana.connect();
}
    catch (err) {
    window.alert(err.toString());
    console.log(err.toString());
    // { code: 4001, message: 'User rejected the request.' }
}
    if (resp) {
    window.alert(resp.publicKey.toString());
    //TODO: unityInstance.SendMessage('MyGameObject', 'MyFunction');
    myGameInstance.SendMessage('Sun', 'SetSOLOwnership', 'true');
}
    else {
    window.alert("wallet not connected");
    myGameInstance.SendMessage('Sun', 'SetSOLOwnership', 'false');
}

} else {
    window.alert("unknown wallet is installed");
    myGameInstance.SendMessage('Sun', 'SetSOLOwnership', 'false');
}
} else {
    window.alert("no solana wallet found. Please use recommended wallets.");
    myGameInstance.SendMessage('Sun', 'SetSOLOwnership', 'false');
}
}
</script>
<script>
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    // Mobile device style: fill the whole browser client area with the game canvas:
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
    document.getElementsByTagName('head')[0].appendChild(meta);
}

    var myGameInstance = null;
    var canvas = document.querySelector("#unity-canvas");
    var config = {
    dataUrl: "Build/Web-GL-Deploy.data",
    frameworkUrl: "Build/Web-GL-Deploy.framework.js",
    codeUrl: "Build/Web-GL-Deploy.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "solar-owner",
    productVersion: "1.01",
    // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
    // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
}
    var progress = function () { };

    createUnityInstance(canvas, config, progress).then((unityInstance) => { ConnectWallet(unityInstance); });
</script>