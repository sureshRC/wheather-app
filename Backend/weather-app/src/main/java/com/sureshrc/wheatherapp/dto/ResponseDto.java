package com.sureshrc.wheatherapp.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResponseDto<T>
{
    private Boolean isError;
    private String status;
    private String message;
    private T data;
}
