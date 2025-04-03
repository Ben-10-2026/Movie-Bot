const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // Add Your Api Key ( Contact https://wa.me//+1(917)243-9704?text=Api_Key to buy api Key (Low Price...❤️) )
    API_KEY: 'free',
    // Put your bot's owner number.
    OWNER: '94742274855',
    // Set Bot's thumbnail image.
    THUMBNAIL: 'https://i.ibb.co/d0FD0F5R/IMG-20250304-WA0000.jpg', 
    // Set Bot's SinhalaSub image.
    SINHALA_SUB: 'https://i.ibb.co/PsFZCxCQ/images.png',
    // Set Bot's Cinesubz image.
    CINESUBZ: 'https://i.ibb.co/vxcWWrCD/99a8f519d0b1975a.jpg',
    // Set Bot's Baiscope image.
    BAISCOPE: 'https://i.ibb.co/39qs4RK4/1679311670111.jpg',
    // Set Bot's SexMv image.
    SX_MV: 'https://i.ibb.co/4RgkDKqn/parental-advisory-explicit-content-18-years-grunge-round-red-warning-stamp-isolated-on-white-vector.jpg',
    // Add Your Movie Group Jid
    JID: '120363417513112063@g.us',
    // Set Bot's Name. ( ඔයාට ඕනි බොට් නේම් එකක් දෙන්න...❤️)
    BOT_NAME: 'Test-MD',
    // Define the bot's footer or signature. ( ඔයාගෙ නම දෙන්න...❤️)
    FOOTER: '©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚'
};
