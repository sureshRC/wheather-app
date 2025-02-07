package com.sureshrc.wheatherapp.controller;

import com.sureshrc.wheatherapp.WeatherConstants;
import com.sureshrc.wheatherapp.dto.MailDTO;
import com.sureshrc.wheatherapp.dto.ResponseDto;
import com.sureshrc.wheatherapp.service.NotificationService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/notification/v1")
@CrossOrigin(origins = "*")
@Validated
public class NotificationController implements WeatherConstants
{
    private final NotificationService notificationService;

    @PostMapping("/mail")
    public ResponseEntity<ResponseDto<Object>> welcomeMail(@Valid @RequestBody MailDTO mailDTO )
    {
        notificationService.sendSimpleMail(mailDTO);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(
                        ResponseDto.builder()
                                .status(SUCCESS)
                                .data("Mail sent successfully")
                                .isError(false)
                                .message("Mail sent successfully")
                                .build());
    }
}
