import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Mainweather from './components/Mainweather';
import TodayHighlights from './components/TodayHighlights';
import axios from 'axios';
import FiveDayForecast from './components/FiveDayForecast';
import WeatherSuggestion from './components/WeatherSuggestion';
import HourlyForecast from './components/HourlyForecast';



function App() {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [weatherData, setWeatherData] = useState(null);
  // const [city, setcity] = useState('London');
  const [city, setcity] = useState('Mumbai');
  const [airQualityData, setAirQualityData] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState(null);

  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    fetchweatherData(city)
  }, [city]);

  const fetchAirQualityData = (lat, lon) => {
    const API_KEY = '1d5762eaee9edbfaf0e430baa85115ae';
    axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then(response => {
        setAirQualityData(response.data.list[0]);
      })
      .catch(error => console.error('Error fetching the air quality data:', error));
  };

  const fetchweatherData = async (city) => {
    const API_KEY = '1d5762eaee9edbfaf0e430baa85115ae';
    setLoading(true);
    setError(null);
    setWeatherData(null);
    setAirQualityData(null);
    setFiveDayForecast(null);

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
      const data = await response.json();

      //new code for hourly updates
      try {
        const hourlyResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=24&appid=${API_KEY}`);
        const hourlyData = await hourlyResponse.json();
        setHourlyForecast(hourlyData);
      } catch (err) {
        console.error("Error fetching hourly forecast:", err);
        setHourlyForecast(null);
      }

      if (!response.ok || !data.main) {
        setError(data.message || "City not found");
        setLoading(false);
        return;
      }

      setWeatherData(data);

      // Fetch Air Quality
      try {
        const airResponse = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${API_KEY}`);
        const airData = await airResponse.json();
        setAirQualityData(airData.list[0]);
      } catch (err) {
        setAirQualityData(null);
      }

      // Fetch 5 Day Forecast
      try {
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);
        const forecastData = await forecastResponse.json();
        setFiveDayForecast(forecastData);
      } catch (err) {
        setFiveDayForecast(null);
      }

      setError(null);
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const handleSearch = (searchedCity) => {
    setcity(searchedCity);
  };

  const handleCurrentLocationClick = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const API_KEY = '1d5762eaee9edbfaf0e430baa85115ae';

        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
          const data = await response.json();

          if (!response.ok || !data.main) {
            setError(data.message || "Location weather not found");
            setLoading(false);
            return;
          }

          setWeatherData(data);

          try {
            const airResponse = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
            const airData = await airResponse.json();
            setAirQualityData(airData.list[0]);
          } catch {
            setAirQualityData(null);
          }

          try {
            const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
            const forecastData = await forecastResponse.json();
            setFiveDayForecast(forecastData);
          } catch {
            setFiveDayForecast(null);
          }

          setError(null);
        } catch {
          setError("Network error. Please try again.");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        setLoading(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError("Permission denied. Please allow location access.");
            break;
          case error.POSITION_UNAVAILABLE:
            setError("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            setError("The request to get your location timed out.");
            break;
          default:
            setError("An unknown error occurred.");
            break;
        }
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">

      <div>
        {/* <Navbar onSearch={handleSearch} /> */}
        <Navbar onSearch={handleSearch} onCurrentLocation={handleCurrentLocationClick} />

        {/* Show loading spinner/message */}
        {loading && (
          // <div className="text-center text-gray-400 py-8 text-xl">Loading...</div>
          <div className="bg-white/40 dark:bg-gray-800/60 backdrop-blur-md border border-white/20 dark:border-gray-700/40 rounded-xl shadow p-6 text-center text-gray-400 dark:text-gray-200 py-8 text-xl mx-auto max-w-lg mt-12">Loading...</div>
        )}

        {/* Show error message */}
        {error && (
          // <div className="text-center text-red-500 py-8 text-xl">{error}</div>
          <div className="bg-white/40 dark:bg-gray-800/60 backdrop-blur-md border border-white/20 dark:border-gray-700/40 rounded-xl shadow p-6 text-center text-red-500 py-8 text-xl mx-auto max-w-lg mt-12">{error}</div>
        )}

        {/* Show weather UI only if not loading and not error */}
        {!loading && !error && weatherData && (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Side */}
              <div className="flex flex-col gap-2 lg:col-span-1">
                <Mainweather weatherData={weatherData} />
                {hourlyForecast && <HourlyForecast forecastData={hourlyForecast} />}
                <div>
                  {fiveDayForecast && <FiveDayForecast forecastData={fiveDayForecast} />}
                </div>
              </div>
              {/* Right Side */}
              <div className="lg:col-span-2">
                <TodayHighlights weatherData={weatherData} airQualityData={airQualityData} />
                <WeatherSuggestion weatherData={weatherData} airQualityData={airQualityData} />
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );




}

export default App
