# Weather App
 
A vanilla JavaScript weather app that fetches real-time weather data based on the selected city. Built as part of the freeCodeCamp JavaScript curriculum.
 
## Demo
 
Select a city from the dropdown and click **Get Weather** to see the current weather conditions displayed in a clean, animated card layout.
 
## Features
 
- Fetches real-time weather data from the freeCodeCamp Weather Proxy API
- Displays the following weather information:
  - Location name
  - Weather icon
  - Main weather type (e.g., Clear, Clouds, Rain)
  - Temperature in Celsius
  - Feels like temperature
  - Humidity percentage
  - Wind speed in m/s
  - Wind gust speed in m/s
- Graceful error handling with user-friendly alert messages
- Animated card reveal when weather data is displayed
- Displays N/A for any unavailable data fields
## Cities Supported
 
- New York
- Los Angeles
- Chicago
- Tokyo
- London
> **Note:** Paris is intentionally unsupported by the API and will trigger an error message.
 
## Technologies Used
 
- HTML5
- CSS3 (Flexbox, CSS transitions, oklch colors)
- Vanilla JavaScript (ES6+)
  - Async/Await
  - Fetch API
  - DOM manipulation
  - Template literals
    
## How to Use
 
1. Clone the repository
2. Open `index.html` in your browser
3. Select a city from the dropdown menu
4. Click the **Get Weather** button
5. Weather information will appear on the right side of the card
   
## API
 
This project uses the [freeCodeCamp Weather Proxy API](https://weather-proxy.freecodecamp.rocks/api/city/<CITY>).
 
- Data is returned in the **metric system**
- Temperature in **Celsius**
- Wind speed in **m/s**
  
## Project Structure
 
```
weather-app/
├── index.html
├── styles.css
└── script.js
```
 
## What I Learned
 
- Working with asynchronous JavaScript using `async/await`
- Fetching and handling data from external APIs
- Dynamic DOM manipulation based on API responses
- Handling API errors gracefully
- CSS animations and transitions for a better user experience
- Working with oklch color space for modern, accessible color design
  
## License
 
This project was built as part of the [freeCodeCamp](https://www.freecodecamp.org) Full Stack Developer Curriculum.
