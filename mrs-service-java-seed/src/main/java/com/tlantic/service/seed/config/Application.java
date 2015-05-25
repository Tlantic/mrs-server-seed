package com.tlantic.service.seed.config;

import org.springframework.context.annotation.*;

@Configuration
@ComponentScan(basePackages = "com.tlantic.service.seed")
@PropertySource("classpath:seed.properties")
public class Application {

}
