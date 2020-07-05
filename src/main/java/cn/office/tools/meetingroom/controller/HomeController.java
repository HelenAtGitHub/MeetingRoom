package cn.office.tools.meetingroom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.office.tools.meetingroom.dao.Test;
import cn.office.tools.meetingroom.service.HomeService;

@Controller
@EnableAutoConfiguration
@RequestMapping("/home")
public class HomeController {

    @Autowired
    private HomeService homeService;

    @GetMapping("index")
    @ResponseBody
    public List<Test> Index(){
        return homeService.selectAllTests();
    }
    
}