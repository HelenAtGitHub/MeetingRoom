package cn.office.tools;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("cn.office.tools.*.mapper")
public class Startup {
    public static void main(String[] args) {
        SpringApplication.run(Startup.class, args);
    }
}