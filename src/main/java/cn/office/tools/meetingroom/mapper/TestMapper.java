package cn.office.tools.meetingroom.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import cn.office.tools.meetingroom.dao.Test;

@Mapper
public interface TestMapper {
    @Select("select * from test")
    List<Test> selectAllTests();
}