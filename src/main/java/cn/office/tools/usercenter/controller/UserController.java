package cn.office.tools.usercenter.controller;

import java.math.BigInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import cn.office.tools.usercenter.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;

@Controller
@EnableAutoConfiguration
@RequestMapping("/administrator")
@Api(tags = "用户管理相关(Admin权限)")
@PreAuthorize("hasRole('Admin')")
public class UserController {
    @Autowired
    private TemplateEngine engine;
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    @ResponseBody
    @ApiOperation("显示用户列表")
    //@ApiImplicitParam(name = "id", value = "id", defaultValue = "99", required = true)
    public String Index() {
        Context ctx = new Context();
        ctx.setVariable("users", userService.getAllUsers());
        return engine.process("/administrator/user/index", ctx);
    }
}