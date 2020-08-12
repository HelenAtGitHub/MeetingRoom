package cn.office.tools.meetingroom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.office.tools.meetingroom.dao.MeetingRoom;
import cn.office.tools.meetingroom.dao.RoomTimeperiod;
import cn.office.tools.meetingroom.mapper.MeetingRoomMapper;
import cn.office.tools.meetingroom.mapper.RoomTimeperiodMapper;

@Service
public class MeetingRoomServiceImpl implements MeetingRoomService {

    @Autowired
    private MeetingRoomMapper meetingMapper;
    @Autowired
    private RoomTimeperiodMapper roomTimeperiodMapper;

    @Override
    public List<MeetingRoom> getAllMeetingRooms() {
  
        return meetingMapper.getAllMeetingRooms();
    }

    @Override
    public List<RoomTimeperiod> getAllTimeperiod() {
        
        return roomTimeperiodMapper.getAllTimeperiod();
    }
    
}