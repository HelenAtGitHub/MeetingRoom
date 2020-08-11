package cn.office.tools.usercenter.service;

import java.util.List;

import org.springframework.stereotype.Service;

import cn.office.tools.usercenter.dao.MeetingRoom;
//imprort cn.office.tools.usercenter.dao.;
import cn.office.tools.usercenter.dao.RoomTimeperiod;

@Service
public interface MeetingRoomService {
    List<MeetingRoom> getAllMeetingRooms();  
    List<RoomTimeperiod> getAllTimeperiod();
}