package cn.office.tools.meetingroom.service;

import java.util.List;

import org.springframework.stereotype.Service;

import cn.office.tools.meetingroom.dao.MeetingRoom;
import cn.office.tools.meetingroom.dao.RoomTimeperiod;

@Service
public interface MeetingRoomService {
    List<MeetingRoom> getAllMeetingRooms();  
    List<RoomTimeperiod> getAllTimeperiod();
}