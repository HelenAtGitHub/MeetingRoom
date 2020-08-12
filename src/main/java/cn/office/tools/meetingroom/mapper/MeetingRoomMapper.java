package cn.office.tools.meetingroom.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import cn.office.tools.meetingroom.dao.MeetingRoom;

@Mapper
public interface MeetingRoomMapper {
    @Select("select * from meeting_room")
    List<MeetingRoom> getAllMeetingRooms();
}