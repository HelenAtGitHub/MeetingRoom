package cn.office.tools.meetingroom.controller;

import java.util.List;

import com.fasterxml.jackson.databind.json.JsonMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cn.office.tools.meetingroom.dao.RoomTimeperiod;
import cn.office.tools.meetingroom.service.MeetingRoomService;
import cn.office.tools.meetingroom.vo.ResponseBasePojo;

@RestController
@RequestMapping("/times")
public class TimePeriodController {
    @Autowired
    private MeetingRoomService meetingService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseBasePojo getTimePeriod() {
        ResponseBasePojo po = new ResponseBasePojo();
        po.code = 0;
        po.data = (List<RoomTimeperiod>)meetingService.getAllTimeperiod();
        return po;
    }

}