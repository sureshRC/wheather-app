package com.sureshrc.wheatherapp.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MailDTO
{
    @NotBlank(message = "Mail ID should not be empty")
    private String fromMailId;

    @NotBlank(message = "To UserName should not be empty")
    private String fromName;

//    @NotBlank(message = "Subject should not be empty")
//    private String subject;

    @NotBlank(message = "Body should not be empty")
    private String body;
}
