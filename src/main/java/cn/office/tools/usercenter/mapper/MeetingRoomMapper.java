package cn.office.tools.usercenter.mapper;

//import cn.office.tools.usercenter.dao.MeetingRoom;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import cn.office.tools.usercenter.dao.MeetingRoom;

@Mapper
public interface MeetingRoomMapper {
    @Select("select * from meeting_room")
    List<MeetingRoom> getAllMeetingRooms();
}