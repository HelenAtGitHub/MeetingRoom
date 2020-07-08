package cn.office.tools.usercenter.controller;

import java.math.BigInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import cn.office.tools.usercenter.service.UserService;

@Controller
@EnableAutoConfiguration
@RequestMapping("/administrator")
public class UserController {
    @Autowired
    private TemplateEngine engine;
    @Autowired
    private UserService userService;

    @GetMapping("/user")
    @ResponseBody
    public String Index() {
        System.out.println(userService.getUserById(BigInteger.valueOf(1)));
        Context ctx = new Context();
        return engine.process("/administrator/user/index", ctx);
    }
}