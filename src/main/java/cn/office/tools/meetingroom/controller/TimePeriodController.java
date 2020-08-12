package cn.office.tools.meetingroom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cn.office.tools.meetingroom.dao.RoomTimeperiod;
import cn.office.tools.meetingroom.service.MeetingRoomService;

@RestController
@RequestMapping("/times")
public class TimePeriodController {
    @Autowired
    private MeetingRoomService meetingService;

    @RequestMapping(value="/", method = RequestMethod.GET)
    public List<RoomTimeperiod> getTimePeriod() {
        return meetingService.getAllTimeperiod();
    }

}