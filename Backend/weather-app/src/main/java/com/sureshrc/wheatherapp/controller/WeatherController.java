package com.sureshrc.wheatherapp.controller;

import com.sureshrc.wheatherapp.WeatherConstants;
import com.sureshrc.wheatherapp.dto.ResponseDto;
import com.sureshrc.wheatherapp.service.WeatherService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api/weather/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class WeatherController implements WeatherConstants
{
    @Autowired
    private WeatherService weatherService;

    @GetMapping("/{city}")
    public ResponseEntity<ResponseDto<Object>> getWeather(@PathVariable String city)
    {
        HashMap<String, Object> serviceResponse = weatherService.getWeatherByCity(city);
        if(serviceResponse.containsKey(ERROR))
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                            ResponseDto.builder()
                                    .message("Something went wrong while fetching weather details")
                                    .status(SUCCESS)
                                    .isError(true)
                                    .data(serviceResponse.get(RESPONSE))
                                    .build());
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).body(
                            ResponseDto.builder()
                                    .message("Weather details fetched successfully")
                                    .status(ERROR)
                                    .isError(false)
                                    .data(serviceResponse.get(RESPONSE))
                                    .build()
            );
        }
    }

}
