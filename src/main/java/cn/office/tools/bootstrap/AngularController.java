package cn.office.tools.bootstrap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Controller
@RequestMapping("/")
public class AngularController {

    @Autowired
    private TemplateEngine engine;
    
    @GetMapping
    @ResponseBody
    public String Bootstrap(){
        return engine.process("/index", new Context());
    }
    
}