package com.sureshrc.wheatherapp.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sureshrc.wheatherapp.WeatherConstants;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class WeatherService implements WeatherConstants
{
    @Value("${openweather.api.key}")
    private String apiKey;
    @Value("${openweather.api.url}")
    private String apiUrl;
    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper(); // Jackson ObjectMapper


    public HashMap<String, Object> getWeatherByCity(String city)
    {
        HashMap<String, Object> map = new HashMap<>();

        try{
            String url = String.format("%s?q=%s&appid=%s&units=metric", apiUrl, city, apiKey);
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
//            Object weatherResponse=response.getBody();
            Map<String, Object> weatherResponse = objectMapper.readValue(response.getBody(),
                    objectMapper.getTypeFactory().constructMapType(Map.class, String.class, Object.class));

            map.put(RESPONSE, weatherResponse);
            map.put(SUCCESS, "true");
        }catch (Exception e){
            map.put(ERROR, "false");
            map.put(RESPONSE, e.getMessage());
        }

        return map;
    }
}
