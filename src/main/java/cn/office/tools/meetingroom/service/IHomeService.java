package cn.office.tools.meetingroom.service;

import java.util.List;

import cn.office.tools.meetingroom.dao.Test;

public interface IHomeService {
    List<Test> selectAllTests();
}