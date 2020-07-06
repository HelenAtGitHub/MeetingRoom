package cn.office.tools.meetingroom.service;

import java.util.List;

import org.springframework.stereotype.Service;

import cn.office.tools.meetingroom.dao.Test;

@Service
public interface HomeService {
    List<Test> selectAllTests();
}