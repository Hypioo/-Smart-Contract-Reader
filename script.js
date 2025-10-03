// --- CONFIGURATION ---
const RPC_URL = "YOUR_RPC_URL_HERE";

// --- ELEMENTS ---
const readBtn = document.getElementById('readBtn');
const addressInput = document.getElementById('contractAddress');
const abiInput = document.getElementById('contractAbi');
const functionInput = document.getElementById('functionName');
const resultDiv = document.getElementById('result');

// --- APP LOGIC ---
readBtn.addEventListener('click', async () => {
    const address = addressInput.value;
    const abi = abiInput.value;
    const funcName = functionInput.value;

    if (!address || !abi || !funcName) {
        resultDiv.innerText = "Please fill in all fields.";
        return;
    }

    resultDiv.innerText = "Reading...";

    try {
        const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
        const contract = new ethers.Contract(address, JSON.parse(abi), provider);
        
        // Dynamically call the function
        const data = await contract[funcName]();

        resultDiv.innerText = `✅ Result:\n${data.toString()}`;
    } catch (error) {
        resultDiv.innerText = `❌ Error: ${error.message}`;
    }
});
