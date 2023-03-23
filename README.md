# Weather-app
 
This is a simple weather app that allows users to search for the current weather conditions of a city of a country using the OpenWeatherMap API.

Getting Started

Prerequisites

To use this app, you will need to obtain an API key from OpenWeatherMap. 

	1. You can get a free API key by signing up on their website at https://openweathermap.org/.
	
	2. Create account in the above url using Email id.
	
	3. Go to the API Keys section and get the API Key.
	
	4. Use this key in the code at the place of API_TOKEN_HERE in file App.tsx.

Local Environment setup Requirements:

    1. Node version - v18.4.0
    
    2. Install Vite - "npm install vite"
    
    
Steps to run the application:

    1. Clone the repository to local folder
    
    2. Open powershell and Perform following steps in powershell
    
        a. cd to the above local folder
	
        b. Install Dependenicies.
            > npm install
	    
        c. Start Web Application
            > npm run dev
	    
        d. Open application url in browser for web application
            default : "http://localhost:5173"
	    
        e. Enter the city name, country name and click Submit.
	
        f. The current weather conditions for the city should be displayed.

Built With

	1. React
	
	2. TypeScript
	
	3. Styled-components
	
	4. OpenWeatherMap API
	
	5. Axios
