package cn.office.tools;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan("cn.office.tools.*")
@MapperScan("cn.office.tools.*.mapper")
public class Startup {
    public static void main(String[] args) {
        SpringApplication.run(Startup.class, args);
        System.out.println("Run");
    }
}