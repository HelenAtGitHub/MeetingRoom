package cn.office.tools.usercenter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Controller
@EnableAutoConfiguration
@RequestMapping("/administrator")
public class UserController {
    @Autowired
    private TemplateEngine engine;
    
    @GetMapping("/user")
    @ResponseBody
    public String Index(){
        Context ctx = new Context();
        return engine.process("/administrator/user/index", ctx);
    }
}