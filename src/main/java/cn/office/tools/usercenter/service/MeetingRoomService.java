package cn.office.tools.usercenter.service;

import java.util.List;

import org.springframework.stereotype.Service;

import cn.office.tools.usercenter.dao.MeetingRoom;
//imprort cn.office.tools.usercenter.dao.;

@Service
public interface MeetingRoomService {
    List<MeetingRoom> getAllMeetingRooms();  
}