/* Styles for the Alt Front End Explorer */
@import url('https://fonts.googleapis.com/css2?family=SF+Pro+Rounded&display=swap');

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #EFF2FA; 
    color: #002B5C;
}

.header-container {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
    background-color: #EFF2FA;
    z-index: 999;
}

.header-content {
    margin-bottom: 10px;
}

.header-container h1,
.header-container h3 {
    font-family: 'SF Pro Rounded', sans-serif;
}
.header-container div {
    display: flex;
    align-items: center;
}

.header-container img {
    width: 40px; /* Adjust the width as desired */
    height: 40px; /* Adjust the height as desired */
    margin-right: 10px; /* Adjust the margin as desired */
}

header h1, header h3, header p {
  clear: none;
}

#footer-text {
  font-size: .8em; /* adjust as needed */
  color: #000; /* adjust to match your header color */
  padding: 10px; /* adjust as needed */
  text-align: center; /* adjust as needed */
}

.iframe-url {
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
    color: #002B5C;
}

.toggle-container {
    display: flex;
    align-items: center;
    justify-content: center; /* Add this line to horizontally center the button */
    margin-top: 10px; /* Adjust the margin as desired */
}


.toggle-container button {
    background-color: #002B5C;
    color: #EFF2FA;
    border: none;
    padding: 8px 12px;
    font-size: 1em;
    cursor: pointer;
}


.content-section {
    padding: 20px;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

@media (min-width: 1200px) {
    .grid-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

.iframe-wrapper {
    position: relative;
}

.grid-item {
    width: 100%;
    height: 400px;
    border: 2px solid #002B5C;
}

.description {
    padding: 10px;
    background-color: #F5F7FA;
    margin-top: 10px;
}

.description .details {
    font-size: 0.9em; /* Adjust the font size as desired */
    color: #888; /* Adjust the color as desired */
    margin-top: 5px; /* Add margin to separate it from the previous paragraph */
}

.description .details::before {
    content: "↳ "; /* Unicode arrow character */
}


.vote-container {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.upvote-button,
.downvote-button {
    font-size: 1.5em;
    cursor: pointer;
}

.vote-count {
    margin-left: 10px;
}

/* Additional styles for the Alt Front End Explorer */

.dark-mode {
    background-color: #222;
    color: #FFF;
}

.dark-mode .header-container {
    background-color: #222;
    color: #FFF;
}

.dark-mode .toggle-container button {
    background-color: #FFF;
    color: #222;
}

.dark-mode .iframe-url {
    color: #FFF;
}

.dark-mode .grid-item {
    border: 2px solid #FFF;
}

.dark-mode .description {
    background-color: #333;
}

body.dark-mode #footer-text {
  color: var(--white); /* or the light color you are using */
}

@keyframes twinkling-sphere {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    50% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0);
    }
}

.twinkling-sphere {
    position: absolute;
    width: 2px;
    height: 2px;
    background-color: #EFF2FA;
    border-radius: 50%;
    box-shadow: 0 0 2px #EFF2FA;
    animation: twinkling-sphere 6s infinite;
}

.header-container {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
    background-color: #EFF2FA;
    z-index: 999;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Add black shadow behind text */
}


.toggle-container {
    display: flex;
    align-items: center;
}

.header-info {
    margin-top: 10px; /* Add a margin to separate it from the image */
    text-align: center; /* Center the text */
}

.header-info h3 {
    max-width: 80%; /* Limit the maximum width of the text to 50% */
    margin: 0 auto; /* Center the text horizontally */
}

