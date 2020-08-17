package cn.office.tools.meetingroom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cn.office.tools.meetingroom.dao.MeetingRoom;
import cn.office.tools.meetingroom.service.MeetingRoomService;
import cn.office.tools.meetingroom.vo.ResponseBasePojo;

@RestController
@RequestMapping("/rooms")
public class RoomController {
    @Autowired
    private MeetingRoomService meetingService;

    @RequestMapping(value="/", method = RequestMethod.GET)
    public ResponseBasePojo getRooms() {
        ResponseBasePojo po = new ResponseBasePojo();
        po.code = 0;
        po.data = meetingService.getAllMeetingRooms();
        return po;
    }
    
}