const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

let conversation = [
    {
        keywords: ['army', 'soldier', 'military'],
        keyPhrases: ['donate to army', 'support soldiers', 'help military'],
        bot: 'Thank you for your generosity! Our army charity program supports soldiers and their families. Would you like to know more about our program or proceed with donation?'
    },
    {
        keywords: ['orphans', 'children', 'orphanage'],
        keyPhrases: ['donate to orphans', 'support orphanages', 'help children'],
        bot: 'Thank you for your kindness! Our orphan charity program provides support to orphanages and vulnerable children. Would you like to know more about our program or proceed with donation?'
    },
    {
        keywords: ['needers', 'crisis', 'families', 'individuals'],
        keyPhrases: ['donate to needers', 'support families', 'help individuals in crisis'],
        bot: 'Thank you for your compassion! Our needers charity program supports individuals and families in crisis. Would you like to know more about our program or proceed with donation?'
    },
    {
        keywords: ['use', 'how', 'help'],
        keyPhrases: ['how do i use this chatbot', 'how to donate'],
        bot: 'Welcome! I’m here to help you donate to your favorite charity. Simply type in the name of the charity or cause you’d like to support, and I’ll guide you through the process.'
    },
    {
        keywords: ['transfer', 'funds', 'payment'],
        keyPhrases: ['how do i transfer funds', 'secure payment'],
        bot: 'To transfer funds, simply select the charity and amount you’d like to donate and I’ll provide you with a secure payment link. You can use your credit card, PayPal, or bank transfer to complete the transaction.'
    },
    {
        keywords: ['track', 'donation', 'status'],
        keyPhrases: ['can i track my donation', 'donation status'],
        bot: 'Yes, you can track your donation! Once you’ve completed the transaction, you’ll receive a confirmation email with a unique donation ID. You can use this ID to track the status of your donation on our website.'
    },
    {
        keywords: ['anonymous', 'privacy'],
        keyPhrases: ['can i donate anonymously', 'donate without sharing my name'],
        bot: 'Yes, you can donate anonymously. Simply select the "anonymous" option during the donation process, and your name and contact information will not be shared with the charity or anyone else.'
    },
    {
        keywords: ['hi', 'hello', 'hey'],
        keyPhrases: ['hi', 'hello', 'hey there', 'good morning', 'good evening'],
        bot: 'Hello! Welcome to our charity funding chatbot. How can I assist you today?'
    },
    {
        keywords: ['donate'],
        keyPhrases: ['i want to donate', 'how can i donate', 'help me donate'],
        bot: 'Thank you for considering a donation! Please specify the cause or charity you’d like to support, and I’ll guide you through the process.'
    },
    {
        keywords: ['wallet', 'account', 'cryptocurrency', 'crypto'],
        keyPhrases: ['how to create a wallet', 'how to make a crypto account', 'help with cryptocurrency'],
        bot: 'To donate using cryptocurrency, you need to follow these steps:\n1. *Create a Wallet: First, you need to create a cryptocurrency wallet. A wallet is a secure digital account where you can store, send, and receive cryptocurrencies. You can use popular wallets like MetaMask, Trust Wallet, or Coinbase.\n2. **Understand Cryptocurrency: Cryptocurrency is a digital currency that uses cryptography for security. Bitcoin, Ethereum, and USDT are examples of cryptocurrencies. Transactions are recorded on a decentralized ledger called the blockchain.\n3. **Buy Cryptocurrency: After creating your wallet, you’ll need to purchase cryptocurrency. You can do this on exchanges like Binance, Coinbase, or Kraken. Once you have your crypto, transfer it to your wallet.\n4. **Proceed with Donation*: Once your wallet is set up and funded, you can proceed to donate by selecting the cryptocurrency payment option. I’ll guide you through the rest!'
    },
    {
        keywords: ['security', 'safe', 'protect'],
        keyPhrases: ['how to keep my crypto safe', 'crypto security basics', 'protect my wallet'],
        bot: 'Security is crucial when dealing with cryptocurrency. Under the name Sankalp, here are some basic tips to keep your funds safe:\n1. *Use Strong Passwords: Always use strong, unique passwords for your wallet and exchange accounts. Avoid using easily guessable information.\n2. **Enable Two-Factor Authentication (2FA): Wherever possible, enable 2FA for an extra layer of security. This ensures that even if someone has your password, they’ll need a second form of verification to access your account.\n3. **Be Cautious of Phishing: Phishing attacks are common in the crypto space. Always double-check the URLs and never click on suspicious links. Ensure you’re on the correct website before entering your credentials.\n4. **Backup Your Wallet: Make sure to back up your wallet’s private keys or seed phrases. Store these backups securely and offline. If you lose access to your wallet, these backups are the only way to recover your funds.\n5. **Keep Software Updated*: Ensure that your wallet and any other crypto-related software are always updated to the latest version. This helps protect against known vulnerabilities.'
    }
];

sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        chatLog.innerHTML += `<li>You: ${userMessage}</li>`;
        userInput.value = '';

        const botResponse = getBotResponse(userMessage);
        chatLog.innerHTML += `<li>Bot: ${botResponse}</li>`;
    }
});

function getBotResponse(userMessage) {
    // Convert the user message to lowercase for easier comparison
    const message = userMessage.toLowerCase();

    // Example sentiment analysis (basic positive/negative detection)
    let sentiment = 'neutral';
    if (message.includes('thank you') || message.includes('great') || message.includes('good')) {
        sentiment = 'positive';
    } else if (message.includes('bad') || message.includes('poor') || message.includes('not happy')) {
        sentiment = 'negative';
    }

    // Keyword and key phrase matching
    for (let i = 0; i < conversation.length; i++) {
        // Check for key phrases first
        for (let j = 0; j < conversation[i].keyPhrases.length; j++) {
            if (message.includes(conversation[i].keyPhrases[j])) {
                return `${conversation[i].bot} (Sentiment: ${sentiment})`;
            }
        }

        // If no key phrase matches, check for keywords
        for (let k = 0; k < conversation[i].keywords.length; k++) {
            if (message.includes(conversation[i].keywords[k])) {
                return `${conversation[i].bot} (Sentiment: ${sentiment})`;
            }
        }
    }

    return `I didn’t understand that. Please try again! (Sentiment: ${sentiment})`;
}
