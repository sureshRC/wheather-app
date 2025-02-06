package com.sureshrc.wheatherapp.service;

import com.sureshrc.wheatherapp.WeatherConstants;
import com.sureshrc.wheatherapp.dto.MailDTO;
import jakarta.mail.internet.MimeMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

@Service
@Slf4j
public class NotificationService implements WeatherConstants
{
    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String sender;

    public void sendSimpleMail(MailDTO mailDTO) {
        MimeMessage message = javaMailSender.createMimeMessage();

        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(sender);
            helper.setSubject("Weather Application Contact Message");

            String templatePath = "templates/email-template.html";
            String emailBody = new String(Files.readAllBytes(Paths.get(new ClassPathResource(templatePath).getURI())), StandardCharsets.UTF_8);

            emailBody = emailBody.replace("{{name}}", mailDTO.getFromName())
                    .replace("{{email}}", mailDTO.getFromMailId())
                    .replace("{{message}}", mailDTO.getBody());

            helper.setText(emailBody, true);

        } catch (Exception e) {
            throw new RuntimeException("Error creating email message", e);
        }

        javaMailSender.send(message);
        log.info("Mail sent successfully");
    }

}
