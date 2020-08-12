package cn.office.tools.usercenter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import cn.office.tools.usercenter.service.MeetingRoomService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Controller
@EnableAutoConfiguration
@RequestMapping("/meeting")
@Api(tags = "会议管理")
//@PreAuthorize("hasRole('Admin')")
public class MeetingRoomController {
    @Autowired
    private TemplateEngine engine;
    @Autowired
    private MeetingRoomService meetingService;

    @GetMapping("/rooms")
    @ResponseBody
    @ApiOperation("会议列表")
    //@ApiImplicitParam(name = "id", value = "id", defaultValue = "99", required = true)
    public String Index() {
        //System.out.println(meetingService.getAllMeetingRooms());
        Context ctx = new Context();
        ctx.setVariable("rooms",meetingService.getAllMeetingRooms());
        return engine.process("/meeting/rooms/index", ctx);
    }
}