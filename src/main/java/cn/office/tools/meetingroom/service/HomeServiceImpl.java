package cn.office.tools.meetingroom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.office.tools.meetingroom.dao.Test;
import cn.office.tools.meetingroom.mapper.TestMapper;


public class HomeServiceImpl implements HomeService {

    @Autowired
    private TestMapper testmapper;

    @Override
    public List<Test> selectAllTests() {
        return testmapper.selectAllTests();
    }
    
}