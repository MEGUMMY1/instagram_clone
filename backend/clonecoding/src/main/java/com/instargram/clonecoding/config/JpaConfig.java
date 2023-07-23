package com.instargram.clonecoding.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories("com.instargram.clonecoding")
public class JpaConfig {

}
