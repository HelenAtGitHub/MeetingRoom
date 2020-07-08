package cn.office.tools;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
@MapperScan("cn.office.tools.*.mapper")
public class Startup {
    public static void main(String[] args) {
        SpringApplication.run(Startup.class, args);
    }
}