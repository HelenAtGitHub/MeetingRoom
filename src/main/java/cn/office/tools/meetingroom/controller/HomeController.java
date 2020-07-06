package cn.office.tools.meetingroom.controller;


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
@RequestMapping("/home")
public class HomeController {

    @Autowired
    private TemplateEngine engine;
    
    @GetMapping("/index")
    @ResponseBody
    public String GetString(){
        Context ctx = new Context();
        return engine.process("/index", ctx);
    }
    
}