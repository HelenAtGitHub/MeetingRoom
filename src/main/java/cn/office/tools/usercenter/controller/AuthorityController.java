package cn.office.tools.usercenter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Controller
@EnableAutoConfiguration
@RequestMapping("/authority")
public class AuthorityController {
    @Autowired
    private TemplateEngine engine;
    
    @GetMapping("/login")
    @ResponseBody
    public String Index(){
        Context ctx = new Context();
        return engine.process("/login", ctx);
    }

    @PostMapping("/success")
    public String Success(){
        
        return "redirect:/";
    }
}