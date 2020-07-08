package cn.office.tools.usercenter.service;

import java.math.BigInteger;
import java.util.List;

import org.springframework.stereotype.Service;

import cn.office.tools.usercenter.dao.User;

@Service
public interface UserService {
    List<User> getAllUsers();

    User getUserById(BigInteger id);

    int insertUser(User user);

    int updateUser(User user);

    int deleteUser(BigInteger id);
}