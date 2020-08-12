package cn.office.tools.meetingroom.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import cn.office.tools.meetingroom.dao.RoomTimeperiod;

@Mapper
public interface RoomTimeperiodMapper {
    @Select("SELECT * FROM room_timeperiod")
    List<RoomTimeperiod> getAllTimeperiod();
}